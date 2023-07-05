import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getAllJobsThunk, getStats } from "./allJobsFunctions";

const initialFiltersState = {
  search: "",
  searchStatus: "all",
  searchType: "all",
  sort: "latest",
  sortOptions: ["latest", "oldest", "a-z", "z-a"],
  stats: [],
  monthlyApplications: [],
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
export const showStats = createAsyncThunk("/get-stats", async (_, thunkApi) => {
  return getStats(thunkApi);
});

const allJobsSlice = createSlice({
  name: "allJobs",
  initialState,
  reducers: {
    showLoading: (state, action) => {
      state.isLoading = true;
    },
    hideLoading: (state, action) => {
      state.isLoading = false;
    },
    handleChange: (state, action) => {
      const {
        payload: { name, value },
      } = action;
      state[name] = value;
    },
    clearFilters: (state) => {
      return { ...state, ...initialFiltersState };
    },
  },
  extraReducers: {
    [getAllJobs.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.jobs = payload.jobs;
      state.numOfPages = payload.numOfPages;
      state.totalJobs = payload.totalJobs;
    },
    [getAllJobs.rejected]: (state, action) => {
      state.isLoading = false;
      toast.error(action.payload);
    },
    [getAllJobs.pending]: (state, action) => {
      state.isLoading = true;
    },
    [showStats.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.stats = payload.defaultStats;
      state.monthlyApplications = payload.monthlyApplications;
      // state.jobs = payload.jobs;
    },
    [showStats.rejected]: (state, action) => {
      state.isLoading = false;
      toast.error(action.payload);
    },
    [showStats.pending]: (state, action) => {
      state.isLoading = true;
    },
  },
});
export const { showLoading, hideLoading, clearFilters, handleChange } = allJobsSlice.actions;
export default allJobsSlice.reducer;
