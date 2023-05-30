import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";
import { customFetch } from "../../utils/axios";
import { addUserToLocalStorage, getUserFromLocalStorage, removeUserFromLocalStorage } from "../../utils/localStorage";

const initialState = {
	isLoading: false,
	user: getUserFromLocalStorage(),
};

// this function is for the register
export const registerUser = createAsyncThunk("user register", async (userInfo, thunkApi) => {
	const url = "/auth/register";
	try {
		const { data } = await customFetch.post(url, userInfo);
		return data.user;
	} catch (error) {
		return thunkApi.rejectWithValue(error.response.data.msg);
	}
});
export const loginUser = createAsyncThunk("user login", async (userInfo, thunkApi) => {
	const url = "/auth/login";

	try {
		const {
			data: { user },
		} = await customFetch.post(url, userInfo);
		addUserToLocalStorage(user);

		return user;
	} catch (error) {
		return thunkApi.rejectWithValue(error.response.data.msg);
	}
});
const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		logout: (state) => {
			state.user = null;
			removeUserFromLocalStorage();
		},
	},
	extraReducers: {
		[loginUser.fulfilled]: (state, { payload }) => {
			state.isLoading = false;
			state.user = payload;
			addUserToLocalStorage(state.user);

			toast.success("hello back" + " " + state.user.name);
		},
		[loginUser.rejected]: (state, { payload }) => {
			state.isLoading = false;
			toast.error(payload);
		},
		[loginUser.pending]: (state) => {
			state.isLoading = true;
		},
		[registerUser.fulfilled]: (state, action) => {
			state.user = action.payload;
			state.isLoading = false;
			addUserToLocalStorage(state.user);

			toast.success(`Hello ${state.user.name} `);
		},
		[registerUser.rejected]: (state, action) => {
			state.isLoading = false;
			toast.error(action.payload);
		},
		[registerUser.pending]: (state) => {
			state.isLoading = true;
		},
	},
});
export default userSlice.reducer;
export const { logout } = userSlice.actions;
