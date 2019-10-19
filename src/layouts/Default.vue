<template>
  <div class="font-sans text-gray-800 leading-normal flex flex-col min-h-screen">
    <Navbar />
    <div class="flex-grow">
      <slot/>
    </div>
    <footer class="bg-blue-500 text-white">
      <div class="container mx-auto flex items-center justify-between py-6">
        <div>Copyright 2019. All Rights Reserved</div>
      </div>
    </footer>
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
export default {
  components: {
    Navbar
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