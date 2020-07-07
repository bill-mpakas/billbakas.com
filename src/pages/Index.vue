<template>
  <Layout>
    <Hero />
    <section id="blog">
      <div v-for="edge in $page.posts.edges" :key="edge.node.id">
        <g-link :to="edge.node.path">{{ edge.node.title }}</g-link>
      </div>
    </section>

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


<script>
import Hero from "../components/Hero";

export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  components: {
    Hero
  },
}
</script>
