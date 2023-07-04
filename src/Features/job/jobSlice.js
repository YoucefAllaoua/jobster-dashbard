import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { customFetch } from "../../utils/axios";
import { getUserFromLocalStorage } from "../../utils/localStorage";
import { logout } from "../user/userSlice";
import { showLoading, hideLoading, getAllJobs } from "../allJobs/allJobsSlice";
import { addJob } from "./JobThunk";
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

export const addSingleJob = createAsyncThunk("add job", addJob);
export const deleteJob = createAsyncThunk("/delete-job", );
export const editJob = createAsyncThunk("edit job", async ({ job_id, job }, thunkApi) => {
  try {
    const url = `/jobs/${job_id}`;
    const token = thunkApi.getState().user.user.token;
    const { data } = await customFetch.patch(url, job, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    thunkApi.dispatch(clearValues());
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.response.data.msg);
  }
});
const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    setJobInfo: (state, action) => {
      state[action.payload.name] = action.payload.value;
    },
    clearValues: (state) => {
      return { ...initialState, jobLocation: getUserFromLocalStorage().location };
    },
    setEditJob: (state, { payload }) => {
      console.log(payload);
      return { ...state, isEditing: true, ...payload };
    },
  },
  extraReducers: {
    [addSingleJob.pending]: (state) => {
      state.isLoading = true;
    },
    [addSingleJob.fulfilled]: (state) => {
      state.isLoading = false;
      toast.success("job added");
    },
    [addSingleJob.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [deleteJob.rejected]: (state, { payload }) => {
      toast.error(payload);
    },
    [deleteJob.fulfilled]: (state, { payload }) => {
      toast.success(payload);
    },
    [editJob.pending]: (state) => {
      state.isLoading = true;
    },
    [editJob.fulfilled]: (state) => {
      state.isLoading = false;
      toast.success("job edited");
    },
    [editJob.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export default jobSlice.reducer;
export const { setJobInfo, clearValues, setEditJob } = jobSlice.actions;
