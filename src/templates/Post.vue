<template>
  <Layout>
    <section id="page-header" class="py-12 bg-gray-50 md:py-16 lg:py-24">
      <div class="container max-w-5xl">
        <h1 class="mb-2 text-2xl mb-4 font-bold text-center text-gray-800 lg:text-5xl">
          {{ $page.post.title }}
        </h1>
        <div class="flex justify-center items-center space-x-4 mb-4 text-xl text-center text-gray-500 lg:text-2xl">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
          <time :datetime="$page.post.date">{{ $page.post.date }}</time>
        </div>
        <div class="flex justify-center space-x-2 text-sm">
          <g-link
              :to="tag.path"
              v-for="tag in $page.post.tags"
              :key="tag.id"
              class="px-4 py-1 capitalize transition duration-500 ease-in-out transform bg-blue-300 hover:-translate-y-1 hover:scale-101 hover:bg-blue-300 rounded-xl lg:text-base xl:text-lg"
          >
            {{ tag.title }}
          </g-link>
        </div>
      </div>
    </section>
    <article
      class="container py-4 md:py-8 prose sm:px-6 lg:px-8 lg:prose-lg xl:prose-xl"
      v-html="$page.post.content"
    />
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    date (format: "MMMM D, Y")
    content
    summary
    tags {
      title
      path
    }
  }
}
</page-query>

<script>
import Layout from '~/layouts/Post.vue'
export default {
  metaInfo() {
    return {
      title: this.$page.post.title,
      description: this.$page.post.summary,
    };
  },
  components: {
    Layout,
  },
};
</script>
