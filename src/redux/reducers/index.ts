import { combineReducers } from "@reduxjs/toolkit";
import checkOutSheet from "./checkOutSheet";
import cartSlice from './cartItem'
import favSlice from './favs'
import darkModeSlice from './darkMode'
import authSlice from './auth'
import locSlice from './location'


export default combineReducers({
    checkOutSheet,
    cartSlice,
    favSlice,
    darkModeSlice,
    authSlice,
    locSlice,
})