import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { customFetch } from "../../utils/axios";
import { getUserFromLocalStorage } from "../../utils/localStorage";
import { logout } from "../user/userSlice";

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
			return { ...initialState };
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
	},
});

export default jobSlice.reducer;
export const { setJobInfo, clearValues } = jobSlice.actions;
