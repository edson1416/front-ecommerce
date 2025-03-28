<script setup>

import ProductosCarrito from "./ProductosCarrito.vue";
import Button from "primevue/button";
</script>

<template>
  <div class="flex flex-col p-4 space-y-6">
    <div class="flex items-center justify-center p-2 space-x-2">
      <i class="pi pi-shopping-cart" style="font-size: 1.5rem"></i>
      <h1 class="text-2xl font-semibold">Mi carrito</h1>
    </div>
    <div class="flex justify-center">
      <ProductosCarrito class="w-3/4 shadow-md"></ProductosCarrito>
    </div>
    <div class="flex justify-center">
      <div class="flex justify-between w-3/4">
        <Button icon="pi pi-times" label="Cancelar" severity="danger" raised />
        <Button icon="pi pi-money-bill" label="Pagar" raised />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>