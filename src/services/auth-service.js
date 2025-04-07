import api from "../lib/axios.js";

export default {
    iniciarSession(credenciales){
        return api.post('/login', credenciales)
            .then(response => response)
            .catch(error => {
                if (error.response) {
                    return error.response;
                }
                return error
            })

    },
    getUsuarioInfo(){
        try{
            return api('/user-info')
        }catch(error){
            console.log(error)
        }
    }
}