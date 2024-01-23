import { combineReducers } from "redux";
import { allProductSlice } from "./products/reducer";
import { userSlice } from "./user/reducer";

export const reducers = {
    allProduct: allProductSlice.reducer,
    user: userSlice.reducer,
};

const rootReducer = combineReducers(reducers);
export type RootState = ReturnType<typeof rootReducer>;