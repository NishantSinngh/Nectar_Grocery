import { combineReducers } from "@reduxjs/toolkit";
import checkOutSheet from "./checkOutSheet";
import cartSlice from './cartItem'


export default combineReducers({
    checkOutSheet,
    cartSlice,
})