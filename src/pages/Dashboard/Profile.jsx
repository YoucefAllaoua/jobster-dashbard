import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormRow from "../../components/FormRow";
import { Wrapper } from "../../assets/wrappers/DashboardFormPage";
import { toast } from "react-toastify";

const Profile = () => {
	const { isLoading, user } = useSelector((store) => store.user);
	const [useInfo, setUserInfo] = useState({
		name: user?.name || "",
		email: user?.email || "",
		location: user?.location || "",
		lastName: user?.lastName || "",
	});
	const dispatch = useDispatch();
	return <Wrapper></Wrapper>;
};
export default Profile;
