import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState: InitialState = {
    userData: null,
    isIntroFinished: false
}


const authSlice = createSlice({
    name: 'authSlice',
    initialState: initialState,
    reducers: {
        saveUserData(state, action: PayloadAction<Auth>) {
            state.userData = action?.payload ?? null
        }
    }
})

export default authSlice.reducer;
export const { saveUserData } = authSlice.actions
