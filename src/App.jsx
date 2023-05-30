/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Landing, Register, Error } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AddJob, AllJobs, Profile, SharedLayout, Stats } from "./pages/Dashboard";

// when we use this styled component we will have a button (usual one in our page with a uniq class generated auto)
// so we can have many items that return all the same node element but we will not have name conflict because each one have a uniq class
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<ProtectedRoute>
							<SharedLayout />
						</ProtectedRoute>
					}
				>
					<Route index element={<Stats />} />
					<Route path="profile" element={<Profile />} />
					<Route path="all-jobs" element={<AllJobs />} />
					<Route path="add-jobs" element={<AddJob />} />
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
