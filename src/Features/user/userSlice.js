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
		const {
			data: { user },
		} = await customFetch.post(url, userInfo);
		return user;
	} catch (error) {
		return thunkApi.rejectWithValue(error.response.data.msg);
	}
});
export const loginUser = createAsyncThunk("user register", async (userInfo, thunkApi) => {
	const url = "";

	try {
		const { data } = await axios.post(url, userInfo);
		console.log(data);
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
			console.log(state.user);
			toast.success(`Hello ${state.user.name} `);
		},
		[registerUser.rejected]: (state, action) => {
			toast.error(action.payload);
			state.isLoading = false;
		},
		[registerUser.pending]: (state) => {
			state.isLoading = true;
		},
	},
});
export default userSlice.reducer;
