<!-- eslint-disable vue/multi-word-component-names -->
<script setup></script>

<template>
  <div>
    <h1 class="mb-8 text-2xl font-extrabold text-amber-500 text-shadow-lg">CHOOSE EGG TYPE</h1>
    <div class="grid grid-cols-2 gap-4">
      <router-link
        to="/timer/runny"
        class="bg-yellow-400 hover:bg-yellow-500 text-amber-50 font-extrabold py-4 px-6 rounded-lg flex items-center justify-center shadow-lg"
      >
        Runny Yolk
      </router-link>

      <router-link
        to="/timer/soft"
        class="bg-yellow-400 hover:bg-yellow-500 text-amber-50 font-extrabold py-4 px-6 rounded-lg flex items-center justify-center shadow-lg"
      >
        Soft Boiled
      </router-link>

      <router-link
        to="/timer/hard"
        class="bg-yellow-400 hover:bg-yellow-500 text-amber-50 font-extrabold py-4 px-6 rounded-lg flex items-center justify-center shadow-lg"
      >
        Hard Boiled
      </router-link>

      <router-link
        to="/timer/overcooked"
        class="bg-yellow-400 hover:bg-yellow-500 text-amber-50 font-extrabold py-4 px-6 rounded-lg flex items-center justify-center shadow-lg"
      >
        Over cooked
      </router-link>
    </div>
  </div>
</template>
