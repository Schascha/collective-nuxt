<template>
  <div
    v-if="articles && articles.length"
    class="articles"
  >
    <h2>Artikel</h2>

    <ul>
      <li
        v-for="article of articles"
        :key="article.slug"
      >
        <NuxtLink
          :to="{ name: 'articles-slug', params: { slug: article.slug } }"
        >
          <figure v-if="article.image">
            <img
              :src="article.image"
              alt=""
            >
          </figure>

          <div class="text">
            <h3>{{ article.title }}</h3>
            <p>{{ article.description }}</p>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      articles: []
    }
  },
  async fetch () {
    this.articles = await this.$content('articles')
      .only(['title', 'description', 'slug', 'image'])
      .sortBy('createdAt', 'desc')
      .fetch()
  }
}
</script>

<style scoped>
  li {
    @apply my-4;
  }

  h3,
  p {
    @apply m-0;
  }

  img {
    @apply rounded-full w-16 h-16 mr-4;
  }

  a {
    @apply flex items-center;
  }

  .text {
    @apply flex-grow;
  }
</style>
