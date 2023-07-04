import { customFetch } from "../../utils/axios";
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
