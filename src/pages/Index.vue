<template>
  <Layout>
    <section id="intro">
      <div class="py-12">
        <p class="w-full lg:max-w-5xl text-2xl text-gray-800 font-regular mb-2 lg:mb-4 lg:text-3xl">
          Hi, I’m Bill. I’m a UI designer & Wordpress Developer. I design & develop modern, resilient, and accessible user interfaces. Currently pushing pixels at <a target="_blank" class="underline font-medium" rel="noopener" href="https://pointer.gr">pointer.</a>
          You can view <a class="underline" href="/projects">my work</a> or read my <a class="underline" href="/blog">blog.</a>
        </p>
      </div>
    </section>
    <section id="recent">
      <div class="px-2">
  <div class="flex -mx-2">
    <div class="w-full md:w-1/3 px-2">
      <div class="">
        <h2 class="mb-3 text-2xl leading-9 font-bold tracking-tight text-indigo-700 sm:text-2xl sm:leading-10">
            Ready to dive in?
        </h2>
        <div class="px-1 my-1" v-for="edge in $page.posts.edges" :key="edge.node.id">
         <g-link class="text-lg" :to="edge.node.path">{{ edge.node.title }}</g-link>
      </div>
      </div>
    </div>
    <div class="w-full md:w-1/3 px-2">
      <div class="">
        <h2 class="mb-3 text-2xl leading-9 font-bold tracking-tight text-indigo-700 sm:text-2xl sm:leading-10">
            Recent Posts
        </h2>
        <div class="px-2" v-for="edge in $page.projects.edges" :key="edge.node.id">
         <g-link class="text-lg" :to="edge.node.path">{{ edge.node.title }}</g-link>
       </div>
      </div>
    </div>
    <div class="w-full md:w-1/3 px-2">
      <div class="">
        <h2 class="mb-3 text-2xl leading-9 font-bold tracking-tight text-indigo-700 sm:text-2xl sm:leading-10">
            On Social
        </h2>
        <div class="px-2" v-for="edge in $page.projects.edges" :key="edge.node.id">
         <g-link class="text-lg" :to="edge.node.path">{{ edge.node.title }}</g-link>
       </div>
      </div>
    </div>
  </div>
</div>
    </section>

  </Layout>
</template>

<page-query>
  query {
    posts: allPost {
      edges {
        node {
          id
          title
          path
        }
      }
    }
    projects: allProject {
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

export default {
  metaInfo: {
    title: 'Hello, world!'
  },
}
</script>
