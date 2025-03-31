<script setup>
import Card from 'primevue/card';
import Button from 'primevue/button';
import {ref} from "vue";

const productos = ref([
  {
    img: 'https://primefaces.org/cdn/primevue/images/usercard.png',
    title: 'Producto Favorito 1',
    subtitle: 'este es el producto',
    contentBody: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae'
  },
  {
    img: 'https://primefaces.org/cdn/primevue/images/usercard.png',
    title: 'Producto Favorito 1',
    subtitle: 'este es el producto',
    contentBody: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae'
  },
  {
    img: 'https://primefaces.org/cdn/primevue/images/usercard.png',
    title: 'Producto Favorito 1',
    subtitle: 'este es el producto',
    contentBody: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae'
  },
  {
    img: 'https://primefaces.org/cdn/primevue/images/usercard.png',
    title: 'Producto Favorito 1',
    subtitle: 'este es el producto',
    contentBody: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae'
  },
  {
    img: 'https://primefaces.org/cdn/primevue/images/usercard.png',
    title: 'Producto Favorito 1',
    subtitle: 'este es el producto',
    contentBody: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae'
  },
  {
    img: 'https://primefaces.org/cdn/primevue/images/usercard.png',
    title: 'Producto Favorito 1',
    subtitle: 'este es el producto',
    contentBody: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae'
  },
  {
    img: 'https://primefaces.org/cdn/primevue/images/usercard.png',
    title: 'Producto Favorito 1',
    subtitle: 'este es el producto',
    contentBody: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae'
  },
  {
    img: 'https://primefaces.org/cdn/primevue/images/usercard.png',
    title: 'Producto Favorito 1',
    subtitle: 'este es el producto',
    contentBody: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae'
  },
  {
    img: 'https://primefaces.org/cdn/primevue/images/usercard.png',
    title: 'Producto Favorito 1',
    subtitle: 'este es el producto',
    contentBody: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae'
  },
])
</script>

<template>
  <div class="flex flex-col">
    <div class="flex items-center justify-center p-2 space-x-2">
      <i class="pi pi-box" style="font-size: 1.5rem"></i>
      <h1 class="text-3xl font-semibold">Productos</h1>
    </div>

    <div class="grid grid-cols-4 gap-4 p-6">
      <Card v-for="producto in productos" style="width: 20rem; overflow: hidden">
        <template #header>
          <img alt="user header" src="https://primefaces.org/cdn/primevue/images/usercard.png"/>
        </template>
        <template #title>{{producto.title}}</template>
        <template #subtitle>{{producto.subtitle}}</template>
        <template #content>
          <p class="m-0">
            {{producto.contentBody}}
          </p>
        </template>
        <template #footer>
          <div class="flex gap-4 mt-1">
            <Button icon="pi pi-shopping-cart" label="Agregar al carrito" severity="info" class="w-full" />
          </div>
        </template>
      </Card>
    </div>

  </div>
</template>

<style scoped>

</style>