import { useEffect } from "react";
import Job from "./Job";
import Wrapper from "../assets/wrappers/JobsContainer";
import { useDispatch, useSelector } from "react-redux";
import BigLoader from "./BigLoader";
import { getAllJobs } from "../Features/allJobs/allJobsSlice";

const JobsContainer = () => {
	const dispatch = useDispatch();
	// this functions is to get all jobs
	
	useEffect(() => {
		dispatch(getAllJobs());
	}, []);
	const { jobs, isLoading } = useSelector((store) => store.allJobs);
	if (isLoading)
		return (
			<Wrapper>
				<BigLoader />
			</Wrapper>
		);
	if (jobs.length === 0) {
		return (
			<Wrapper>
				<h1>No jobs to display ...</h1>
			</Wrapper>
		);
	}
	return (
		<Wrapper>
			<h5> {jobs.length} Jobs Found </h5>
			<div className="jobs">
				{jobs.map((item, index) => {
					return <Job key={item._id} {...item} />;
				})}
			</div>
		</Wrapper>
	);
};
export default JobsContainer;
