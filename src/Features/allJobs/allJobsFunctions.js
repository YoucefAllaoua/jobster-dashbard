import { toast } from "react-toastify";
import { customFetch } from "../../utils/axios";

export const getAllJobsThunk = async (url, thunkApi) => {
  const token = thunkApi.getState().user.user.token;
  try {
    const { data } = await customFetch.get(url, { headers: { authorization: `Bearer ${token} ` } });

    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.response.data.msg);
  }
};
export const getStats = async (thunkApi) => {
  try {
    const url = `/jobs/stats`;
    const token = thunkApi.getState().user.user.token;

    const { data } = await customFetch.get(url, { headers: { authorization: `Bearer ${token} ` } });
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.response.data.msg);
  }
};
