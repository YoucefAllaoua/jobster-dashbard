import { customFetch } from "../../utils/axios";
import { getAllJobs, hideLoading, showLoading } from "../allJobs/allJobsSlice";
import { logout } from "../user/userSlice";
import { clearValues } from "./jobSlice";

export const addJob = async (info, thunkApi) => {
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
};
export const deleteSingleJob = async (jobId, thunkApi) => {
  thunkApi.dispatch(showLoading());
  try {
    const token = thunkApi.getState().user.user.token;

    const resp = await customFetch.delete(`jobs/${jobId}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    thunkApi.dispatch(getAllJobs());
    return resp.data.msg;
  } catch (error) {
    thunkApi.dispatch(hideLoading());
    console.log(error);
    return thunkApi.rejectWithValue(error.response.data.msg);
  }
};
export const editSingleJob = async ({ job_id, job }, thunkApi) => {
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
};
