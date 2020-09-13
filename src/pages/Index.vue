<template>
  <Layout>
<<<<<<< HEAD
    <section id="main">
      <span>Hey,there </span>
      <h1 class="text-3xl">I am Bill Bakas</h1>
      <h2 class="text-2xl">Full Stack Designer</h2>
      <svg viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8"><path fill-rule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
    </section>
    <section id="about-me">
      <div class="flex flex-col items-center justify-between mb-16 sm:flex-row">
          <!-- <div><g-image src="../../static/avatar.jpg" alt="avatar" class="w-32 h-32 mb-8 rounded-full lg:mb-0" /></div> -->
          <div class="flex-1 ml-6 text-lg sm:text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum quae architecto minus molestias iusto ducimus fuga quo quia libero dignissimos, fugiat modi assumenda debitis laboriosam.</div>
        </div>
    </section>

=======
    <Hero />
>>>>>>> 487d751557d117428d3ddda3553a1041770ab63a
    <section id="blog">
      <div v-for="edge in $page.posts.edges" :key="edge.node.id">
        <g-link :to="edge.node.path">{{ edge.node.title }}</g-link>
      </div>
    </section>

<<<<<<< HEAD
    <section id="projects">
      <div v-for="edge in $page.projects.edges" :key="edge.node.id">
      <g-link :to="edge.node.path">{{ edge.node.title }}</g-link>
    </div>
    </section>

    
=======
>>>>>>> 487d751557d117428d3ddda3553a1041770ab63a
  </Layout>
</template>

<page-query>
<<<<<<< HEAD
query Posts {
  posts: allPost {
    edges {
      node {
        id
        title
        path
        date(format: "MMMM D, Y")
      }
    }
  }
  projects: allProject(sortBy: "date", order: DESC) {
    edges {
      node {
        id
        path
        title
      }
    }
  }
}
</page-query>
=======
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

>>>>>>> 487d751557d117428d3ddda3553a1041770ab63a

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
