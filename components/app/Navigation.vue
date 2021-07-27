<template>
  <nav>
    <ul>
      <li
        v-for="{path, text} in items"
        :key="path"
      >
        <NuxtLink :to="path">
          {{ text }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { path: '/', text: 'Home' },
        { path: '/about', text: 'About' },
        { path: '/help', text: 'Help' }
      ]
    }
  }
}
</script>

<style scoped>
  ul {
    @apply flex space-x-4 my-4;
  }

  a {
    @apply no-underline py-4;
  }

  .nuxt-link-exact-active {
    @apply underline;
  }
</style>
