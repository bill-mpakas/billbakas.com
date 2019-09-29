<template>
  <Layout>
    <div class="container-inner mx-auto py-16">
      <div v-for="project in $page.projects.edges" :key="project.id" class="post border-gray-400 border-b mb-12">
        <h2 class="text-3xl font-bold"><g-link :to="project.node.path" class="text-copy-primary">{{ project.node.title }}</g-link></h2>
        <div class="mb-8">
          <g-link :to="project.node.path" class="font-bold uppercase">Read More</g-link>
        </div>
      </div> <!-- end post -->

    </div>
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
  metaInfo: {
    title: 'Projects'
  }
}
</script>

