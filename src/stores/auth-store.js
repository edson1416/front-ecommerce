import {defineStore, storeToRefs} from "pinia";
import {ref} from "vue";
import authService from "../services/auth-service.js";
import {useRouter} from "vue-router";
import {useNotificacionesStore} from "./notificaciones-store.js";


export const userAuthStore = defineStore('auth',()=>{
    const token = ref(null)
    const usuario = ref(null)

    const router = useRouter()

    const notificacionStore = useNotificacionesStore()
    const {tipoNotificacion, mensajeNotificacion, headerNotificacion} = storeToRefs(notificacionStore)

    const login = async (credenciales)=>{
        try {

            const response = await authService.iniciarSession(credenciales)
            if(response.status === 200){
                const {data: {token: newToken}} = response
                token.value =newToken;
                const {data: {user}} = await authService.getUsuarioInfo()
                usuario.value = user

                console.log(usuario.value)

                router.push({name: 'Inicio', replace: true})
            }else if(response.status === 401) {
                console.log("El response error: ",response)
                mensajeNotificacion.value = response.data.error
                headerNotificacion.value = response.statusText
                tipoNotificacion.value = "error"
                notificacionStore.changeStatusShow()
                return false;
            }else {
                console.log("error: ",response)
            }

        }catch(err){
            console.log(err)
        }
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