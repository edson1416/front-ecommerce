<script setup>
import FloatLabel from 'primevue/floatlabel';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import {userAuthStore} from "../../stores/auth-store.js";
import {ref} from "vue";

const authStore = userAuthStore()

const credenciales = ref({
  email: "",
  password: "",
})

const login = async () =>{
  try{
    await authStore.login(credenciales.value)
  }catch(error){
    console.log(error)
  }
}

</script>

<template>
  <div class="flex justify-center w-full h-96 items-center">
    <div class="flex flex-col p-8 space-y-2 shadow-lg rounded-lg w-1/3 bg-gray-100">
      <div class="flex text-xl font-semibold justify-center">
        <h1>Iniciar sesión</h1>
      </div>
      <div class="flex flex-col space-y-6 mt-3">
        <FloatLabel class="mt-6 w-full">
          <InputText id="email" class="w-full" v-model="credenciales.email"/>
          <label for="email">Email</label>
        </FloatLabel>
        <FloatLabel class="mt-6 w-full">
          <InputText type="password" id="password" class="w-full" v-model="credenciales.password"/>
          <label for="password">Password</label>
        </FloatLabel>
        <Button type="button" label="Iniciar" severity="contrast" @click="login" />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>