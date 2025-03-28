import Inicio from "../components/inicio/Inicio.vue";
import {createRouter, createWebHistory} from "vue-router";
import NotFound from "../components/NotFound.vue";
import Login from "../components/login/Login.vue";
import Favoritos from "../components/favoritos/Favoritos.vue";
import MiCarrito from "../components/carrito/MiCarrito.vue";


const routes = [
    {path: '/', name: 'Inicio', component: Inicio},
    {path: '/not-found',name: 'NotFound', component: NotFound },
    {path:'/login',name: 'Login',component: Login},
    {path:'/favoritos',name: 'Favoritos',component: Favoritos},
    {path:'/mi-carrito', name: 'MiCarrito',component: MiCarrito},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'Inicio'

    const listaRutas = router.getRoutes()
    const existRuta = listaRutas.find((item) => item.name === to.name)
    if (!existRuta) {
        next({name:'NotFound'})
    }
    else {
        next()
    }
})

export default router;