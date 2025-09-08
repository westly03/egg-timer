<script setup></script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <!-- shared card -->
    <div class="bg-white shadow-lg rounded-xl p-8 w-100 text-center">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.header {
  margin-bottom: calc(var(--spacing) * 4);
  font-size: var(--text-2xl) /* 1.5rem = 24px */;
  line-height: var(--tw-leading, var(--text-2xl--line-height) /* calc(2 / 1.5) ≈ 1.3333 */);
  font-weight: bold;
}
</style>
