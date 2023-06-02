const { createSlice } = require("@reduxjs/toolkit");
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
const allJobsSlice = createSlice({
	name: "allJobs",
	initialState,
});

export default allJobsSlice.reducer;
