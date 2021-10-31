<template>
  <header>
    <div class="relative">
      <div
        class="flex items-center justify-between px-4 py-8 mx-auto max-w-7xl sm:px-6 md:justify-start md:space-x-10 lg:px-8"
      >
        <div class="flex justify-start lg:flex-0">
          <a href="#">
            <span class="sr-only">Workflow</span>
            <g-link to="/"
              ><g-image
                src="../../static/logo.svg"
                class="w-32 h-10 sm:h-10"
                alt="logo"
            /></g-link>
          </a>
        </div>
        <div class="-my-2 -mr-2 md:hidden">
          <button
            @click="toggle()"
            type="button"
            class="inline-flex items-center justify-center p-2 text-gray-600 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span class="sr-only">Open menu</span>
            <!-- Heroicon name: menu -->
            <svg
              class="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <div class="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
          <nav class="hidden space-x-10 md:flex">
            <g-link
              to="/blog/"
              class="text-xl font-medium text-gray-500 hover:text-gray-900"
            >
              Articles
            </g-link>
            <a
              href="/Bakas_Vasileios_CV_2021.pdf"
              class="px-4 text-xl font-medium text-gray-500 border border-gray-300 rounded-sm shadow-sm hover:text-gray-900"
            >
              Resume
            </a>
          </nav>
        </div>
      </div>
      <transition name="fade">
        <div
          v-if="isOpen"
          class="absolute inset-x-0 top-0 z-30 p-2 transition origin-top-right transform md:hidden"
        >
          <div
            class="bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50"
          >
            <div class="px-5 pt-5 pb-6">
              <div class="flex items-center justify-between">
                <div>
                  <g-link to="/"
                    ><g-image
                      src="../../static/logo.svg"
                      class="h-8 w-28 sm:h-10"
                      alt="logo"
                  /></g-link>
                </div>
                <div class="-mr-2">
                  <button
                    @click="toggle()"
                    type="button"
                    class="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  >
                    <span class="sr-only">Close menu</span>
                    <!-- Heroicon name: x -->
                    <svg
                      class="w-8 h-8"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div class="px-5 py-6">
              <div class="grid grid-cols-1 gap-4 text-center">
                <g-link
                  to="/blog/"
                  class="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Articles
                </g-link>

                <a
                  href="/Bakas_Vasileios_CV_2021.pdf"
                  class="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>

<script>
export default {
  components: {},
  mounted() {},
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
      console.log(this.isOpen);
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
