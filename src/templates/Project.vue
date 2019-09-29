<template>
  <Layout>
    <VueRemarkContent>
      <template v-slot:ad>
        <Ad />
      </template>
    </VueRemarkContent>
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
import Ad from "../components/Ad"
export default {
  metaInfo() {
    return {
      title: this.$page.project.title
    }
  },
  components: {
    Ad,
  }
}
</script>

<style src="../css/github-markdown.css" />
