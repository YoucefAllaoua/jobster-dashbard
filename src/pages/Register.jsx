import { useEffect, useState } from "react";
import { Logo } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { FormRow } from "../components";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { loginUser, registerUser } from "../Features/user/userSlice";

const initialState = {
	name: "",
	email: "",
	password: "",
	isMember: true,
};

const Register = () => {
	const dispatch = useDispatch();

	const [values, setValues] = useState(initialState);
	const handleChange = (e) => {
		// the brackets to make a dynamic key
		setValues({ ...values, [e.target.name]: e.target.value });
	};
	const submitHandler = (e) => {
		e.preventDefault();
		const { isMember, email, name, password } = values;
		if (!email || !password || (!isMember && !name)) {
			toast.error("please fill all fields!!");
		} else {
			if (isMember) {
				dispatch(loginUser({ email: email, password: password }));
			} else {
				dispatch(registerUser({ email: email, password: password, name: name }));
			}
		}

		e.preventDefault();
	};
	// this function is to toggle between the register and login form
	const toggleMember = () => {
		setValues({ ...values, isMember: !values.isMember });
	};
	return (
		<Wrapper className=" full-page ">
			<form onSubmit={submitHandler} className="form">
				<Logo />
				<h3>{values.isMember ? "Login" : "Register"}</h3>
				{!values.isMember && <FormRow name={"name"} type={"text"} value={values.name} labelText={"name"} handleChange={handleChange} />}
				<FormRow name={"email"} type={"email"} value={values.email} labelText={"email"} handleChange={handleChange} />
				<FormRow name={"password"} type={"password"} value={values.password} labelText={"password"} handleChange={handleChange} />
				<button type="submit" className=" btn btn-block ">
					submit
				</button>
				<p className="  ">
					{!values.isMember ? "Already a member ? " : " Not a member yet ?"}
					<button type="button" className="member-btn" onClick={toggleMember}>
						{values.isMember ? "register " : "Login"}
					</button>
				</p>
			</form>
		</Wrapper>
	);
};
export default Register;
