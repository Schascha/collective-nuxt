<template>
  <span class="tag">
    <slot />
  </span>
</template>

<style scoped>
  .tag {
    @apply rounded-full bg-gray-100 text-gray-900 px-2 py-1 text-sm font-medium;
  }
</style>
