import { configureStore } from "@reduxjs/toolkit"
import authReducer from '../features/user/UserSlice'
export const store = configureStore({
    reducer: {
        auth: authReducer
    }
})