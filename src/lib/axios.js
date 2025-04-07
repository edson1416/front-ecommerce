import axios from "axios";
import {userAuthStore} from "../stores/auth-store.js";
import {storeToRefs} from "pinia";

const api = axios.create({
    baseURL:'http://localhost:8000/api',
})

api.interceptors.request.use(config => {
    const authStore = userAuthStore()
    const {token} = storeToRefs(authStore);

    if(token.value){
        config.headers.Authorization = `Bearer ${token.value}`;
    }
    return config;
})

api.interceptors.response.use(response =>{
    return response;
// }, async (error) => {
//     console.log('asdf:',error)
//     if(error.response.status ===401){
//         const authStore = userAuthStore()
//         authStore.logout();
//     }
//
})


export default api;