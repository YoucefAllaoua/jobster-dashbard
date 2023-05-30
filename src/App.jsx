/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Landing, Register, Error } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SharedLayout from "./pages/Dashboard/SharedLayout";
import Stats from "./pages/Dashboard/Stats";
// when we use this styled component we will have a button (usual one in our page with a uniq class generated auto)
// so we can have many items that return all the same node element but we will not have name conflict because each one have a uniq class
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/dashboard" element={<SharedLayout />}>
					<Route index element={<Stats />} />
				</Route>
				<Route path="landing" element={<Landing />} />
				<Route path="register" element={<Register />} />
				<Route path="*" element={<Error />} />
			</Routes>
			<ToastContainer position="top-center" autoClose={2500} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
		</BrowserRouter>
	);
}

export default App;
