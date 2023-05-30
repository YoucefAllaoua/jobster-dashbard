import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	isSideBarOpen: false,
};
const sideBarSlice = createSlice({
	name: "sideBare",
	initialState,
	reducers: {
		toggleSideBar: (state) => {
			state.isSideBarOpen = !state.isSideBarOpen;
		},
	},
});

export default sideBarSlice.reducer;
export const { toggleSideBar } = sideBarSlice.actions;
