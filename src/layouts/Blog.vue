<template>
  <div class="bg-gray-50">
    <Navbar />
    <div class="container h-screen max-w-5xl py-4 mx-auto md:py-16">
      <main id="main">
        <slot/>
      </main>
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