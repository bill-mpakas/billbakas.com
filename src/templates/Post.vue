<template>
  <Layout>
      <h1 class="text-4xl font-bold leading-tight">{{ $page.post.title }}</h1>
      <div class="mb-4 text-xl text-gray-600">{{ $page.post.date }}</div>
      <div class="flex mb-8 text-sm">
        <g-link
          :to="tag.path"
          v-for="tag in $page.post.tags"
          :key="tag.id"
          class="px-4 py-2 mr-4 bg-gray-300 rounded-full hover:bg-green-300">
          {{ tag.title }}
        </g-link>
      </div>
      <div class="mb-8 markdown-body" v-html="$page.post.content" />
      <div class="mb-8">
        <g-link to="/blog" class="font-bold uppercase">Back to Blog</g-link>
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

<style src="../css/github-markdown.css" />
