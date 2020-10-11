<template>
  <div id="signup">
    <div class="flex flex-wrap md:m-4 shadow-lg">
      <div class="w-full md:w-1/2 bg-gray-200 p-2 md:p-5">
        <div>
          <g-image src="~/assets/images/paws.png" width="80" height="80" />
        </div>
        <div class="text-2xl font-bold text-gray-700 mb-6">
          Why our service?
        </div>
        <div class="inline-flex align-items-center mb-4">
          <check-icon size="2x" class="green mr-1"></check-icon>
          <div class="text-md text-gray-700">We’re animal lovers backed by insurance and experience</div>
        </div>
        <div class="inline-flex align-items-center mb-4">
          <check-icon size="2x" class="green mr-1"></check-icon>
          <div class="text-md text-gray-700">Powered by tech, so you can book and pay from our app</div>
        </div>
        <div class="inline-flex align-items-center mb-4">
          <check-icon size="2x" class="green mr-1"></check-icon>
          <div class="text-md text-gray-700">We use GPS to let you track your sitter’s location</div>
        </div>
      </div>
      <div class="w-full md:w-1/2 bg-white p-2 md:py-4 md:px-4">
        <div class="text-2xl text-green-600 font-bold my-4">
          We care for pets in Winter <br>Let’s create your account.
        </div>
        <div class="w-full mb-4">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="email">
            Email
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email">
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="password">
              Password
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password">
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="password">
              Repeat Password
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lastname" type="password">
          </div>
        </div>
        <label class="w-full block text-gray-500 font-bold">
          <input class="mr-2 leading-tight" type="checkbox">
          <span class="text-sm text-gray-600">I have read the Privacy Policy and agree to the Terms of Service.</span>
        </label>
        <div class="flex flex-row justify-between mt-16 mb-4">
          <a href="text-xl text-gray-600">Already a member? Log in</a>
          <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
            Sign Up
          </button>
        </div>
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
  svg.green {
    color: green;
  }
</style>
