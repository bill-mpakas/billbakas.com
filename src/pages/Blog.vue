<template>
    <Layout>
       <section id="intro" class="w-full py-4 mx-auto md:py-8">
         <h2 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
           Articles
         </h2>
         <p class="mt-3 text-xl leading-7 text-gray-600 sm:mt-4">
           More like a journal rather than blog.
         </p>
       </section>
       <section class="py-4 md:py-8">
          <div v-for="post in $page.posts.edges" :key="post.id" class="mx-auto">
            <div class="max-w-5xl px-6 py-6 bg-white rounded-lg shadow">
              <h2 class="text-2xl font-bold"><g-link :to="post.node.path" class="text-copy-primary">{{ post.node.title }}</g-link></h2>
        <div class="mb-4 text-copy-secondary">
          <span>{{ post.node.date }}</span>
          <span> &middot; </span>
          <span>{{ post.node.timeToRead }} min read</span>
        </div>
        <div class="mb-4 text-lg">
          {{ post.node.summary }}
        </div>
        <!-- //TODO Add related tags to the list of articles -->
        <div class="mt-3">
          <g-link :to="post.node.path" class="text-base font-semibold leading-6 text-indigo-600 transition duration-150 ease-in-out hover:text-indigo-700">Read More</g-link>
        </div>
            </div>
          </div> <!-- end post -->
       </section>
      <pagination-posts class="max-w-2xl mx-auto"
        v-if="$page.posts.pageInfo.totalPages > 1"
        base="/blog"
        :totalPages="$page.posts.pageInfo.totalPages"
        :currentPage="$page.posts.pageInfo.currentPage"
      />
  </Layout>
</template>

<page-query>
query Posts ($page: Int) {
  posts: allPost (sortBy: "date", order: DESC, perPage: 1, page: $page) @paginate {
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
        tags {
          title
          path
        }
      }
    }
  }
}
</page-query>

<script>
import PaginationPosts from '../components/PaginationPosts'

export default {
  metaInfo: {
    title: 'Articles'
  },
  components: {
    PaginationPosts
  }
}
</script>

