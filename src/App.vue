<script setup>

import NavBar from "./components/NavBar.vue";
</script>

<template>
  <div>
    <NavBar></NavBar>
    <div class="pt-20"> <!-- Ajusta el padding para que no se solape con la navbar -->
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>

</style>
