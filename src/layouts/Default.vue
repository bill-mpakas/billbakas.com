<template>
  <div class="font-sans text-gray-800 leading-normal flex flex-col min-h-screen">
    <NavBarMenu />
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
    import NavBarMenu from '../components/NavBarMenu'
    export default {
    components: {
        NavBarMenu
    },
    mounted() {

    },
    data()  {
        return {

        }
    }
    }
</script>
