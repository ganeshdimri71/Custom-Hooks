import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {x:0, y:0};
export const userSlice = createSlice({
	name: "mouse",
	initialState: {
		value: initialStateValue,
	},
	reducers: {
		mousePos: (state, action) => {
			state.value = action.payload;
		},
		mouseClick: ( state, action ) => {
			console.log('state', state)
			console.log('action',action)
			state.value = action.payload;
			console.log('state',state.value)
		}
	},
});

export const { mousePos, mouseClick } = userSlice.actions;

export default userSlice.reducer;
