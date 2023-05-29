import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Features/user/userSlice";

export const store = configureStore({
	reducer: {
		user: userReducer,
	},
});
