<template>
<header class="py-4 md:py-6 lg:py-8">
      <nav class="container flex justify-between max-w-5xl mx-auto">
        <div class="flex-shrink">
          <g-link to="/"><g-image src="../../static/logo.svg" class="w-28 sm:w-40 md:w-42" alt="logo" /></g-link>
        </div>
        <ul class="flex flex-initial space-x-4 tracking-wide md:spaxe-x-4 lg:space-x-8">
          <li><g-link to="/projects/" class="text-base text-gray-800 md:text-xl hover:text-gray-600">Work</g-link></li>
          <li><g-link to="/blog/" class="text-base text-gray-800 md:text-xl hover:text-gray-600">Articles</g-link></li>
          <li><a target="_blank" rel="noopener" href="/resume.pdf" class="text-base text-gray-800 md:text-xl hover:text-gray-600">Resume</a></li>
        </ul>
      </nav>
    </header>
</template>

<script>
export default {

}
</script>
