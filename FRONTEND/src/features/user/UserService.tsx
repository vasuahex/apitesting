import axios from "axios";
import { base_url } from "../../../../mernstack-back/src/utils/axiosConfig"

const register = async (userData: any) => {
    const response = await axios.post(`${base_url}users/register`, userData);
    if (response.data) {
        return response.data
    }
}

const login = async (userData: any) => {
    const response = await axios.post(`${base_url}users/login`, userData,{withCredentials:true});
    if (response.data) {
        return response.data
    }
}

export const authService = {
    register,login
}