<template>
  <Layout class="bg-gray-50">
      <div class="flex items-center justify-between py-8">
        <h1 class="text-3xl font-bold text-gray-800 capitalize lg:text-4xl">{{ $page.tag.title }}</h1>
        <p class="hidden font-semibold text-blue-700 md:block">{{$page.tag.belongsTo.totalCount}} Articles</p>
      </div>
      <div v-for="post in $page.tag.belongsTo.edges" :key="post.node.id">
        <div class="max-w-xl px-6 py-6 bg-white rounded-lg shadow">
         <article>
           <g-link class="relative block" :to="post.node.path">
              <h3 class="mb-2 text-xl font-bold leading-tight transition duration-75 ease-in-out hover:text-blue-800">{{ post.node.title }}</h3>
              <div class="mb-4 text-copy-secondary">
                <span>{{ post.node.date }}</span>
                <span> &middot; </span>
                <span>{{ post.node.timeToRead }} min read</span>
              </div>
              <p class="pr-1 mb-2 md:mb-8">
                {{ post.node.summary }}
              </p>
              <div class="mb-8">
            <g-link :to="post.node.path" class="font-medium transition duration-75 ease-in-out text hover:text-blue-800">Read More</g-link>
          </div>
           </g-link>
         </article>
        </div>
      </div>
      <pagination-posts
        v-if="$page.tag.belongsTo.pageInfo.totalPages > 1"
        :base="`/tag/${$page.tag.title}`"
        :totalPages="$page.tag.belongsTo.pageInfo.totalPages"
        :currentPage="$page.tag.belongsTo.pageInfo.currentPage"
      />
  </Layout>
</template>

<page-query>
query Tag ($id: ID!, $page: Int) {
  tag: tag (id: $id) {
    title
    belongsTo (page: $page, perPage: 3) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ...on Post {
            title
            timeToRead
    	      date (format: "MMMM D, YYYY")
            path
            summary
            tags {
              title
            }
          }
        }
      }
    }
  }
}
</page-query>

<script>
import PaginationPosts from '../components/PaginationPosts'

export default {
  metaInfo() {
    return {
      title: 'Articles tagged: ' + this.$page.tag.title
    }
  },
  components: {
    PaginationPosts
  }
}
</script>