import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	sideBarIsOpen: false,
};
const sideBarSlice = createSlice({
	name: "sideBare",
	initialState,
	reducers: {
		toggleSideBar: (state) => {
			state.sideBarIsOpen = !state.sideBarIsOpen;
		},
	},
});

export default sideBarSlice.reducer;
export const { toggleSideBar } = sideBarSlice.actions;
