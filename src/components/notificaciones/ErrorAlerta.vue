<script setup>
import Toast from 'primevue/toast';
import Button from 'primevue/button';
import { useToast } from "primevue/usetoast";
import {useNotificacionesStore} from "../../stores/notificaciones-store.js";
import {storeToRefs} from "pinia";
import {ref, watch} from "vue";
const toast = useToast();

const notificacionesStore = useNotificacionesStore()
const {mensajeNotificacion, tipoNotificacion,notificacionShow, headerNotificacion} = storeToRefs(notificacionesStore)

watch(notificacionShow,()=>{
  show(tipoNotificacion,mensajeNotificacion, headerNotificacion);
})

const show = (tipoN, mensaje, header) => {
  toast.add({ severity: tipoN, summary: header, detail: mensaje, life: 3000 });
};
</script>

<template>
  <div class="card flex justify-center">
    <Toast />
<!--    <Button label="Show" @click="show()" />-->
  </div>
</template>

<style scoped>

</style>