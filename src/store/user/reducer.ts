import { PayloadAction, createSelector } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { Credentials, User } from './models';
import { RootState } from '../rootReducer';

const initialState: User = {
    login: '',
    isAuthorized: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logIn: (state: any, action: PayloadAction<Credentials>) => {
            const validCredentials: Credentials = {
                login: 'asd',
                password: 'qwe',
            }

            if (action.payload === validCredentials) {
                state.isAuthorized = true;
                state.login = action.payload.login;
            } else {
                state.isAuthorized = false;
                state.login = '';
            }
        },
    },
})

export const userActions = userSlice.actions;

export default userSlice.reducer;

const root = (state: RootState) => state.user;

export const userSelectors = {
    userLogin: createSelector(root, (a) => a.login),
    isUserAuthorized: createSelector(root, (a) => a.isAuthorized),
};