<script setup>
import Avatar from 'primevue/avatar';
import Panel from 'primevue/panel';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import 'primeicons/primeicons.css'
import {ref} from "vue";
import {userAuthStore} from "../../../stores/auth-store.js";
import {storeToRefs} from "pinia";

const authStore = userAuthStore()
const {usuario} = storeToRefs(authStore)

const products = ref([
  {
    image: 'https://primefaces.org/cdn/primevue/images/usercard.png',
    name: 'Product prueba',
    category: 'Pruebas',
    price: 45.65,
    rating: 2,
    inventoryStatus: 'INSTOCK'
  },
  {
    image: 'https://primefaces.org/cdn/primevue/images/usercard.png',
    name: 'Teclado',
    category: 'Tecnologia',
    price: 60.00,
    rating: 4,
    inventoryStatus: 'LOWSTOCK'
  }
]);

</script>
<template>
  <div class="flex justify-center p-6">
    <div class="flex flex-col w-3/4 p-6 space-y-3 rounded-lg shadow-2xl">
      <div class="flex flex-col items-center w-full ">
        <div class="flex justify-center  w-full">
          <Avatar icon="pi pi-user" size="xlarge" shape="circle" />
        </div>
        <div class="flex flex-col items-center w-full ">
          <h1 class="text-2xl">{{usuario.name}}</h1>
          <h1 class="font-light">{{usuario.email}}</h1>
          <h1 class="font-light">{{usuario.cliente.nivel.nivel}}</h1>
        </div>
      </div>

      <div class="flex flex-col space-y-3 items-center w-full">
        <div class="card w-4/5">
          <Panel header="Informacion personal" toggleable>
            <div class="flex flex-col space-y-2 p-2">
              <div class="flex flex-row space-x-2">
                <h1 class="font-semibold">Nombre completo:</h1>
                <h1>{{usuario.cliente.nombre}} {{usuario.cliente.apellido}}</h1>
              </div>
              <div class="flex flex-row space-x-2">
                <h1 class="font-semibold">Direccion:</h1>
                <h1>{{usuario.cliente.direccion}}</h1>
              </div>
              <div class="flex flex-row space-x-2">
                <h1 class="font-semibold">Telefono:</h1>
                <h1>{{usuario.cliente.telefono}}
                </h1>
              </div>
              <div class="flex flex-row space-x-2">
                <h1 class="font-semibold">Correo:</h1>
                <h1>{{usuario.email}}</h1>
              </div>
            </div>

          </Panel>
        </div>
        <div class="card w-4/5">
          <Panel header="Mis pedidos" toggleable>
            <div class="card">
              <DataTable :value="products" tableStyle="min-width: 50rem">
                <Column field="name" header="ID Pedido"></Column>
                <Column field="category" header="Descripcion"></Column>
                <Column field="price" header="Costo"></Column>
                <Column field="rating" header="Fecha"></Column>
                <Column header="Accion">
                  <template #body>
                    <div class="ml-4">
                      <i class="pi pi-eye" style="font-size: 1.5rem"></i>
                    </div>
                  </template>
                </Column>
              </DataTable>
            </div>
          </Panel>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>