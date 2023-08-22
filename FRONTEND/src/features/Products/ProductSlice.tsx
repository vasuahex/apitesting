import { createSlice } from "@reduxjs/toolkit";
import { productService } from "./productService";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-toastify'

interface InitialState {
    allproducts: any,
    isError: boolean,
    isSuccess: boolean,
    isLoading: boolean,
    count: number,
    message: string,
    singleProduct: any,
    cartStatus: any,
    cartItems: any
}

const initialState: InitialState = {
    allproducts: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    count: 0,
    message: "",
    singleProduct: {},
    cartStatus: [],
    cartItems: {}
}
export const getAllProducts = createAsyncThunk("product/getAllProducts", async (userData, thunkAPI) => {
    console.log(userData);
    try {
        return await productService.productDetails()
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error)
    }
}) as any

export const getSingleProduct = createAsyncThunk("product/getSingleProduct", async (id: string, thunkAPI) => {
    try {
        return await productService.singleProduct(id)
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
}) as any


export const addToCart = createAsyncThunk("product/addToCart", async (cartData, thunkAPI) => {
    try {
        return await productService.addingCart(cartData)
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
}) as any


export const getCartItems = createAsyncThunk("product/getCartItems", async (cartData, thunkAPI) => {
    try {
        return await productService.gettingCart()
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
}) as any

export const clearCart = createAsyncThunk("product/clearCart", async (cartData, thunkAPI) => {
    try {
        return await productService.clearCart()
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
}) as any

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        increaseCount: (state) => {
            state.count = state.count + 1
        },
        increase: (state) => {
            state.cartItems.count = state.cartItems.count + 1
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.pending, (state) => {
            state.isLoading = true;
        }).addCase(getAllProducts.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.allproducts = action.payload
            console.log(action.payload);

        }).addCase(getAllProducts.rejected, (state, action) => {
            state.isError = true
            state.isLoading = false
            state.isSuccess = false
            state.message = action.payload.response.data.message
            console.log(action.payload.response.data.message);
        }).addCase(getSingleProduct.pending, (state) => {
            state.isLoading = true
        }).addCase(getSingleProduct.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.singleProduct = action.payload
        }).addCase(getSingleProduct.rejected, (state, action) => {
            state.isError = true
            state.isLoading = false
            state.isSuccess = false
            state.message = action.payload.response.data.message


        }).addCase(addToCart.pending, (state) => {
            state.isLoading = true
        }).addCase(addToCart.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.cartStatus = action.payload
            if (state.isSuccess === true) {
                toast.info(action.payload.message)

            }
        }).addCase(addToCart.rejected, (state, action) => {
            state.isError = true
            state.isLoading = false
            state.isSuccess = false
            state.message = action.payload.response.data.message
            if (state.isError === true) {
                toast.error("cant add product")
            }
        }).addCase(getCartItems.pending, (state) => {
            state.isLoading = true
        }).addCase(getCartItems.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.cartItems = action.payload.cart
            if (state.isSuccess === true) {
                toast.info(action.payload.message)

            }
        }).addCase(getCartItems.rejected, (state, action) => {
            state.isError = true
            state.isLoading = false
            state.isSuccess = false
            state.message = action.payload.response.data.message
        }).addCase(clearCart.fulfilled, (state, action) => {
            state.isError = true
            state.isLoading = false
            state.isSuccess = false
            state.cartItems = {}
        })
    }
})

export const { increaseCount, increase } = productSlice.actions
export default productSlice.reducer