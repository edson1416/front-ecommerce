<template>
  <div class="card shadow">
    <Menubar :model="items">
      <template #item="{ item, hasSubmenu }">
        <router-link :to="item.to">
          <div class="p-3">
            <span :class="item.icon"/>
            <span class="ml-2">{{ item.label }}</span>
          </div>
        </router-link>
      </template>
      <template #end>
        <div class="flex items-center gap-2">
          <router-link to="/login">
            <Button icon="pi pi-user" label="Iniciar sesión" severity="contrast" variant="text" raised/>
          </router-link>
        </div>
      </template>
    </Menubar>
  </div>
</template>

<script setup>
import {ref} from "vue";
import Menubar from 'primevue/menubar';
import Button from 'primevue/button';

const items = ref([
  {
    label: 'Inicio',
    icon: 'pi pi-home',
    to: '/',
  },
  {
    label: 'Favoritos',
    icon: 'pi pi-star',
    to: '/favoritos',
  },
  {
    label: 'Categorias',
    icon: 'pi pi-bars',
    items: [
      {
        label: 'Gamer',
        icon: 'pi pi-headphones'
      },
      {
        label: 'Musica',
        icon: 'pi pi-volume-up'
      },
      {
        label: 'Informatica',
        icon: 'pi pi-tablet'
      }
    ]
  },
  {
    label: 'Mi carrito',
    icon: 'pi pi-shopping-cart',
    to: '/mi-carrito',
  },
  {
    label: 'Mi cuenta',
    icon: 'pi pi-user',
    to: '/mi-cuenta',
  }
]);
</script>
