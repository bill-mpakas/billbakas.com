<template>
  <Layout>
    <h1>Hello, world!</h1>
    <div v-for="edge in $page.posts.edges" :key="edge.node.id">
      <g-link :to="edge.node.path">{{ edge.node.title }}</g-link>
    </div>
  </Layout>
</template>

<page-query>
  query Posts {
    posts: allPost {
      edges {
        node {
          id
          title
          path
        }
      }
    }
  }
</page-query>

<page-query>
  query Projects {
    projects: allProject {
      edges {
        node {
          title
          path
        }
      }
    }
  }
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
