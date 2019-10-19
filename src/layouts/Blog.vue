<template>
  <div>
    <Navbar />
    <div class="container mx-auto py-16">
      <slot/>
    </div>
    <Footer />
  </div>
</template>

<static-query>
  query {
  metadata {
  siteName
  }
  }
</static-query>

<style>

  @import url(https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/3.0.1/github-markdown.min.css);

</style>

<script>
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default {
  components: {
    Navbar,
    Footer,
  },
}
</script>
