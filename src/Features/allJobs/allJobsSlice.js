import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getAllJobsThunk } from "../../thunkFunctions/allJobsFunctions";

const initialFiltersState = {
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
	stats: {},
	monthlyApplications: [],
	...initialFiltersState,
};
// this function is to get all jobs
export const getAllJobs = createAsyncThunk("get all jobs", async (_, thunkApi) => {
	const url = `/jobs`;
	return getAllJobsThunk(url, thunkApi);
});
const allJobsSlice = createSlice({
	name: "allJobs",
	initialState,
});

export default allJobsSlice.reducer;
