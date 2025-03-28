
<template>
  <div class="card">
    <Menubar :model="items">
      <template #end>
        <div class="flex items-center gap-2">
          <Button label="Iniciar sesión" severity="info" variant="text" raised />
        </div>
      </template>
    </Menubar>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Menubar from 'primevue/menubar';
import Button from 'primevue/button';

const items = ref([
  {
    label: 'Inicio',
    icon: 'pi pi-home'
  },
  {
    label: 'Favoritos',
    icon: 'pi pi-star'
  },
  {
    label: 'Categorias',
    icon: 'pi pi-bars',
    items: [
      {
        label: 'Components',
        icon: 'pi pi-bolt'
      },
      {
        label: 'Blocks',
        icon: 'pi pi-server'
      },
      {
        label: 'UI Kit',
        icon: 'pi pi-pencil'
      },
      {
        label: 'Templates',
        icon: 'pi pi-palette',
        items: [
          {
            label: 'Apollo',
            icon: 'pi pi-palette'
          },
          {
            label: 'Ultima',
            icon: 'pi pi-palette'
          }
        ]
      }
    ]
  },
  {
    label: 'Mi carrito',
    icon: 'pi pi-shopping-cart'
  },
  {
    label: 'Mi cuenta',
    icon: 'pi pi-user'
  }
]);
</script>
