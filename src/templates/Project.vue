<template>
  <Layout>
    <h1 class="text-4xl font-bold leading-tight">{{ $page.project.title }}</h1>
      <div class="markdown-body mb-2">
        <VueRemarkContent />
      </div>
      <div class="mb-8">
        <g-link to="/projects" class="font-bold uppercase">Back to Projects</g-link>
      </div>
  </Layout>
</template>

<!-- Front-matter fields can be queried from GraphQL layer -->
<page-query>
query Project ($id: ID!) {
  project(id: $id) {
    title
  }
}
</page-query>

<script>
import Layout from "../layouts/Blog.vue"
export default {
  metaInfo() {
    return {
      title: this.$page.project.title
    }
  },
  components: {
    Layout,
  }
}
</script>

<style src="../css/github-markdown.css" />
