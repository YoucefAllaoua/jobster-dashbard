import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addSingleJob, editJob } from "../../Features/job/jobSlice";
 
const AddJob = () => {
	const { isLoading, position, company, jobLocation, jobType, jobTypeOptions, status, statusOptions, isEditing, editJobId } = useSelector((store) => store.job);
	const dispatch = useDispatch();
	const handleSubmit = () => {
		if (!position || !company || !jobLocation) {
			toast.error("please fill out all fields!");
			return;
		}
		if (isEditing) {
			dispatch(editJob());
		} else {
			dispatch(addJob());
		}
	};
	const handleJobInput = (e) => {
		const name = e.target.name;
		const value = e.target.value;
	};
	return <div>AddJob</div>;
};
export default AddJob;
