<template>
  <article>
    <h1>{{ article.title }}</h1>
    <img
      v-if="article.image"
      :src="article.image"
    >
    <nuxt-content :document="article" />
  </article>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    return {
      article
    }
  }
}
</script>
