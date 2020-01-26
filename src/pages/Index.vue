<template>
  <Layout>
    <section id="main">
      <span>Hey,there </span>
      <h1 class="text-3xl">I am Bill Bakas</h1>
      <h2 class="text-2xl">Full Stack Designer</h2>
    </section>
    <section id="about-me">
      <div class="flex flex-col sm:flex-row justify-between items-center mb-16">
          <!-- <div><g-image src="../../static/avatar.jpg" alt="avatar" class="w-32 h-32 rounded-full mb-8 lg:mb-0" /></div> -->
          <div class="flex-1 text-lg sm:text-xl ml-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum quae architecto minus molestias iusto ducimus fuga quo quia libero dignissimos, fugiat modi assumenda debitis laboriosam.</div>
        </div>
    </section>
    <div v-for="edge in $page.posts.edges" :key="edge.node.id">
      <g-link :to="edge.node.path">{{ edge.node.title }}</g-link>
      <span>{{ edge.node.date}}</span>
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
          date (format: "MMMM D, Y")
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
