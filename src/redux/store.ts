import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";




const store = configureStore({ reducer: reducers });


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;