<template>
  <div id="tsparticles-container" ref="particlesContainer"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { loadSlim } from '@tsparticles/slim';
import { tsParticles } from '@tsparticles/engine';

const particlesContainer = ref(null);

onMounted(async () => {
  await loadSlim(tsParticles);

  await tsParticles.load({
    id: 'tsparticles',
    element: particlesContainer.value,
    options: {
      background: {
        color: '#121212'
      },
      particles: {
        number: {
          value: 25,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: '#ffffff'
        },
        shape: {
          type: 'circle'
        },
        opacity: {
          value: 0.5
        },
        size: {
          value: 3,
          random: true
        },
        links: {
          enable: true,
          distance: 400,
          color: '#ffffff',
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 3,
          direction: 'none',
          outModes: 'out'
        }
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: 'grab'
          },
          onClick: {
            enable: true,
            mode: 'push'
          }
        },
        modes: {
          grab: {
            distance: 140,
            links: {
              opacity: 1
            }
          },
          push: {
            quantity: 4
          }
        }
      },
      retina_detect: true
    }
  });
});

onUnmounted(async () => {
  if (tsParticles) {
    await tsParticles.destroy();
  }
});
</script>

<style scoped>
#tsparticles-container {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>