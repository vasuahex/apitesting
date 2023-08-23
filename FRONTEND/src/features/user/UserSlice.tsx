import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "./UserService";
import { toast } from 'react-toastify'

interface InitialState {
    user: any
    isError: boolean,
    isSuccess: boolean,
    isLoading: boolean,
    message: any,
    createdUser: any,
    loginCount: number
}

const initialState: InitialState = {
    user: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
    createdUser: "",
    loginCount: 0
}

export const registerUser = createAsyncThunk("auth/register", async (userData, thunkAPI) => {
    try {
        return await authService.register(userData)
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
}) as any


export const loginUser = createAsyncThunk("auth/login", async (userData, thunkAPI) => {
    try {
        return await authService.login(userData)
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
}) as any



export const authSlice = createSlice({

    name: 'auth',
    initialState,
    reducers: {
        loginCountFunc:(state)=>{
            state.loginCount=0
        }
    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state) => {
            state.isLoading = true;
        }).addCase(registerUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.createdUser = action.payload
            console.log(action.payload);

            if (state.isSuccess === true) {
                toast.info("user created succesfully")
            }
        }).addCase(registerUser.rejected, (state, action) => {
            state.isError = true
            state.isLoading = false
            state.isSuccess = false
            state.message = action.payload.response.data.message
            if (state.isError === true) {
                toast.error(action.payload.response.data.message)
            }
        }).addCase(loginUser.pending, (state) => {
            state.isLoading = true;
        }).addCase(loginUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.user = action.payload.user
            if (state.isSuccess === true && state.loginCount<1) {
                toast.info("user login succesfully")
                localStorage.setItem("token", action.payload.user.refreshToken)
                state.loginCount=state.loginCount+1
            }
            else{
            toast.info("user already login ")
            }

        }).addCase(loginUser.rejected, (state, action) => {
            state.isError = true
            state.isLoading = false
            state.isSuccess = false
            state.message = action.payload.response.data.message
            if (state.isError === true) {
                toast.error(action.payload.response.data.message)
            }
        })
    }

})

export default authSlice.reducer
export const {loginCountFunc}=authSlice.actions