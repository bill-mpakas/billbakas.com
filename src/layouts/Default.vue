<template>
  <div class="font-sans text-gray-800 leading-normal flex flex-col min-h-screen">
    <Navbar />
    <div class="flex-grow">
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
    Navbar,Footer,
  },
  mounted() {
    
  },
  data() {
    return {
      isOpen: false,
      theme: '',
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    },
  }
}
</script>