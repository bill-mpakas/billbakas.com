<template>
  <Layout>
    
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return this.$seo({
      title: "About Me", // Uses the titleTemplate in Gridsome config
      description: "Bill Bakas | Full Stack Designer",
      openGraph: {
        title: "Bill Bakas | Full Stack Designer",
        type: "website",
      },
      twitter: {
        title: "Bill Bakas | Full Stack Designer",
        type: "summary",
      },
      link: [], // any links
      script: [], // any scripts
    });
  },
};
</script>
