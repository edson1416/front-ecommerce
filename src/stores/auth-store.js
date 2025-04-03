import {defineStore} from "pinia";
import {ref} from "vue";
import authService from "../services/auth-service.js";
import {useRouter} from "vue-router";


export const userAuthStore = defineStore('auth',()=>{
    const token = ref(null)
    const usuario = ref(null)

    const router = useRouter()

    const login = async (credenciales)=>{
        const {data: {token: newToken}} = await authService.iniciarSession(credenciales)
        token.value =newToken;
        const {data: {user}} = await authService.getUsuarioInfo()
        usuario.value = user
        console.log(usuario.value)
    }

    const logout = ()=>{
        token.value =null
        usuario.value = null
        router.push({name:'Login', replace:true})
    }

    return {
        token,
        usuario,
        login,
        logout
    }
}, {
    persist:true,
})