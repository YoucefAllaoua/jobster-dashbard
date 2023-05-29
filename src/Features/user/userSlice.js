import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";
const initialState = {
	Loading: true,
	user: null,
};
const submitUser = createAsyncThunk("user auth", async () => {});
const userSlice = createSlice({
	name: "user",
	initialState,
});
export default userSlice.reducer;
