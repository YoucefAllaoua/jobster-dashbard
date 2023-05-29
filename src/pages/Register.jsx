import { useEffect, useState } from "react";
import { Logo } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
const initialState = {
	name: "",
	email: "",
	password: "",
	isMember: true,
};
const Register = () => {
	const [values, setValues] = useState(initialState);
	const handleChange = () => {};
	const submitHandler = (e) => {
		e.preventDefault();
	};
	return (
		<Wrapper className=" full-page ">
			<form onSubmit={submitHandler} className="form">
				<Logo />
				<h3>Logo</h3>
				<div className="form-row">
					<label htmlFor="name" className="form-label">
						name
					</label>
					<input type="text" name="name" value={values.name} onChange={handleChange} className="form-input" />
				</div>
				<button type="submit" className=" btn btn-block ">
					submit
				</button>
			</form>
		</Wrapper>
	);
};
export default Register;
