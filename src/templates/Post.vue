<template>
  <Layout>
    <section class="w-full py-12 mx-auto md:py-16 lg:py-24">
          <h1 class="mb-2 text-2xl font-bold text-center text-gray-800 lg:text-5xl">{{ $page.post.title }}</h1>
         <div class="mb-4 text-xl text-center text-gray-500 lg:text-2xl">{{ $page.post.date }}</div>
      <div class="flex justify-center space-x-2 text-sm">
        <g-link
          :to="tag.path"
          v-for="tag in $page.post.tags"
          :key="tag.id"
          class="px-4 py-1 capitalize transition duration-500 ease-in-out transform bg-blue-300 hover:-translate-y-1 hover:scale-101 hover:bg-blue-300 rounded-xl lg:text-base xl:text-lg">
          {{ tag.title }}
        </g-link>
      </div>
    </section>
    <article class="prose max-w-7xl sm:px-6 lg:px-8 lg:prose-lg xl:prose-xl 2xl:prose-2xl" v-html="$page.post.content" />
    
    <section id="back-to-blog">
      <div class="px-4 mx-auto my-4 prose max-w-7xl sm:px-6 lg:px-8 lg:prose-lg">
      <g-link to="/blog/" class="my-8 font-bold text-center uppercase lg:mt-16">Back to Blog</g-link>
    </div>
    </section>
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

