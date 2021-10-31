<template>
  <Layout>
    <section id="intro" class="w-full py-4 mx-auto md:py-8">
      <h2
        class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 lg:text-4xl sm:text-4xl sm:leading-10"
      >
        Articles
      </h2>
      <p class="mt-3 text-xl leading-7 text-gray-600 lg:text-2xl sm:mt-4">
        More like a journal rather than blog.
      </p>
    </section>
    <section class="py-4 md:py-8">
      <div
        class="grid max-w-lg gap-5 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none"
      >
        <div
          v-for="post in $page.posts.edges"
          :key="post.id"
          class="flex flex-col overflow-hidden rounded-lg shadow"
        >
          <div class="flex-shrink-0">
            <g-link :to="post.node.path">
              <g-image
                alt="Cover image"
                v-if="post.node.featured_image"
                class="object-cover w-full h-48"
                :src="post.node.featured_image"
              />
            </g-link>
          </div>
          <div class="flex flex-col justify-between flex-1 p-6 bg-white">
            <div class="flex-1">
              <p class="text-sm font-medium text-indigo-600">
                <g-link
                  :to="tag.path"
                  v-for="tag in post.node.tags"
                  :key="tag.id"
                  class="inline-flex items-center mr-1 px-3 py-0.5 rounded-xl text-sm font-medium bg-indigo-100 text-indigo-800"
                >
                  {{ tag.title }}
                </g-link>
              </p>
              <g-link :to="post.node.path" class="block mt-2">
                <p class="text-xl font-semibold text-gray-900">
                  {{ post.node.title }}
                </p>
                <p class="mt-3 text-base text-gray-500">
                  {{ post.node.summary }}
                </p>
              </g-link>
            </div>
            <div class="flex items-center mt-6">
              <div class="">
                <div class="flex space-x-1 text-sm text-gray-500">
                  <time :datetime="post.node.date">
                    {{ post.node.date }}
                  </time>
                  <span aria-hidden="true"> &middot; </span>
                  <span> {{ post.node.timeToRead }} min read </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end post -->
    </section>
    <pagination-posts
      class="max-w-2xl mx-auto"
      v-if="$page.posts.pageInfo.totalPages > 1"
      base="/blog"
      :totalPages="$page.posts.pageInfo.totalPages"
      :currentPage="$page.posts.pageInfo.currentPage"
    />
  </Layout>
</template>

<page-query>
query Posts ($page: Int) {
  posts: allPost (sortBy: "date", order: DESC, perPage: 2, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        featured_image (width: 400, height: 300, blur: 40)
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
import PaginationPosts from "../components/PaginationPosts";

export default {
  metaInfo: {
    title: "Articles",
  },
  components: {
    PaginationPosts,
  },
};
</script>
