/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Landing, Dashboard, Register, Error } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// when we use this styled component we will have a button (usual one in our page with a uniq class generated auto)
// so we can have many items that return all the same node element but we will not have name conflict because each one have a uniq class
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="landing" element={<Landing />} />
				<Route path="register" element={<Register />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
