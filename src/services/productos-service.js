import api from "../lib/axios.js";

export default {
    getProductos(){
        try{
            return api('/productos')
        }catch(error){
            console.log(error)
        }
    }
}