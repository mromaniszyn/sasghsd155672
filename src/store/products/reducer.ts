import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { AllProductStateInterface } from './models';

const initialState: AllProductStateInterface = {
    products: [
        {
            category: 'test',
            description: "desc",
            id: 1,
            image: 'image',
            price: 10,
            rating: { 
                rate: 1,
                count: 2,
            },
            title: 'title',
        },
    ],
    isLoading: false,
    isSuccessful: false,
    error: {}
}

export const allProductSlice = createSlice({
    name: 'allProduct',
    initialState,
    reducers: {
        getAllProductRequestAction: (state: any) => {
            state.isLoading = true;
        },
        getAllProductSuccessAction: (state: any, action: PayloadAction<[]>) => {
            state.products = action.payload
            state.isLoading = false;
            state.isSuccessful = true
        },
        getAllProductFailedAction: (state: any, action: PayloadAction<{}>) => {
            state.isSuccessful = false
            state.result = action.payload
        },
    },
})

export const {
    getAllProductRequestAction,
    getAllProductSuccessAction,
    getAllProductFailedAction
} = allProductSlice.actions

export default allProductSlice.reducer