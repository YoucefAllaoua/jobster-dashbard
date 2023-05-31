import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormRow from "../../components/FormRow";
import  Wrapper  from "../../assets/wrappers/DashboardFormPage";
import { toast } from "react-toastify";

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
		dispatch(updateUserInfo());
	};
	return <Wrapper></Wrapper>;
};
export default Profile;
