<template>
  <div class="font-sans text-gray-800 leading-normal flex flex-col min-h-screen">
    <header class="border-t-14 border-green-700">
      <nav class="container mx-auto flex flex-wrap justify-between items-center py-8">
        <div>
          <g-link to="/"><g-image src="../../static/logo.svg" class="w-40" alt="logo" /></g-link>
        </div>
        <div class="block lg:hidden">
          <button @click="toggle" class="flex items-center px-3 py-2 border rounded border-gray-500 hover:text-gray-600 hover:border-gray-600">
            <svg class="current-color h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" fill="gray" /></svg>
          </button>
        </div>
        <ul class="uppercase tracking-wide font-bold w-full block flex-grow lg:flex lg:flex-initial lg:w-auto items-center mt-8 lg:mt-0"
          :class="isOpen ? 'block': 'hidden'">
          <li class="mr-8 mb-6 lg:mb-0"><a href="#" class="text-gray-800 hover:text-gray-600">Projects</a></li>
          <li class="mr-8 mb-6 lg:mb-0"><a href="#" class="text-gray-800 hover:text-gray-600">Blog</a></li>
        </ul>
      </nav>
    </header>
    <div class="flex-grow">
      <slot/>
    </div>
    <footer class="bg-blue-500 text-white">
      <div class="container mx-auto flex items-center justify-between py-6">
        <div>Copyright 2019. All Rights Reserved</div>
        <ul class="flex items-center">
          <li class="mr-8">
            <a href="#">A</a>
          </li>
          <li class="mr-8">
            <a href="#">A</a>
          </li>
          <li class="mr-8">
            <a href="#">A</a>
          </li>
          <li class="mr-8">
            <a href="#">A</a>
          </li>
          <li class="mr-8">
            <a href="#">A</a>
          </li>
        </ul>
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

export default {
  components: {
    
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