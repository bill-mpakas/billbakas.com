<template>
    <Layout>
      <div>
     <div class="w-full py-12 space-y-2 bg-yellow-500">
      <div class="container mx-auto">
              <h3 class="text-4xl font-medium leading-normal text-gray-900">
        Articles
      </h3>
      <p class="text-2xl leading-5 text-gray-900">
        I occasionally write tutorials about things i am interested into</p>
      </div>
    </div>
      </div>
        <div v-for="post in $page.posts.edges" :key="post.id" class="container py-8 mx-auto border-b border-gray-400 md:py-16 post">
        <h2 class="text-3xl font-bold"><g-link :to="post.node.path" class="text-copy-primary">{{ post.node.title }}</g-link></h2>
        <div class="mb-4 text-copy-secondary">
          <span>{{ post.node.date }}</span>
          <span> &middot; </span>
          <span>{{ post.node.timeToRead }} min read</span>
        </div>
        <div class="mb-4 text-lg">
          {{ post.node.summary }}
        </div>
        <div class="mb-8">
          <g-link :to="post.node.path" class="font-bold uppercase">Read More</g-link>
        </div>
      </div> <!-- end post -->
      <pagination-posts
        v-if="$page.posts.pageInfo.totalPages > 1"
        base="/blog"
        :totalPages="$page.posts.pageInfo.totalPages"
        :currentPage="$page.posts.pageInfo.currentPage"
      />
  </Layout>
</template>

<page-query>
query Posts ($page: Int) {
  posts: allPost (sortBy: "date", order: DESC, perPage: 8, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        date (format: "MMMM D, Y")
        summary
        timeToRead
        path
      }
    }
  }
}
</page-query>

<script>
import PaginationPosts from '../components/PaginationPosts'
// import Layout from "../layouts/Blog.vue"

export default {
  metaInfo: {
    title: 'Articles'
  },
  components: {
    PaginationPosts
  }
}
</script>

