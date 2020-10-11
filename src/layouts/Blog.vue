<template>
  <div class="flex flex-col min-h-screen font-sans leading-normal text-gray-800">
    <Navbar />
    <div class="container py-32 mx-auto md:py-16">
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
