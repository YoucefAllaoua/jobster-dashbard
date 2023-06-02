import { customFetch } from "../utils/axios";

export const getAllJobsThunk = async (url, thunkApi) => {
	console.log("test");
	const token = thunkApi.getState().user.user.token;
	console.log(token);
	try {
		const { data } = await customFetch.get(url, { headers: { authorization: `Bearer ${token}` } });

		console.log(data);
		return data;
	} catch (error) {
		return thunkApi.rejectWithValue(error.response.data.msg);
	}
};
