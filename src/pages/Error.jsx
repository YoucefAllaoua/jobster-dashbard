import { NavLink } from "react-router-dom";
import img from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";
const Error = () => {
	return (
		<Wrapper className="full-page">
			<div className="">
				<img src={img} alt="not found" />
				<h3>Oooh ! something went Wrong</h3>
				<p>text</p>
				<NavLink to="/">back Home</NavLink>
			</div>
		</Wrapper>
	);
};
export default Error;
