<script setup>
import Card from 'primevue/card';
import Button from 'primevue/button';
import {ref} from "vue";

const productosFavoritos = ref([
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
  <div class="flex justify-center p-4 mb-2">
    <h1 class="text-3xl font-thin">Nuestros productos más comprados</h1>
  </div>
  <div class="flex flex-row p-4 w-full justify-center space-x-4">
    <Card v-for="producto in productosFavoritos" style="width: 25rem; overflow: hidden;  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
      <template #header>
        <img alt="user header" :src="producto.img" />
      </template>
      <template #title>{{ producto.title }}</template>
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

</template>

<style scoped>

</style>