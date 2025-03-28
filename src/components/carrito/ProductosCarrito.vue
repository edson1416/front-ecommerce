<script setup>
import DataTable from 'primevue/datatable';
import Button from 'primevue/button';
import Column from 'primevue/column';
import Rating from 'primevue/rating';
import Tag from 'primevue/tag';

import { ref } from 'vue';


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
const formatCurrency = (value) => {
  return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};
const getSeverity = (product) => {
  switch (product.inventoryStatus) {
    case 'INSTOCK':
      return 'success';

    case 'LOWSTOCK':
      return 'warn';

    case 'OUTOFSTOCK':
      return 'danger';

    default:
      return null;
  }
};
</script>

<template>
  <div class="card">
    <DataTable :value="products" tableStyle="min-width: 50rem">
      <template #header>
        <div class="flex flex-wrap items-center justify-between gap-2">
          <span class="text-xl font-bold">Productos</span>
          <Button icon="pi pi-print" rounded raised />
        </div>
      </template>
      <Column field="name" header="Name"></Column>
      <Column header="Image">
        <template #body="slotProps">
          <img :src="slotProps.data.image" :alt="slotProps.data.image" class="w-24 rounded" />
        </template>
      </Column>
      <Column field="price" header="Price">
        <template #body="slotProps">
          {{ formatCurrency(slotProps.data.price) }}
        </template>
      </Column>
      <Column field="category" header="Category"></Column>
      <Column field="rating" header="Reviews">
        <template #body="slotProps">
          <Rating :modelValue="slotProps.data.rating" readonly />
        </template>
      </Column>
      <Column header="Status">
        <template #body="slotProps">
          <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)" />
        </template>
      </Column>
      <template #footer> Total de productos: {{ products ? products.length : 0 }} productos </template>
    </DataTable>
  </div>
</template>

<style scoped>

</style>