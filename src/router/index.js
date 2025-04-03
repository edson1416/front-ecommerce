import Inicio from "../components/inicio/Inicio.vue";
import {createRouter, createWebHistory} from "vue-router";
import NotFound from "../components/NotFound.vue";
import Login from "../components/login/Login.vue";
import Favoritos from "../components/favoritos/Favoritos.vue";
import MiCarrito from "../components/carrito/MiCarrito.vue";
import MiCuenta from "../components/cuenta/usuario/MiCuenta.vue";
import Productos from "../components/productos/Productos.vue";
import {userAuthStore} from "../stores/auth-store.js";
import {storeToRefs} from "pinia";
import NoAutorizado from "../components/NoAutorizado.vue";


const routes = [
    {path: '/', name: 'Inicio', component: Inicio},
    {path: '/not-found',name: 'NotFound', component: NotFound },
    {path: '/no-autorizado', name: 'NoAutorizado', component: NoAutorizado},
    {path:'/login',name: 'Login',component: Login},
    {path:'/favoritos',name: 'Favoritos',component: Favoritos},
    {path:'/mi-carrito', name: 'MiCarrito',component: MiCarrito},
    {path:'/mi-cuenta', name: 'MiCuenta',component: MiCuenta, meta: {title: 'Mi Cuenta', requiereAuth: true, rolPermitido: 'admin'}},
    {path:'/productos', name: 'Productos',component: Productos},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'Inicio'

    const authStore = userAuthStore()
    const {token, usuario} = storeToRefs(authStore)

    const listaRutas = router.getRoutes()
    const existRuta = listaRutas.find((item) => item.name === to.name)
    if (!existRuta) {
        next({name:'NotFound'})
    }
    if(to?.meta?.requiereAuth){
        if(!token.value){
            next({name:'Login'})
        }else {
            const rol = usuario.value.roles[0].name

            if(rol !== to.meta.rolPermitido){
                next({name:'NoAutorizado'})
            }else {
                next()
            }
        }
    }
    else {
        next()
    }
})

export default router;