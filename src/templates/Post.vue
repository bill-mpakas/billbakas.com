<template>
  <Layout>
      <section class="w-full py-8 mx-auto md:py-16 lg:py-24">
        <h1 class="mb-2 text-2xl font-bold text-center text-gray-800 lg:text-4xl">{{ $page.post.title }}</h1>
      <div class="mb-4 text-xl text-center text-gray-500">{{ $page.post.date }}</div>
      <div class="flex justify-center space-x-2 text-sm">
        <g-link
          :to="tag.path"
          v-for="tag in $page.post.tags"
          :key="tag.id"
          class="px-4 py-1 capitalize transition duration-500 ease-in-out transform bg-blue-200 hover:-translate-y-1 hover:scale-101 hover:bg-blue-300 rounded-xl lg:text-lg">
          {{ tag.title }}
        </g-link>
      </div>
      </section>
      <article class="container mx-auto prose lg:prose-lg" v-html="$page.post.content" />
      <div class="mx-auto my-4 prose lg:prose-lg">
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

