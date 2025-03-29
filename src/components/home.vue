<template>
  <div class="home-container h-screen w-full flex items-center justify-center">
    <div class="home-content flex flex-col items-center justify-center mb-30">
      <h1 class="text-7xl font-bold text-white">Welcome to My Website</h1>

      <p class="text-2xl text-gray-300 mt-4">
        This is a simple Vue.js application with a globe animation.
      </p>
      <Botao class="mt-10" @click="$emit('navigate', 'explore')">
        Explore
      </Botao>
    </div>
    <Particles />
  </div>
</template>

<script setup>
import Particles from "./Particles.vue";
import Botao from "./ui/Button.vue";
</script>
