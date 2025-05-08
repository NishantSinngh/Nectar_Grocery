import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { showToast } from "../../components/Toast";


const initialState: MultipleLocation[] = []


const locationSlice = createSlice({
    name: 'locationSlice',
    initialState: initialState,
    reducers: {
        saveMultipleLocation(state, action: PayloadAction<MultipleLocation[]>) {

            const newLoc = action.payload.filter(newLocItem => { // true to add --- false to drop
                const alreadyExists = !state.some(locItem => locItem.id === newLocItem.id); // if returns false then its added --- if true drops it <== some()
                if (alreadyExists === false) showToast('Address already Exist')
                if (alreadyExists === true) showToast('Address added')
                return alreadyExists
            });
            state.push(...newLoc);
        }
    }
})

export default locationSlice.reducer;
export const { saveMultipleLocation } = locationSlice.actions
