import { customFetch } from "../utils/axios";

export const getAllJobsThunk = async (info, thunkApi) => {
	const url = "";
	try {
		const { data } = await customFetch.get(url);

		console.log(data);
		return data;
	} catch (error) {
		return thunkApi.rejectWithValue(error.response.data.msg);
	}
};
