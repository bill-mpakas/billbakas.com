<template>
  <Layout>
    <section class="py-12" id="intro">
      <div class="flex flex-wrap justify-between">
        <div class="w-full md:w-9/12">
          <p class="w-full mb-2 text-2xl text-gray-800 font-regular lg:mb-4 lg:text-3xl">
            Hi. I’m Bill.A UI designer & Wordpress Developer. I design & develop, resilient and accessible user interfaces. Currently pushing pixels &#64;<a target="_blank" class="font-medium text-red-700" rel="noopener" href="https://pointer.gr">pointer.</a>
          </p>
        </div>
          <g-image src="~/assets/images/bill-photo.jpg" class="h-48 w-48 object-cover rounded-full" alt="logo" />
      </div>
    </section>
    <section class="my-16" id="recent-articles">
      <div class="w-full py-4 border-b-2 border-gray-200">
          <h2 class="text-3xl lg:text-4xl leading-relaxed tracking-tight font-extrabold text-gray-900">
            Articles
          </h2>
          <h3 class="text-2xl lg:text-2xl leading-7 text-gray-700">
            I occasionally write about stuff i am excited.
          </h3>
      </div>
        <div class="mx-auto lg:max-w-7xl">
          <div class="mt-6 grid gap-16 pt-10 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
            <div v-for="edge in $page.posts.edges" :key="edge.node.id" >
              <p class="text-lg leading-5 text-gray-700">
                <time :datetime="edge.node.date">{{edge.node.date}}</time>
              </p>
              <g-link :to="edge.node.path" class="block">
                <h3 class="mt-2 text-2xl leading-7 font-semibold text-indigo-800">
                  {{ edge.node.title }}
                </h3>
                <p class="mt-3 text-lg leading-6 text-gray-700">
                  Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.
                </p>
              </g-link>
              <div class="mt-3">
                <g-link :to="edge.node.path" class="text-lg leading-6 font-semibold text-indigo-600 hover:text-underline transition ease-in-out duration-150">
                  Read full article
                </g-link>
              </div>
            </div>
          </div>
        </div>
    </section>
    <section class="my-16" id="projects">
      <div class="w-full py-4 border-b-2 border-gray-200">
        <h2 class="text-3xl lg:text-4xl leading-relaxed tracking-tight font-extrabold text-gray-900">
          Projects
        </h2>
        <h3 class="text-2xl lg:text-2xl leading-7 text-gray-700">
          Below are the projects i worked on and my role on them
        </h3>
      </div>
      <div class="mx-auto lg:max-w-7xl">
        <div class="mt-6 grid gap-16 pt-10 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
          <div v-for="edge in $page.posts.edges" :key="edge.node.id" >
            <p class="text-lg leading-5 text-gray-700">
              <time :datetime="edge.node.date">{{edge.node.date}}</time>
            </p>
            <a href="#" class="block">
              <h3 class="mt-2 text-2xl leading-7 font-semibold text-gray-900">
                {{ edge.node.title }}
              </h3>
              <p class="mt-3 text-lg leading-6 text-gray-700">
                Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.
              </p>
            </a>
            <div class="mt-3">
              <g-link :to="edge.node.path" class="text-base leading-6 font-semibold text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150">
                Read full article
              </g-link>
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
  metaInfo: {
    title: 'Home'
  },
}
</script>
