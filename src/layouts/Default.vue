<template>
  <div class="font-sans text-gray-800 leading-normal">
    <header class="header">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto distinctio dolorum ducimus illum laborum maiores sapiente suscipit vitae! Aperiam doloribus eius impedit laudantium nostrum officiis perspiciatis reprehenderit sint sunt tempore.
    </header>
    <slot/>
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
