import { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
	const navigate = useNavigate();
	const { user } = useSelector((store) => store.user);
	if (!user ) {
		return <Navigate to="/landing" />;
	} else {
		return children;
	}
};
export default ProtectedRoute;
