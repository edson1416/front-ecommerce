<script setup>
import {ref} from "vue";
import Menubar from 'primevue/menubar';
import Button from 'primevue/button';
import Popover from 'primevue/popover';
import Avatar from "primevue/avatar";
import {userAuthStore} from "../stores/auth-store.js";
import {storeToRefs} from "pinia";

const op = ref();
const authStore = userAuthStore()
const {token} = storeToRefs(authStore)

const selectedMember = ref(null);
const members = ref([
  { opcion: 'Cerrar session', icon: 'pi pi-sign-out'}
]);

const toggle = (event) => {
  op.value.toggle(event);
}

const selectMember = (member) => {
  selectedMember.value = member;
  op.value.hide();
}

const logout = async () => {
  await authStore.logout();
}

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
        icon: 'pi pi-headphones',
        to: '/productos',
      },
      {
        label: 'Musica',
        icon: 'pi pi-volume-up',
        to: '/favoritos',
      },
      {
        label: 'Informatica',
        icon: 'pi pi-tablet',
        to: '/favoritos',
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
<template>
  <div class="card shadow fixed top-0 left-0 z-50 w-full">
    <Menubar :model="items">
      <template #item="{ item }">
        <template v-if="item.to">
          <router-link :to="item.to">
            <div class="p-3">
              <span :class="item.icon"/>
              <span class="ml-2">{{ item.label }}</span>
            </div>
          </router-link>
        </template>
        <template v-else>
          <div class="p-3 cursor-pointer">
            <span :class="item.icon"/>
            <span class="ml-2">{{ item.label }}</span>
          </div>
        </template>
      </template>
      <template #end>
        <div class="flex items-center gap-2">
          <router-link v-if="!token" to="/login">
            <Button  icon="pi pi-user" label="Iniciar sesión" severity="contrast" variant="text" raised/>
          </router-link>
          <div v-else class="card flex justify-end cursor-pointer space-x-2 items-center">
            <h1 class="font-semibold ">Edson sarmiento</h1>
            <Avatar icon="pi pi-user" size="large" shape="circle" @click="toggle" />

            <Popover ref="op">
              <div class="flex flex-col gap-4">
                <div>
                  <span class="font-medium block text-center mb-2">Cliente</span>
                  <hr>
                  <ul class="list-none p-0 m-0 flex flex-col">
                    <li v-for="member in members" :key="member.opcion" class="flex items-center gap-2 px-2 py-3 hover:bg-emphasis cursor-pointer rounded-border" @click="selectMember(member)">
                      <i :class="member.icon" style="font-size: 1rem"></i>
                      <div>
                        <span class="font-normal" @click="logout">{{ member.opcion }}</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </Popover>
          </div>
        </div>
      </template>
    </Menubar>
  </div>
</template>

