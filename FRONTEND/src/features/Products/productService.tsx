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
export const productService = {
    productDetails, singleProduct
}