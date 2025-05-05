import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState: InitialState = {
    userData: null,
    isIntroFinished: false,
    location: null
}


const authSlice = createSlice({
    name: 'authSlice',
    initialState: initialState,
    reducers: {
        saveUserData(state, action: PayloadAction<Auth>) {
            state.userData = action?.payload ?? null
        },
        saveUserLocation(state, action) {
            state.location = action?.payload
        }
    }
})

export default authSlice.reducer;
export const { saveUserData, saveUserLocation } = authSlice.actions
