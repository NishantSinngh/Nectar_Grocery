import { createSlice } from "@reduxjs/toolkit"

interface Bottomtab {
    isVisible: boolean
}

const initialState: Bottomtab = { isVisible: false }

const checkOutSheetSlice = createSlice({
    name: 'CheckOutSheet',
    initialState: initialState,
    reducers: {
        toggleVisibility: (state, action) => {
            state.isVisible = action.payload;
        }
    }
})


export default checkOutSheetSlice.reducer

export const { toggleVisibility } = checkOutSheetSlice.actions