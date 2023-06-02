import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { customFetch } from "../../utils/axios";
import { getUserFromLocalStorage } from "../../utils/localStorage";

const initialState = {
	isLoading: false,
	position: "",
	company: "",
	jobLocation: "",
	jobTypeOptions: ["full-time", "part-time", "remote", "internship"],
	jobType: "full-time",
	statusOptions: ["interview", "declined", "pending"],
	status: "pending",
	isEditing: false,
	editJobId: "",
};

export const addSingleJob = createAsyncThunk("add job", async (info, thunkApi) => {
	const url = "";
	try {
	} catch (error) {}
});
export const editJob = createAsyncThunk("edit job", async (info, thunkApi) => {
	const url = "";
	try {
	} catch (error) {}
});
const addJob = createAsyncThunk("addJob");
const jobSlice = createSlice({
	name: "job",
	initialState,
	reducers: {
		setJobInfo: (state, action) => {
			state[action.payload.name] = action.payload.value;
		},
	},
});

export default jobSlice.reducer;
export const { setJobInfo } = jobSlice.actions;
