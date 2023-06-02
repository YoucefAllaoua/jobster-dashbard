import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllJobsThunk } from "../../thunkFunctions";
import { toast } from "react-toastify";

const initialFilterState = {
	search: "",
	searchStatus: "all",
	searchType: "all",
	sort: "latest",
	sortOptions: ["latest", "oldest", "a-z", "z-a"],
};
const initialState = {
	isLoading: false,
	jobs: [],
	totalJobs: 0,
	numOfPages: 1,
	page: 1,
	monthlyApplications: [],
	...initialFilterState,
};
// this function is to get all the jobs
const getAllJobs = createAsyncThunk("get all jobs", async (info, thunkApi) => {
	return getAllJobsThunk(info, thunkApi);
});
const allJobsSlice = createSlice({
	name: "allJobs",
	initialState,
	reducers: {},
	extraReducers: {
		[getAllJobs.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.jobs = action;
		},
		[getAllJobs.pending]: (state, action) => {
			state.isLoading = true;
		},
		[getAllJobs.rejected]: (state, action) => {
			state.isLoading = false;
			toast.error(action);
		},
	},
});

export default allJobsSlice.reducer;
