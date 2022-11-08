<template>
  <Layout>
    <section class="section" id="intro">
      <div class="container flex">
        <div class="w-full leading-loose lg:w-2/3">
          <h1
            class="mb-1 text-3xl tracking-tight text-gray-900 font-regular md:text-left lg:text-4xl xl:text-6xl"
          >
            Hello, I’m Bill.
          </h1>
          <h2
            class="mb-4 text-3xl font-extrabold leading-relaxed tracking-tighter text-gray-900 lg:text-4xl xl:text-6xl"
          >
            Full Stack Designer.
          </h2>
          <h3
            class="text-xl text-gray-700 font-regular lg:mb-4 lg:text-3xl xl:text-4xl"
          >
            I design & develop intuitive user interfaces.
          </h3>
          <p class="text-lg font-light text-gray-600 lg:text-2xl">
            Currently pushing pixels &#64;<a
              target="_blank"
              class="font-medium text-red-700"
              rel="noopener"
              href="https://pointer.gr"
              >pointer.</a
            >
          </p>
        </div>
        <div class="w-1/2 mb-2 lg:w-1/3">
          <figure>
            <g-image
              alt="Portrait of Bill Bakas hiding his face"
              class="rounded-xl"
              src="~/assets/images/bill-photo.jpg"
              width="300"
              height="300"
              fit="auto"
              quality="90"
            />
            <figcaption
              class="text-sm font-light text-left text-gray-500 sr-only"
            >
              Picture of me hiding my face.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
    <section class="py-4 lg:py-12" id="blog">
      <div class="text-center">
        <h2
          class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
        >
          From the blog
        </h2>
        <p class="max-w-2xl mx-auto mt-3 text-xl text-gray-500 sm:mt-4">
          Latest Articles & Tutorials
        </p>
      </div>
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
                </div>
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
          featured_image
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
  metaInfo() {
    return this.$seo({
      title: "Home", // Uses the titleTemplate in Gridsome config
      description: "Bill Bakas | Full Stack Designer",
      openGraph: {
        title: "Bill Bakas | Full Stack Designer",
        type: "website",
      },
      twitter: {
        title: "Bill Bakas | Full Stack Designer",
        type: "summary",
      },
      link: [], // any links
      script: [], // any scripts
    });
  },
};
</script>
