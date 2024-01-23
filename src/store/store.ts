
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducers } from './rootReducer';

const rootReducer = combineReducers({
  ...reducers,
});

const AppReduxStore = configureStore({
    reducer: rootReducer,
});

export default AppReduxStore;
