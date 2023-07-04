import { FaBriefcase, FaCalendarAlt, FaLocationArrow } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import Wrapper from "../assets/wrappers/Job";
import JobInfo from "./jobInfo";
import { deleteJob, setEditJob } from "../Features/job/jobSlice";

const Job = ({ _id, position, company, jobLocation, jobType, createdAt, status }) => {
  const dispatch = useDispatch();
  const date = new Date(createdAt);
  const newDate = date.toUTCString();
  const finalDate = newDate.split(" ", 4).join(" ");
  return (
    <Wrapper>
      <header>
        <div className="main-icon">{company.charAt(0).toUpperCase()}</div>
        <div className="info">
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <JobInfo
            icon={<FaLocationArrow />}
            text={jobLocation}
          />
          <JobInfo
            icon={<FaCalendarAlt />}
            text={finalDate}
          />
          <JobInfo
            icon={<FaBriefcase />}
            text={jobType}
          />

          <div className={`status ${status}  `}>{status}</div>
        </div>
        <footer>
          <div className="actions">
            <NavLink
              to="/add-jobs"
              className="btn edit-btn"
              onClick={() => {
                dispatch(setEditJob({ editJobId: _id, position, company, Job, jobLocation, jobType, status }));
              }}
            >
              Edit
            </NavLink>
            <button
              type="button"
              className=" btn delete-btn "
              onClick={() => {
                dispatch(deleteJob(_id));
              }}
            >
              Delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};
export default Job;
