<template>
  <div class="flex flex-col min-h-screen font-sans leading-normal text-gray-800">
    <Navbar />
    <div class="container mx-auto py-32 md:py-16">
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

<style src="../css/main.css" />
