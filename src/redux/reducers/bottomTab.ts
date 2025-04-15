import { createSlice } from "@reduxjs/toolkit"

interface Bottomtab {
    isVisible: boolean
}

const initialState: Bottomtab = { isVisible: true }

const bottomTabSlice = createSlice({
    name: 'BottomTab',
    initialState: initialState,
    reducers: {
        toggleVisibility: (state, action) => {
            state.isVisible = action.payload;
        }
    }
})


export default bottomTabSlice.reducer

export const { toggleVisibility } = bottomTabSlice.actions