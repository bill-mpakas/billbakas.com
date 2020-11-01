<template>
  <Layout>
      <section class="w-full py-8 mx-auto mb-6 bg-green-500 md:py-16 lg:mb-8">
        <h1 class="text-3xl font-bold leading-tight text-center text-gray-800 lg:text-4xl">{{ $page.post.title }}</h1>
      <div class="mb-4 text-xl font-medium text-center text-gray-500">{{ $page.post.date }}</div>
      <div class="flex justify-center mb-8 text-sm">
        <g-link
          :to="tag.path"
          v-for="tag in $page.post.tags"
          :key="tag.id"
          class="px-4 py-2 mr-4 bg-gray-200 rounded-full hover:bg-green-300">
          {{ tag.title }}
        </g-link>
      </div>
      </section>
      <article class="container mx-auto prose lg:prose-xl" v-html="$page.post.content" />
      <div class="mx-auto my-4 prose lg:prose-xl">
        <g-link to="/articles" class="my-8 font-bold text-center uppercase lg:mt-16">Back to Blog</g-link>
      </div>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    date (format: "MMMM D, Y")
    content
    summary
    tags {
      title
      path
    }
  }
}
</page-query>

<script>
import Layout from "../layouts/Blog.vue"
export default {
  metaInfo() {
    return {
      title: this.$page.post.title,
      description: this.$page.post.summary
    }
  },
  components: {
    Layout
  }
}
</script>

