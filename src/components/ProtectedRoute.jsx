import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
	const navigate = useNavigate();
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	if (!isLoggedIn) {
		return <Navigate to="/landing" />;
	} else {
		return children;
	}
};
export default ProtectedRoute;
