<script setup>
import { ref } from 'vue'
import VueParticles from 'vue-particles'

const particlesParams = ref({
  particles: {
    number: {
      value: 380,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.5,
    },
    size: {
      value: 3,
      random: true,
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
  },
  retina_detect: true,
})
</script>

<template>
  <vue-particles :params="particlesParams" />
</template>

<style scoped>
#particles-js {
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: #000;
}
</style>
