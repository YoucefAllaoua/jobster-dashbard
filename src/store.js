import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Features/user/userSlice";
import SideBarReducer from "./Features/Sidebar/SideBarSlice";
import jobReducer from "./Features/job/jobSlice";

export const store = configureStore({
	reducer: {
		user: userReducer,
		sideBar: SideBarReducer,
		job : jobReducer
	},
});
