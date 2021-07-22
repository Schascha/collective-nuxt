<template>
  <div class="page">
    <header>
      <BaseNavigation />
    </header>

    <main>
      <Nuxt />
    </main>
  </div>
</template>

<style scoped>
  .page {
    @apply antialiased text-gray-900 container mx-auto px-4 py-10 max-w-5xl;
  }

  header {
    @apply mb-8;
  }
</style>
