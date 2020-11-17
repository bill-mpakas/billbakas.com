<template>
  <div>
    <Navbar />
    <div class="container max-w-5xl py-4 mx-auto md:py-16">
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
