import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";
import { customFetch } from "../../utils/axios";

const initialState = {
	isLoading: false,
	user: null,
};
// this function is for the register
export const registerUser = createAsyncThunk("user register", async (userInfo, thunkApi) => {
	const url = "/auth/testingRegister";
	try {
		const { data } = await customFetch.post(url, userInfo);
		
		return data.user;
	} catch (error) {
		return thunkApi.rejectWithValue(error.response.data.msg);
	}
});
export const loginUser = createAsyncThunk("user register", async (userInfo, thunkApi) => {
	const url = "";

	try {
		const { data } = await axios.post(url, userInfo);
		return `Welcome back ${userInfo.name}`;
	} catch (error) {
		console.log(error);
		return thunkApi.rejectWithValue("something went Wrong !");
	}
});
const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {},
	extraReducers: {
		[loginUser.fulfilled]: (state) => {
			state.user = "";
			state.isLoading = false;
		},
		[loginUser.rejected]: (state) => {
			state.isLoading = false;
		},
		[loginUser.pending]: (state) => {
			state.isLoading = true;
		},
		[registerUser.fulfilled]: (state, action) => {
			state.user = action.payload;
			state.isLoading = false;
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
