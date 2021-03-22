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
