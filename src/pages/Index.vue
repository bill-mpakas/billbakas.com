<template>
  <Layout>
    <Hero />
    <section id="recent">
     <div class="container">
       <div v-for="edge in $page.posts.edges" :key="edge.node.id">
         <g-link :to="edge.node.path">{{ edge.node.title }}</g-link>
       </div>
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
