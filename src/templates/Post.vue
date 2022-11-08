<template>
  <Layout>
    <section id="page-header" class="py-12 bg-gray-50 md:py-16 lg:py-24">
      <div class="container max-w-5xl">
        <h1
          class="mb-4 text-2xl font-bold text-center text-gray-800 lg:text-5xl"
        >
          {{ $page.post.title }}
        </h1>
        <div
          class="flex items-center justify-center mb-4 space-x-4 text-xl text-center text-gray-500 lg:text-2xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
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
    <div class="flex justify-center">
      <g-image
        class="mb-8 rounded"
        v-if="$page.post.featured_image"
        :src="$page.post.featured_image"
      />
    </div>
    <article class="container py-4 prose md:py-8 lg:prose-lg xl:prose-xl">
      <VueRemarkContent />
    </article>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    path
    date (format: "MMMM D, Y")
    content
    featured_image
    summary
    tags {
      title
      path
    }
  }
}
</page-query>

<static-query>
query {
  metadata {
    siteTitle
    siteDescription
    siteAuthor
  }
}
</static-query>

<script>
import Layout from "~/layouts/Post.vue";
export default {
  metaInfo() {
    return {
      title: this.$page.post.title,
      description: this.$page.post.summary,
      openGraph: {
        title: "My Site",
        type: "website"
      },
      meta: [
        {
          key: "description",
          name: "description",
          content: this.$page.post.summary,
        },
        { name: "description", content: this.$page.post.summary },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:description", content: this.$page.post.summary },
        { name: "twitter:title", content: this.$page.post.title },
        {
          name: "twitter:site",
          content: `@${this.$static.metadata.siteAuthor}`,
        },
        { name: "twitter:image", content: this.getThumbnailImage },
        {
          name: "twitter:creator",
          content: `@${this.$static.metadata.siteAuthor}`,
        },
        { property: "og:type", content: "article" },
        { property: "og:title", content: this.$page.post.title },
        { property: "og:description", content: this.$page.post.summary },
        {
          property: "og:url",
          content: `${this.getBaseUrl}${this.$page.post.path}/`,
        },
        {
          property: "article:published_time",
          content: this.$page.post.date,
        },
        { property: "og:updated_time", content: this.$page.post.date },
        { property: "og:image", content: this.getThumbnailImage },
        { property: "og:image:secure_url", content: this.getThumbnailImage },
        { property: "og:image:width", content: "912" },
        { property: "og:image:height", content: "513" },
      ],
    };
  },
  components: {
    Layout,
  },
  computed: {
    getThumbnailImage() {
      let thumbnailImage = `${this.getBaseUrl}/default-thumb.png`;
      const cover = this.$page.post.featured_image;
      if (cover != null) {
        thumbnailImage = `${this.getBaseUrl}${
          this.$page.post.featured_image.src
        }`;
      }
      return thumbnailImage;
    },
    getBaseUrl() {
      return process.env.GRIDSOME_BASE_URL;
    },
  },
};
</script>
