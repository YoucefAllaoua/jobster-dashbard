/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Landing, Register, Error } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AddJob, AllJobs, Profile, SharedLayout, Stats } from "./pages/Dashboard";
// those declarations are for the translations
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { useTranslation, Trans } from "react-i18next";

i18n
	// detect user language
	// learn more: https://github.com/i18next/i18next-browser-languageDetector
	.use(LanguageDetector)
	// this will detect the language of the user using cookie , localStorage ...
	.use(initReactI18next)
	// pass the i18n instance to react-i18next.
	// init i18next
	// for all options read: https://www.i18next.com/overview/configuration-options
	.init({
		debug: true,
		fallbackLng: "en",
		detection: {
			// those define the order of the sources of language detection
			order: ["htmlTag", "cookie", "localStorage", "querystring", "sessionStorage", "navigator", "path", "subdomain"],
			// those to determine the place of storing language after it is changed
			caches: ["localStorage", "cookie"],
		},
		resources: {
			en: {
				translation: {
					part1: "Edit <1>src/App.js</1> and save to reload.",
					part2: "Learn React",
				},
			},
			fr: {
				translation: {
					part1: "Ändere <1>src/App.js</1> und speichere um neu zu laden.",
					part2: " React",
				},
			},
		},
	});
// when we use this styled component we will have a button (usual one in our page with a uniq class generated auto)
// so we can have many items that return all the same node element but we will not have name conflict because each one have a uniq class
function App() {
	useEffect(() => {
		console.log(i18n.language);
	}, []);
	const { t } = useTranslation();
	return (
		// <BrowserRouter>
		// 	<Routes>
		// 		<Route
		// 			path="/"
		// 			element={
		// 				<ProtectedRoute>
		// 					<SharedLayout />
		// 				</ProtectedRoute>
		// 			}
		// 		>
		// 			<Route index element={<Stats />} />
		// 			<Route path="profile" element={<Profile />} />
		// 			<Route path="all-jobs" element={<AllJobs />} />
		// 			<Route path="add-jobs" element={<AddJob />} />
		// 		</Route>
		// 		<Route path="landing" element={<Landing />} />
		// 		<Route path="register" element={<Register />} />
		// 		<Route path="*" element={<Error />} />
		// 	</Routes>
		// 	<ToastContainer position="top-center" autoClose={2500} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
		// </BrowserRouter>
		<>
			<Trans i18nKey="part1"></Trans>
			<br />
			{t("part2")}
		</>
	);
}

export default App;
