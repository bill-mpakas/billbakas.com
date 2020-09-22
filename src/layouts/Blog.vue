<template>
  <div class="font-sans text-gray-800 leading-normal flex flex-col min-h-screen">
    <Navbar />
    <div class="container flex-grow mx-auto py-8 md:py-16 py-32">
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
