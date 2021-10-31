<template>
  <div class="bg-gray-50">
    <Navbar />
    <div class="py-4 mx-auto max-w-7xl md:py-16">
      <main id="main">
        <slot />
      </main>
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
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default {
  components: {
    Navbar,
    Footer,
  },
  mounted() {},
  data() {
    return {
      isOpen: false,
      theme: "",
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
