// redux/slices/favSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: number[] = [];

const favSlice = createSlice({
  name: "favSlice",
  initialState,
  reducers: {
    toggleFav: (state, action: PayloadAction<number>) => {
      const id = action.payload;

      return state.includes(id)
        ? state.filter(item => item !== id)
        : [...state, id];
    },
  },
});

export const { toggleFav } = favSlice.actions;
export default favSlice.reducer;
