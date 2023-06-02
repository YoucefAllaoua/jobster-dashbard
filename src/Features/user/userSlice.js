import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { customFetch } from "../../utils/axios";
import { addUserToLocalStorage, getUserFromLocalStorage, removeUserFromLocalStorage } from "../../utils/localStorage";

const initialState = {
	isLoading: false,
	user: getUserFromLocalStorage(),
};
// to make the code cleaner we can set up a file with all the async function
// we return those functions in the callBack function
// so those functions must return a promise and we return them in the call back function of the createAsyncThunk

// this function is for the register
export const registerUser = createAsyncThunk("user register", async (userInfo, thunkApi) => {
	const url = "/auth/register";
	try {
		const { data } = await customFetch.post(url, userInfo);
		return data.user;
	} catch (error) {
		return thunkApi.rejectWithValue(error.response.data.msg);
	}
});
export const loginUser = createAsyncThunk("user login", async (userInfo, thunkApi) => {
	const url = "/auth/login";

	try {
		const {
			data: { user },
		} = await customFetch.post(url, userInfo);
		addUserToLocalStorage(user);

		return user;
	} catch (error) {
		return thunkApi.rejectWithValue(error.response.data.msg);
	}
});
// this function is to update the user info
export const updateInfo = createAsyncThunk("auth/updateInfo", async (info, thunkApi) => {
	const url = "/auth/updateUser";
	console.log("update");

	try {
		// the getState method of the thunkApi return  all the store (our big state)
		const token = thunkApi.getState().user.user.token;
		const {
			data: { user },
		} = await customFetch.patch(url, info, { headers: { authorization: `Bearer ${token}` } });
		return user;
	} catch (error) {
		// we will check if the user is not authorized so we will log it out
		if (error.response.status === 401) {
			setTimeout(() => {
				thunkApi.dispatch(logout());
			}, 3000);
			return thunkApi.rejectWithValue("Unauthorized logging Out ...");
		}
		return thunkApi.rejectWithValue(error.response.data.msg);
	}
});
const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		logout: (state, { payload }) => {
			state.user = null;
			removeUserFromLocalStorage();
			if (payload) toast.success("Logging Out ..");
		},
	},
	extraReducers: {
		[loginUser.fulfilled]: (state, { payload }) => {
			state.isLoading = false;
			state.user = payload;
			addUserToLocalStorage(state.user);

			toast.success("hello back" + " " + state.user.name);
		},
		[loginUser.rejected]: (state, { payload }) => {
			state.isLoading = false;
			toast.error(payload);
		},
		[loginUser.pending]: (state) => {
			state.isLoading = true;
		},
		[registerUser.fulfilled]: (state, action) => {
			state.user = action.payload;
			state.isLoading = false;
			addUserToLocalStorage(state.user);

			toast.success(`Hello ${state.user.name} `);
		},
		[registerUser.rejected]: (state, action) => {
			state.isLoading = false;
			toast.error(action.payload);
		},
		[registerUser.pending]: (state) => {
			state.isLoading = true;
		},
		[updateInfo.pending]: (state) => {
			state.isLoading = true;
		},
		[updateInfo.fulfilled]: (state, { payload }) => {
			state.isLoading = false;
			state.user = payload;
			toast.success("user updated with success");
		},
		[updateInfo.rejected]: (state, { payload }) => {
			state.isLoading = false;
			toast.error(payload);
		},
	},
});
export default userSlice.reducer;
export const { logout } = userSlice.actions;
