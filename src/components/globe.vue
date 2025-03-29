<template>
  <div ref="container" class="globe-container"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as THREE from 'three'
import ThreeGlobe from 'three-globe'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import countries from '@/data/globe.json'

const container = ref(null)
let globe, renderer, camera, controls, animationId

const globeConfig = {
  globeColor: '#1d072e',
  showAtmosphere: true,
  atmosphereColor: '#ffffff',
  atmosphereAltitude: 0.1,
  emissive: '#000000',
  emissiveIntensity: 0.1,
  shininess: 0.9,
  polygonColor: 'rgba(255,255,255,0.7)',
  ambientLight: '#ffffff',
  directionalLeftLight: '#ffffff',
  directionalTopLight: '#ffffff',
  pointLight: '#ffffff'
}

onMounted(async () => {
  if (!container.value) return

  const scene = new THREE.Scene()
  scene.fog = new THREE.Fog(0xffffff, 400, 2000)
 
  camera = new THREE.PerspectiveCamera(50, 1.2, 180, 1800)
  camera.position.z = 300

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(container.value.clientWidth, container.value.clientHeight)
  container.value.appendChild(renderer.domElement)
  
  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableZoom = false
  controls.enablePan = false
  controls.minDistance = 300
  controls.maxDistance = 300
  controls.autoRotate = true
  controls.autoRotateSpeed = 1
  controls.minPolarAngle = Math.PI / 3.5
  controls.maxPolarAngle = Math.PI - Math.PI / 3

  const ambientLight = new THREE.AmbientLight(globeConfig.ambientLight, 0.6)
  scene.add(ambientLight)

  const directionalLight1 = new THREE.DirectionalLight(globeConfig.directionalLeftLight, 1)
  directionalLight1.position.set(-400, 100, 400)
  scene.add(directionalLight1)

  const directionalLight2 = new THREE.DirectionalLight(globeConfig.directionalTopLight, 1)
  directionalLight2.position.set(-200, 500, 200)
  scene.add(directionalLight2)

  const pointLight = new THREE.PointLight(globeConfig.pointLight, 0.8)
  pointLight.position.set(-200, 500, 200)
  scene.add(pointLight)

  globe = new ThreeGlobe()
    .hexPolygonsData(countries.features)
    .hexPolygonResolution(3)
    .hexPolygonMargin(0.7)
    .showAtmosphere(globeConfig.showAtmosphere)
    .atmosphereColor(globeConfig.atmosphereColor)
    .atmosphereAltitude(globeConfig.atmosphereAltitude)
    .hexPolygonColor(() => globeConfig.polygonColor)

  const globeMaterial = globe.globeMaterial()
  globeMaterial.color = new THREE.Color(globeConfig.globeColor)
  globeMaterial.emissive = new THREE.Color(globeConfig.emissive)
  globeMaterial.emissiveIntensity = globeConfig.emissiveIntensity
  globeMaterial.shininess = globeConfig.shininess

  scene.add(globe)

  const animate = () => {
    animationId = requestAnimationFrame(animate)
    controls.update()
    renderer.render(scene, camera)
  }
  animate()

  window.addEventListener('resize', handleResize)
})

const handleResize = () => {
  if (!container.value || !camera || !renderer) return
  camera.aspect = container.value.clientWidth / container.value.clientHeight
  camera.updateProjectionMatrix()
  renderer.setSize(container.value.clientWidth, container.value.clientHeight)
}

onBeforeUnmount(() => {
  cancelAnimationFrame(animationId)
  window.removeEventListener('resize', handleResize)
  if (renderer?.domElement?.parentNode) {
    renderer.domElement.parentNode.removeChild(renderer.domElement)
  }
})
</script>

<style scoped>
.globe-container {
  width: 100%;
  height: 100%;
  position: relative;
  background: transparent;
}
</style>