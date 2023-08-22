import axios from "axios";
import { base_url } from "../../../../mernstack-back/src/utils/axiosConfig"
const productDetails = async () => {
    const response = await axios.get(`${base_url}product/`);
    if (response.data) {
        return response.data
    }
}
const singleProduct = async (id: string) => {
    const response = await axios.get(`${base_url}product/${id}`);
    if (response.data) {
        return response.data
    }
}
const addingCart = async (cartData: any) => {
    // console.log(cartData);
    const response = await axios.post(`${base_url}users/cart`, cartData, { withCredentials: true });
    if (response.data) {
        return response.data
    }
}

const gettingCart = async () => {
    // console.log(cartData);
    const response = await axios.get(`${base_url}users/cart`,{withCredentials:true});
    if (response.data) {
        return response.data
    }
}

const clearCart = async () => {
    // console.log(cartData);
    const response = await axios.delete(`${base_url}users/empty-cart`,{withCredentials:true});
    console.log(response.data);
    
    if (response.data) {
        return response.data
    }
}
export const productService = {
    productDetails, singleProduct, addingCart,gettingCart,clearCart
}