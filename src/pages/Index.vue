<template>
  <Layout>
    <section class="py-12" id="intro">
      <div class="container flex flex-wrap justify-between">
        <div class="w-full md:w-9/12">
          <p class="w-full mb-2 text-2xl text-gray-800 font-regular lg:mb-4 lg:text-3xl">
            I’m Bill. I’m a UI designer & Wordpress Developer. I design & develop, resilient and accessible user interfaces. Currently pushing pixels at <a target="_blank" class="font-medium underline" rel="noopener" href="https://pointer.gr">pointer.</a>
            You can view <a class="underline" href="/projects">my work</a> or read my <a class="underline" href="/articles">blog.</a>
          </p>
        </div>
          <g-image src="~/assets/images/bill-photo.jpg" class="h-48 w-48 object-cover rounded-full" alt="logo" />
      </div>
    </section>
    <section id="recent">
      <div class="container w-full py-4">
        <div>
          <h2 class="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
            Articles
          </h2>
          <p class="mt-3 text-xl leading-7 text-gray-600 sm:mt-4">
            Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.
          </p>
        </div>
      </div>
        <div class="container mx-auto lg:max-w-7xl">
          <div class="mt-6 grid gap-16 border-t-2 border-gray-100 pt-10 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
            <div>
              <p class="text-sm leading-5 text-gray-500">
                <time datetime="2020-03-16">Mar 16, 2020</time>
              </p>
              <a href="#" class="block">
                <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
                  Boost your conversion rate
                </h3>
                <p class="mt-3 text-base leading-6 text-gray-500">
                  Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.
                </p>
              </a>
              <div class="mt-3">
                <a href="#" class="text-base leading-6 font-semibold text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150">
                  Read full story
                </a>
              </div>
            </div>
            <div>
              <p class="text-sm leading-5 text-gray-500">
                <time datetime="2020-03-10">Mar 10, 2020</time>
              </p>
              <a href="#" class="block">
                <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
                  How to use search engine optimization to drive sales
                </h3>
                <p class="mt-3 text-base leading-6 text-gray-500">
                  Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.
                </p>
              </a>
              <div class="mt-3">
                <a href="#" class="text-base leading-6 font-semibold text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150">
                  Read full story
                </a>
              </div>
            </div>
            <div>
              <p class="text-sm leading-5 text-gray-500">
                <time datetime="2020-02-12">Feb 12, 2020</time>
              </p>
              <a href="#" class="block">
                <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
                  Improve your customer experience
                </h3>
                <p class="mt-3 text-base leading-6 text-gray-500">
                  Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis.
                </p>
              </a>
              <div class="mt-3">
                <a href="#" class="text-base leading-6 font-semibold text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150">
                  Read full story
                </a>
              </div>
            </div>
            <div>
              <p class="text-sm leading-5 text-gray-500">
                <time datetime="2020-01-29">Jan 29, 2020</time>
              </p>
              <a href="#" class="block">
                <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
                  Writing effective landing page copy
                </h3>
                <p class="mt-3 text-base leading-6 text-gray-500">
                  Ipsum voluptates quia doloremque culpa qui eius. Id qui id officia molestias quaerat deleniti. Qui facere numquam autem libero quae cupiditate asperiores vitae cupiditate. Cumque id deleniti explicabo.
                </p>
              </a>
              <div class="mt-3">
                <a href="#" class="text-base leading-6 font-semibold text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150">
                  Read full story
                </a>
              </div>
            </div>
          </div>
        </div>
      <!--      <div class="px-2">-->
<!--  <div class="flex -mx-2">-->
<!--    <div class="w-full px-2 md:w-1/3">-->
<!--        <div class="inline-flex items-center mb-4 space-x-2">-->
<!--          <h2 class="mb-0 text-xl font-bold leading-9 tracking-tight text-indigo-700 sm:text-3xl sm:leading-10">-->
<!--            Latest Articles /-->
<!--        </h2>-->
<!--          <div class="text-gray-600 hover:text-gray-900">-->
<!--            <g-link class="inline-flex text-base text-gray-600" to="/articles">-->
<!--          View all-->
<!--                  <svg class="w-6 h-6 ml-1 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>-->
<!--          </g-link>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="px-1 my-1" v-for="edge in $page.posts.edges" :key="edge.node.id">-->
<!--          <g-link :to="edge.node.path">-->
<!--             <h3 class="mt-2 text-2xl font-semibold leading-normal text-gray-800">-->
<!--               {{ edge.node.title }}-->
<!--              </h3>-->
<!--          </g-link>-->
<!--          <p class="text-base leading-5 text-gray-600">-->
<!--          <time :datetime="edge.node.date">{{edge.node.date}}</time>-->
<!--          </p>-->
<!--        </div>-->
<!--    </div>-->
<!--    <div class="w-full px-2 md:w-1/3">-->
<!--      <div class="">-->
<!--        <h2 class="mb-3 text-2xl font-bold leading-9 tracking-tight text-indigo-700 sm:text-2xl sm:leading-10">-->
<!--            Recent Posts-->
<!--        </h2>-->
<!--        <div class="px-2" v-for="edge in $page.projects.edges" :key="edge.node.id">-->
<!--         <g-link class="text-lg" :to="edge.node.path">{{ edge.node.title }}</g-link>-->
<!--       </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="w-full px-2 md:w-1/3">-->
<!--      <div class="">-->
<!--        <h2 class="mb-3 text-2xl font-bold leading-9 tracking-tight text-indigo-700 sm:text-2xl sm:leading-10">-->
<!--            On Social-->
<!--        </h2>-->
<!--        <div class="px-2" v-for="edge in $page.projects.edges" :key="edge.node.id">-->
<!--         <g-link class="text-lg" :to="edge.node.path">{{ edge.node.title }}</g-link>-->
<!--       </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</div>-->
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
    title: 'Bill Bakas - UI Designer/Developer'
  },
}
</script>
