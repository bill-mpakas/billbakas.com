<template>
  <Layout>
      <div class="w-full py-12 space-y-2">
       <div>
         <h1 class="text-2xl font-bold text-gray-800 sm:text-4xl">
           Articles
         </h1>
         <h2 class="mt-3 text-2xl text-gray-600 sm:mt-4">
           Writing stuff that excites me. Also, sharing is caring! 
         </h2>
       </div>
        </div>
        <div v-for="project in $page.projects.edges" :key="project.id" class="py-2 mx-auto border-b border-gray-400 md:py-4 project">
          <div class="max-w-5xl px-6 py-6 bg-white rounded-lg shadow">
            <h2 class="text-2xl font-bold"><g-link :to="project.node.path" class="text-copy-primary">{{ project.node.title }}</g-link></h2>
        <div class="mb-4 text-copy-secondary">
          <span>{{ project.node.date }}</span>
        </div>
        <div class="px-2 mb-4 text-lg">
          {{ project.node.summary }}
        </div>
        <div class="mt-3">
          <g-link :to="project.node.path" class="text-base font-semibold leading-6 text-indigo-600 transition duration-150 ease-in-out hover:text-indigo-700">Read More</g-link>
        </div>
          </div>
      </div> <!-- end project -->
  </Layout>
</template>

<page-query>
query Project {
  projects: allProject (sortBy: "date", order: DESC) {
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

<script>
export default {
  metaInfo() {
    return {
      title: 'Projects',
    };
  }
}
</script>

