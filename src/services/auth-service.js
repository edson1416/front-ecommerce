import api from "../lib/axios.js";

export default {
    iniciarSession(credenciales){
        try{
            return api.post('/login', credenciales)
        }catch(error){
            console.log(error)
        }
    },
    getUsuarioInfo(){
        try{
            return api('/user-info')
        }catch(error){
            console.log(error)
        }
    }
}