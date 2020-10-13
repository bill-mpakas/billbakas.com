<template>
<header class="border-green-700 border-t-14">
      <nav class="container flex flex-wrap items-center justify-between py-8 mx-auto">
        <div>
          <g-link to="/"><g-image src="../../static/logo.svg" class="w-40" alt="logo" /></g-link>
        </div>
        <div class="block lg:hidden">
          <button @click="toggle" class="flex items-center px-3 py-2 border border-gray-500 rounded hover:text-gray-600 hover:border-gray-600">
            <svg class="w-3 h-3 current-color" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" fill="gray" /></svg>
          </button>
        </div>
        <ul class="items-center flex-grow block w-full mt-8 tracking-wide font-regular lg:flex lg:flex-initial lg:w-auto lg:mt-0"
          :class="isOpen ? 'block': 'hidden'">
          <li class="mb-6 mr-8 lg:mb-0"><g-link to="/projects" class="text-xl text-gray-800 hover:text-gray-600">Work</g-link></li>
          <li class="mb-6 mr-8 lg:mb-0"><g-link to="/articles" class="text-xl text-gray-800 hover:text-gray-600">Articles</g-link></li>
          <li class="mb-6 mr-8 lg:mb-0"><a target="_blank" rel="noopener" href="/resume.pdf" class="text-xl text-gray-800 hover:text-gray-600">Resume</a></li>
        </ul>
      </nav>
    </header>
</template>

<script>
export default {

}
</script>
