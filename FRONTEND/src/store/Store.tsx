import { configureStore } from "@reduxjs/toolkit"
import authReducer from '../features/user/UserSlice'
import productReducer from '../features/Products/ProductSlice'
export const store = configureStore({
    reducer: {
        auth: authReducer,
        product:productReducer
    }
})