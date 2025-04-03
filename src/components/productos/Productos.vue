<script setup>
import DataView from 'primevue/dataview';
import Button from 'primevue/button';

import {onMounted, ref} from "vue";
import {useProductosStore} from "../../stores/productos-store.js";
import {storeToRefs} from "pinia";

const productosStore = useProductosStore()
const {productos} = storeToRefs(productosStore);

onMounted(async ()=>{
  await productosStore.getAll()
})

const getSeverity = (product) => {
  switch (product.stock) {
    case product.stock>6:
      return 'success';

    case product.stock>=2 && product.stock<=6:
      return 'warn';

    case product.stock<2:
      return 'danger';

    default:
      return null;
  }
};

</script>

<template>
  <div class="flex flex-col items-center space-y-4">
    <div class="flex items-center justify-center p-2 space-x-2">
      <i class="pi pi-box" style="font-size: 1.5rem"></i>
      <h1 class="text-3xl font-semibold">Productos</h1>
    </div>
    <div class="card w-4/5 p-4 shadow">
      <DataView v-if="productos" :value="productos" paginator :rows="5">
        <template #list="slotProps">
          <div class="flex flex-col">
            <div v-for="(item, index) in slotProps.items" :key="index">
              <div class="flex flex-col sm:flex-row sm:items-center p-6 gap-4" :class="{ 'border-t border-surface-200 dark:border-surface-700': index !== 0 }">
                <div class="md:w-40 relative">
                  <img class="block xl:block mx-auto rounded w-full" :src="`${item.imagen}`" :alt="item.nombre_producto" />
                </div>
                <div class="flex flex-col md:flex-row justify-between md:items-center flex-1 gap-6">
                  <div class="flex flex-row md:flex-col justify-between items-start gap-2">
                    <div>
                      <div class="text-lg font-medium mt-2">{{ item.nombre_producto }}</div>
                      <div class="font-normal mt-2">{{ item.descripcion }}</div>
                      <span class="text-surface-500 dark:text-surface-400 text-sm font-light">{{ item.categoria.nombre_categoria}}</span>
                    </div>
                    <div class="bg-surface-100 p-1" style="border-radius: 30px">
                      <div class="bg-surface-0 flex items-center gap-2 justify-center py-1 px-2" style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                        <span class="text-surface-900 font-medium text-sm">{{ item.calificacion ? item.calificacion : 0 }}</span>
                        <i class="pi pi-star-fill text-yellow-500"></i>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col md:items-end gap-8">
                    <span class="text-xl font-semibold">${{ item.precio }}</span>
                    <div class="flex flex-row-reverse md:flex-row gap-2">
                      <Button icon="pi pi-heart" outlined></Button>
                      <Button icon="pi pi-shopping-cart" label="Agregar al carrito" :disabled="item.stock === 0 || item.stock === null" class="flex-auto md:flex-initial whitespace-nowrap"></Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </DataView>
    </div>

  </div>
</template>

<style scoped>

</style>