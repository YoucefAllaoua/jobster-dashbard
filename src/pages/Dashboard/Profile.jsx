import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormRow from "../../components/FormRow";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { toast } from "react-toastify";
import { Loader } from "../../components";

const Profile = () => {
	const { isLoading, user } = useSelector((store) => store.user);
	const [userInfo, setUserInfo] = useState({
		name: user?.name || "",
		email: user?.email || "",
		location: user?.location || "",
		lastName: user?.lastName || "",
	});
	const dispatch = useDispatch();
	const handleSubmit = (e) => {
		e.preventDefault();
		const { name, email, lastName, location } = userInfo;
		if (!name || !email || !lastName || !location) {
			toast.error("Please fill out all fields !");
			return;
		}
		dispatch(updateUserInfo(userInfo));
	};
	const handleChange = (e) => {
		console.log(e);
		const name = e.target.name;
		const value = e.target.value;
		console.log(name);
		console.log(value);
		setUserInfo({ ...userInfo, [name]: value });
	};
	return (
		<Wrapper>
			<form onSubmit={handleSubmit} className="form">
				<div className="form-center">
					<FormRow type="text" name="name" value={userInfo.name} labelText="name" handleChange={handleChange} />
					<FormRow type="text" name="lastName" value={userInfo.lastName} labelText="last name" handleChange={handleChange} />
					<FormRow type="email" name="email" value={userInfo.email} labelText="email" handleChange={handleChange} />
					<FormRow type="text" name="location" value={userInfo.location} labelText="location" handleChange={handleChange} />
					<button className="btn btn-block" type="submit" disabled={isLoading}>
						{isLoading ? <Loader /> : "submit"}
					</button>
				</div>
			</form>
		</Wrapper>
	);
};
export default Profile;
