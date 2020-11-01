<template>
  <div>
    <Navbar />
      <slot/>
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