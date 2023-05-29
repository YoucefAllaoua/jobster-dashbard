import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const ProtectedRoute = () => {
	const navigate = useNavigate();
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	if (!isLoggedIn) {
		return <Navigate to="/" />;
	} else {
		return <Navigate to="/landing" />;
	}
};
export default ProtectedRoute;
