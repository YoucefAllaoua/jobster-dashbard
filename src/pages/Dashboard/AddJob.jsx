import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addSingleJob, clearValues, editJob, setJobInfo } from "../../Features/job/jobSlice";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { FormRow, FormRowSelect, Loader } from "../../components";
import userSlice from "../../Features/user/userSlice";
import { useEffect } from "react";

const AddJob = () => {
  const { isLoading, position, company, jobLocation, jobType, jobTypeOptions, status, statusOptions, isEditing, editJobId } = useSelector((store) => store.job);
  const {
    user: { location },
  } = useSelector((store) => store.user);
  // this useEffect is te set the location by default to the user location
  useEffect(() => {
    if (!isEditing) {
      dispatch(setJobInfo({ name: "jobLocation", value: location }));
    }
  }, []);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!position || !company || !jobLocation) {
      toast.error("please fill out all fields!");
      return;
    }
    if (isEditing) {
      console.log("isEditing");
      dispatch(editJob({ job_id: editJobId, job: { jobLocation, jobType, status, position, company } }));
    } else {
      dispatch(addSingleJob({ position, company, jobLocation, jobType, status }));
    }
  };
  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(setJobInfo({ name, value }));
  };
  const clear = () => {
    dispatch(clearValues());
  };
  return (
    <Wrapper>
      <form
        onSubmit={handleSubmit}
        className="form"
      >
        <h3>{isEditing ? "Edit job" : "Add job"}</h3>
        <div className="form-center">
          <FormRow
            type="text"
            name="position"
            value={position}
            handleChange={handleJobInput}
          />
          <FormRow
            type="text"
            name="company"
            value={company}
            handleChange={handleJobInput}
          />
          <FormRow
            type="text"
            name="jobLocation"
            value={jobLocation}
            labelText="job Location"
            handleChange={handleJobInput}
          />
          <FormRowSelect
            name="status"
            value={status}
            handleInput={handleJobInput}
            list={statusOptions}
          />
          <FormRowSelect
            name="jobType"
            value={jobType}
            handleInput={handleJobInput}
            labelText="job Type"
            list={jobTypeOptions}
          />
          <div className="btn-container">
            <button
              onClick={clear}
              className=" btn btn-block clear-btn "
              type="button"
            >
              clear
            </button>
            <button
              className=" btn btn-block submit-btn "
              type="submit"
              style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
              disabled={isLoading}
            >
              {isLoading ? <Loader /> : isEditing ? "Edit" : "Add"}
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};
export default AddJob;
