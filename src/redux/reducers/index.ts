import { combineReducers } from "@reduxjs/toolkit";
import checkOutSheet from "./checkOutSheet";
import cartSlice from './cartItem'
import favSlice from './favs'


export default combineReducers({
    checkOutSheet,
    cartSlice,
    favSlice
})