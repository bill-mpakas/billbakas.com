<template>
  <Layout>
      <div class="w-full py-12 space-y-2 border-b border-gray-200">
       <div>
         <h2 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
           Articles
         </h2>
         <p class="mt-3 text-xl leading-7 text-gray-600 sm:mt-4">
           Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.
         </p>
       </div>
        </div>
        <div v-for="project in $page.projects.edges" :key="project.id" class="py-2 mx-auto border-b border-gray-400 md:py-4 project">
        <h2 class="text-2xl font-bold"><g-link :to="project.node.path" class="text-copy-primary">{{ project.node.title }}</g-link></h2>
        <div class="mb-4 text-copy-secondary">
          <span>{{ project.node.date }}</span>
          <span> &middot; </span>
          <span>{{ project.node.timeToRead }} min read</span>
        </div>
        <div class="mb-4 text-lg">
          {{ project.node.summary }}
        </div>
        <div class="mt-3">
          <g-link :to="project.node.path" class="text-base font-semibold leading-6 text-indigo-600 transition duration-150 ease-in-out hover:text-indigo-700">Read More</g-link>
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

