import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";
const initialState = {
	isLoading: true,
	user: null,
};
// this function is for the register
export const registerUser = createAsyncThunk("user register", async (userInfo, thunkApi) => {
	const url = "";
	try {
		const { data } = await axios.post(url, userInfo);
		console.log(data);
		return "user registered with success !";
	} catch (error) {
		return thunkApi.rejectWithValue("something went Wrong !");
	}
});
export const loginUser = createAsyncThunk("user register", async (userInfo, thunkApi) => {
	const url = "";
	try {
		const { data } = await axios.post(url, userInfo);
		console.log(data);
		return `Welcome back ${userInfo.name}`;
	} catch (error) {
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
		},
	},
});
export default userSlice.reducer;
