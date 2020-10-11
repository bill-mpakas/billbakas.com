<template>
  <Layout>
    <section id="intro">
      <div class="py-12">
        <p class="w-full mb-2 text-2xl text-gray-800 lg:max-w-5xl font-regular lg:mb-4 lg:text-3xl">
          I’m Bill. I’m a UI designer & Wordpress Developer. I design & develop, resilient and accessible user interfaces. Currently pushing pixels at <a target="_blank" class="font-medium underline" rel="noopener" href="https://pointer.gr">pointer.</a>
          You can view <a class="underline" href="/projects">my work</a> or read my <a class="underline" href="/articles">blog.</a>
        </p>
      </div>
    </section>
    <section id="recent">
      <div class="px-2">
  <div class="flex -mx-2">
    <div class="w-full px-2 md:w-1/3">
        <div class="inline-flex items-center mb-4 space-x-2">
          <h2 class="mb-0 text-xl font-bold leading-9 tracking-tight text-indigo-700 sm:text-3xl sm:leading-10">
            Latest Articles /
        </h2>
          <div class="text-gray-600 hover:text-gray-900">
            <g-link class="inline-flex text-base text-gray-600" to="/articles">
          View all
                  <svg class="w-6 h-6 ml-1 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
          </g-link>
          </div>
        </div>
        <div class="px-1 my-1" v-for="edge in $page.posts.edges" :key="edge.node.id">
          <g-link :to="edge.node.path">
             <h3 class="mt-2 text-2xl font-semibold leading-normal text-gray-800">
               {{ edge.node.title }}
              </h3>
          </g-link>
          <p class="text-base leading-5 text-gray-600">
          <time :datetime="edge.node.date">{{edge.node.date}}</time>
          </p>
        </div>
    </div>
    <div class="w-full px-2 md:w-1/3">
      <div class="">
        <h2 class="mb-3 text-2xl font-bold leading-9 tracking-tight text-indigo-700 sm:text-2xl sm:leading-10">
            Recent Posts
        </h2>
        <div class="px-2" v-for="edge in $page.projects.edges" :key="edge.node.id">
         <g-link class="text-lg" :to="edge.node.path">{{ edge.node.title }}</g-link>
       </div>
      </div>
    </div>
    <div class="w-full px-2 md:w-1/3">
      <div class="">
        <h2 class="mb-3 text-2xl font-bold leading-9 tracking-tight text-indigo-700 sm:text-2xl sm:leading-10">
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
          date(format: "DD MMMM YYYY")
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
    title: 'Bill Bakas - UI Designer/Developer'
  },
}
</script>
