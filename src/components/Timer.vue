<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

// get type from URL
const route = useRoute()
const type = route.params.type
const alarm = new Audio('/alarm.wav')

// set minutes based on egg type
let startTime = 0
if (type === 'runny') startTime = 6 * 60
else if (type === 'soft') startTime = 8 * 60
else if (type === 'hard') startTime = 10 * 60
else if (type === 'overcooked') startTime = 15 * 60

// reactive timer
const timeLeft = ref(startTime)
const interval = ref(null)

function formattedTime() {
  const minutes = Math.floor(timeLeft.value / 60)
  const seconds = timeLeft.value % 60
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}

function startTimer() {
  if (interval.value) return // prevent double start
  interval.value = setInterval(() => {
    if (timeLeft.value > 0) {
      timeLeft.value--
    } else {
      clearInterval(interval.value)
      interval.value = null
      alarm.play()
      alert('Egg is ready! 🥚')
      alarm.pause()
      alarm.currentTime = 0 // rewind to start
      timeLeft.value = startTime // reset timer after finishing
    }
  }, 1000)
}

function resetTimer() {
  clearInterval(interval.value)
  interval.value = null
  timeLeft.value = startTime
}

// cleanup when leaving page
onUnmounted(() => {
  clearInterval(interval.value)
})
</script>

<template>
  <div>
    <div class="flex items-center mb-4">
      <router-link to="/menu">
        <i class="mt-2 pi pi-chevron-left ml-2 text-amber-500 text-2xl"></i>
      </router-link>
      <h1 class="my-2 mx-6 text-lg font-extrabold text-amber-500 text-shadow-lg">
        {{ type.toUpperCase() }} BOILED
      </h1>
      <div></div>
    </div>
    <h2 class="my-4 mb-8 font-bold text-8xl text-amber-500 text-shadow-lg">
      {{ formattedTime() }}
    </h2>

    <button
      v-if="!interval"
      @click="startTimer"
      class="px-4 py-2 bg-amber-300 rounded-lg shadow-md hover:bg-amber-400 font-extrabold text-amber-50"
    >
      Start
    </button>
    <button
      v-else
      @click="resetTimer"
      class="px-4 py-2 bg-amber-300 rounded-lg shadow-md hover:bg-amber-400 font-extrabold text-amber-50"
    >
      Reset
    </button>
  </div>
</template>
