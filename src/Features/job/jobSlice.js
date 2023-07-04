import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { customFetch } from "../../utils/axios";
import { getUserFromLocalStorage } from "../../utils/localStorage";
import { logout } from "../user/userSlice";
import { showLoading, hideLoading, getAllJobs } from "../allJobs/allJobsSlice";
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
  const url = "/jobs";
  const token = thunkApi.getState().user.user.token;
  try {
    const { data } = await customFetch.post(url, info, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    thunkApi.dispatch(clearValues());
  } catch (error) {
    if (error.response.status === 401) {
      setTimeout(() => {
        thunkApi.dispatch(logout());
      }, 3000);
      return thunkApi.rejectWithValue("You are not authorized logging out ...");
    }
    return thunkApi.rejectWithValue(error.response.data.msg);
  }
});
export const deleteJob = createAsyncThunk("/delete-job", async (jobId, thunkApi) => {
  thunkApi.dispatch(showLoading());
  try {
    const token = thunkApi.getState().user.user.token;

    const resp = await customFetch.delete(`jobs/${jobId}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    thunkApi.dispatch(getAllJobs());
    return resp.data;
  } catch (error) {
    thunkApi.dispatch(hideLoading());
    console.log(error);
    return thunkApi.rejectWithValue(error.response.data.msg);
  }
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
    clearValues: (state) => {
      return { ...initialState, jobLocation: getUserFromLocalStorage().location };
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
  },
});

export default jobSlice.reducer;
export const { setJobInfo, clearValues } = jobSlice.actions;
