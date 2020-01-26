<template>
  <div id="signup">
    <div class="flex m-4">
      <div class="w-1/2 bg-gray-200 p-3">
        <div class="inline-flex align-items-center mb-2">
          <check-icon size="2x" class="custom-class"></check-icon>
          <div class="text-md">We’re animal lovers backed by insurance and experience</div>
        </div>
        <div class="inline-flex align-items-center mb-2">
          <check-icon size="2x" class="custom-class"></check-icon>
          <div class="text-md">We’re animal lovers backed by insurance and experience</div>
        </div>
        <div class="inline-flex align-items-center mb-2">
          <check-icon size="2x" class="custom-class"></check-icon>
          <div class="text-md">We’re animal lovers backed by insurance and experience</div>
        </div>
        <div class="inline-flex align-items-center mb-2">
          <check-icon size="2x" class="custom-class"></check-icon>
          <div class="text-md">We’re animal lovers backed by insurance and experience</div>
        </div>
      </div>
      <div class="w-1/2 bg-gray-500 h-12">
          Other Container
      </div>
    </div>
  </div>
</template>

<script>
  import { CheckIcon } from 'vue-feather-icons'
  export default {
    data() {
      return {
        show: true
      }
    },
    components: {
      CheckIcon
    },
  }
</script>

<style scoped>
  /*svg.feather {*/
  /*  height: 1em;*/
  /*  margin-top: -4px;*/
  /*  pointer-events: none;*/
  /*  vertical-align: middle;*/
  /*  width: 1em;*/
  /*}*/
</style>
