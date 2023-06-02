import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addSingleJob, editJob, setJobInfo } from "../../Features/job/jobSlice";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { FormRow } from "../../components";

const AddJob = () => {
	const { isLoading, position, company, jobLocation, jobType, jobTypeOptions, status, statusOptions, isEditing, editJobId } = useSelector((store) => store.job);
	const job = useSelector((store) => store.job);
	const dispatch = useDispatch();
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!position || !company || !jobLocation) {
			toast.error("please fill out all fields!");
			return;
		}
		if (isEditing) {
			dispatch(editJob());
		} else {
			dispatch(addSingleJob());
		}
	};
	const handleJobInput = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		dispatch(setJobInfo({ name, value }));
	};
	return (
		<Wrapper>
			<form onSubmit={handleSubmit} className="form">
				<h3>{isEditing ? "Edit job" : "Add job"}</h3>
				<div className="form-center">
					<FormRow type="text" name="position" value={position} handleChange={handleJobInput} />
					<FormRow type="text" name="company" value={company} handleChange={handleJobInput} />
					<FormRow type="text" name="jobLocation" value={jobLocation} labelText="job Location" handleChange={handleJobInput} />
					<div className="btn-container">
						<button onClick={() => console.log("clear")} className=" btn btn-block clear-btn " type="button">
							clear
						</button>
						<button className=" btn btn-block submit-btn " type="submit">
							clear
						</button>
					</div>
				</div>
			</form>
		</Wrapper>
	);
};
export default AddJob;
