<script setup>
import ScrollPanel from 'primevue/scrollpanel';

</script>

<template>
  <div class="flex w-full justify-center">
    <div class="card w-3/4 shadow-2xl p-6 space-y-5 bg-gray-700 rounded-lg">
      <div class="flex justify-center items-center space-x-2">
        <i class="pi pi-bell" style="font-size: 1.5rem; color: white"></i>
        <h1 class="text-3xl text-white font-semibold">Notificaciones</h1>
      </div>
      <ScrollPanel style="width: 100%; height: 500px" class="p-3">
        <div class="flex flex-col space-y-2 mt-3 bg-white p-6 rounded-lg shadow-md">
          <div>
            <h1 class="text-lg font-medium">Titulo notificacion</h1>
            <h2 class="text-sm font-light">Sistema ecommerce</h2>
          </div>
          <div class="flex flex-col p-1">
            <p>Cuerpo de la notificacion como que subiste de nivel de cliente.</p>
            <p class="flex justify-end">08/04/2025</p>
          </div>
        </div>

        <div class="flex flex-col space-y-2 mt-3 bg-white p-6 rounded-lg shadow-md">
          <div>
            <h1 class="text-lg font-medium">Titulo notificacion</h1>
            <h2 class="text-sm font-light">Sistema ecommerce</h2>
          </div>
          <div class="flex flex-col p-1">
            <p>Cuerpo de la notificacion como que subiste de nivel de cliente.</p>
            <p class="flex justify-end">08/04/2025</p>
          </div>
        </div>

        <div class="flex flex-col space-y-2 mt-3 bg-white p-6 rounded-lg shadow-md">
          <div>
            <h1 class="text-lg font-medium">Titulo notificacion</h1>
            <h2 class="text-sm font-light">Sistema ecommerce</h2>
          </div>
          <div class="flex flex-col p-1">
            <p>Cuerpo de la notificacion como que subiste de nivel de cliente.</p>
            <p class="flex justify-end">08/04/2025</p>
          </div>
        </div>


      </ScrollPanel>
    </div>
  </div>

</template>

<style scoped>

</style>