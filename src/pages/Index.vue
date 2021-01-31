<template>
  <Layout>
    <section class="py-4 lg:py-12" id="intro">
      <div class="flex flex-wrap justify-around max-w-6xl mx-auto">
        <div class="w-full leading-loose">
          <h2 class="mb-2 text-2xl text-gray-800 font-regular lg:mb-4 lg:text-4xl xl:text-6xl">
            Hi! I’m Bill. A UI Developer.  
          </h2>
          <h3 class="text-xl text-gray-800 font-regular lg:mb-4 lg:text-3xl xl:text-4xl">
            I design & develop, simple and accessible user interfaces.
            </h3>
          <p class="text-lg lg:text-2xl xl:text-3xl">
            Currently pushing pixels &#64;<a target="_blank" class="font-medium text-red-700" rel="noopener" href="https://pointer.gr">pointer.</a>
          </p>
        </div>
        <!-- <div class="py-4 mx-auto md:py-0">
            <g-image src="~/assets/images/bill-photo.jpg" class="object-cover w-48 h-48 text-center rounded-full" alt="logo" />
        </div> -->
      </div>
    </section>
    <!-- <section class="my-4 md:my-12" id="recent-articles">
      <div class="w-full py-4 border-b-2 border-gray-200">
          <h2 class="text-3xl font-extrabold leading-relaxed tracking-tight text-gray-700 lg:text-4xl">
            Articles
          </h2>
          <h3 class="text-2xl leading-7 text-gray-500 lg:text-2xl">
            I occasionally write about stuff i am excited.
          </h3>
      </div>
        <div class="mx-auto lg:max-w-7xl">
          <div class="grid gap-16 pt-10 mt-6 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
            <div v-for="edge in $page.posts.edges" :key="edge.node.id" >
              <p class="text-lg leading-5 text-gray-700">
                <time :datetime="edge.node.date">{{edge.node.date}}</time>
              </p>
              <g-link :to="edge.node.path" class="block">
                <h3 class="mt-2 text-2xl font-semibold leading-7 text-indigo-800">
                  {{ edge.node.title }}
                </h3>
                <p class="mt-3 text-lg leading-6 text-gray-700">
                  Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.
                </p>
              </g-link>
              <div class="mt-3">
                <g-link :to="edge.node.path" class="text-lg font-semibold leading-6 text-indigo-600 transition duration-150 ease-in-out hover:text-underline">
                  Read full article
                </g-link>
              </div>
            </div>
          </div>
        </div>
    </section>
    <section class="my-16" id="projects">
      <div class="w-full py-4 border-b-2 border-gray-200">
        <h2 class="text-3xl font-bold leading-relaxed tracking-tight text-gray-800 lg:text-4xl">
          Projects
        </h2>
        <h3 class="text-2xl leading-7 text-gray-700 lg:text-2xl">
          Below are the projects i worked on and my role on them
        </h3>
      </div>
      <div class="mx-auto lg:max-w-7xl">
        <div class="grid gap-16 pt-10 mt-6 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
          <div v-for="edge in $page.projects.edges" :key="edge.node.id" >
            <p class="text-lg leading-5 text-gray-700">
              <time :datetime="edge.node.date">{{edge.node.date}}</time>
            </p>
            <a href="#" class="block">
              <h3 class="mt-2 text-2xl font-semibold leading-7 text-gray-900">
                {{ edge.node.title }}
              </h3>
              <p class="mt-3 text-lg leading-6 text-gray-700">
                Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.
              </p>
            </a>
            <div class="mt-3">
              <g-link :to="edge.node.path" class="text-base font-semibold leading-6 text-indigo-600 transition duration-150 ease-in-out hover:text-indigo-500">
                Read full article
              </g-link>
            </div>
          </div>
        </div>
      </div>
    </section> -->
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
  metaInfo () {
    return this.$seo({
      title: 'Home', // Uses the titleTemplate in Gridsome config
      description: '| Full Stack Designer',
      keywords: 'one,two',
      openGraph: {
        title: 'My site',
        type: 'website'
      },
      twitter: {
        title: 'My site',
        type: 'summary'
      },
      link: [],   // any links
      script: []  // any scripts
    })
  }
}
</script>
