import { useEffect, useState } from "react";
import { Logo } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import FormRow from "../components";
const initialState = {
	name: "",
	email: "",
	password: "",
	isMember: true,
};
const Register = () => {
	const [values, setValues] = useState(initialState);
	const handleChange = (entry) => {
		setValues({ ...values, ...entry });
	};
	const submitHandler = (e) => {
		e.preventDefault();
	};
	return (
		<Wrapper className=" full-page ">
			<form onSubmit={submitHandler} className="form">
				<Logo />
				<h3>Logo</h3>
				<FormRow name={"name"} type={"text"} value={values.name} labelText={"name"} handleChange={handleChange} />
				<button type="submit" className=" btn btn-block ">
					submit
				</button>
			</form>
		</Wrapper>
	);
};
export default Register;
