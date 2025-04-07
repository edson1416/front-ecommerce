import {defineStore} from "pinia";
import {ref} from "vue";


export const useNotificacionesStore = defineStore('notificaciones', ()=>{

    const notificacionShow = ref(false)
    const tipoNotificacion = ref('')
    const mensajeNotificacion = ref('')
    const headerNotificacion = ref('')

    const changeStatusShow = () =>{
        notificacionShow.value = !notificacionShow.value
    }

    return {
        notificacionShow,
        tipoNotificacion,
        mensajeNotificacion,
        headerNotificacion,
        changeStatusShow,
    }

})