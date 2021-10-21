import { configureStore } from "@reduxjs/toolkit";
import GlobalSlice from "./global.slice";

export default configureStore({
    reducer: {
        global: GlobalSlice,
    }
});