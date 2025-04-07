<script setup>
import FloatLabel from 'primevue/floatlabel';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import {userAuthStore} from "../../stores/auth-store.js";
import {ref} from "vue";
import ErrorAlerta from "../notificaciones/ErrorAlerta.vue";
import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

const authStore = userAuthStore()

const credenciales = ref({
  email: "",
  password: "",
})

const rules = {
  credenciales: {
    email: { required, email },
    password: { required }
  }
}

const $v = useVuelidate(rules, { credenciales })

const login = async () =>{
  try{
    const respuestaLogin = await authStore.login(credenciales.value)
    if(!respuestaLogin){
      credenciales.value.email = "";
      credenciales.value.password = "";
    }
  }catch(error){
    console.log(error)
  }
}

</script>

<template>
  <div class="flex justify-center w-full h-96 items-center">
    <div class="flex flex-col p-8 space-y-2 shadow-lg rounded-lg w-1/3 bg-gray-100">
      <ErrorAlerta></ErrorAlerta>
      <div class="flex text-xl font-semibold justify-center">
        <h1>Iniciar sesión</h1>
      </div>
      <div class="flex flex-col space-y-6 mt-3">
        <FloatLabel class="mt-6 w-full">
          <InputText id="email" class="w-full" v-model="credenciales.email" :class="{ 'p-invalid': $v.credenciales.email.$error }"/>
          <label for="email">Email</label>
        </FloatLabel>
        <FloatLabel class="mt-6 w-full">
          <InputText type="password" id="password" class="w-full" v-model="credenciales.password" :class="{ 'p-invalid': $v.credenciales.password.$error }"/>
          <label for="password">Password</label>
        </FloatLabel>
        <Button type="button" label="Iniciar" severity="contrast" @click="login" :disabled="$v.$invalid" />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>