<template>
  <div class="app-container">
    <Particles />
    <Navbar />
    <router-view />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import Particles from './components/Particles.vue';
</script>