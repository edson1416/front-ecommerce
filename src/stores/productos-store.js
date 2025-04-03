import {defineStore} from "pinia";
import {ref} from "vue";
import productosService from "../services/productos-service.js";


export const useProductosStore = defineStore('productos', ()=>{
    const productos = ref(null)

    const getAll = async ()=> {
        const {data: {data}} = await productosService.getProductos()
        productos.value = data
    }

    return{
        productos,
        getAll,
    }
})