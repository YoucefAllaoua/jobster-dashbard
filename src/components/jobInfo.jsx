import Wrapper from "../assets/wrappers/JobInfo";

const JobInfo = ({ icon, text }) => {
	return (
		<Wrapper>
			<span className="icon d">{icon}</span>
			<span className="icon">{text}</span>
		</Wrapper>
	);
};
export default JobInfo;
