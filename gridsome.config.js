// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwind = require("tailwindcss");

const postcssPlugins = [tailwind()];

module.exports = {
  siteName: process.env.SITE_NAME || "Bill Bakas Personal Blog",
  siteDescription: process.env.SITE_DESCRIPTION,
  siteUrl: process.env.GRIDSOME_BASE_URL || "https://billbakas.com",
  metadata: {
    author: "Bill Bakas",
    twitter: {
      site: "@bill_bakas",
      creator: "@bill_bakas",
    },
  },
  icon: {
    favicon: {
      src: process.env.SITE_FAVICON_PATH || "./static/images/favicon.png",
      sizes: [16, 32, 96],
    },
  },
  plugins: [
    {
      use: "gridsome-plugin-seo",
      options: {
        author: "Bill Bakas",
      },
    },
    {
      use: "@gridsome/vue-remark",
      options: {
        typeName: "Project", // Required
        baseDir: "./projects", // Where .md files are located
        pathPrefix: "/projects", // Add route prefix. Optional
        template: "./src/templates/Project.vue", // Optional
      },
    },
    {
      use: "@gridsome/vue-remark",
      options: {
        typeName: "Post", // Required
        baseDir: "./blog", // Where .md files are located
        pathPrefix: "/blog", // Add route prefix. Optional
        template: "./src/templates/Post.vue", // Optional
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"],
        },
        refs: {
          tags: {
            typeName: "Tag",
            create: true,
          },
        },
      },
    },
    {
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      use: "gridsome-plugin-robots-txt",
      options: {
        host: "https://billbakas.com",
        sitemap: "https://billbakas.com/configs/sitemap.xml",
        policy: [
          {
            userAgent: "Googlebot",
            allow: "/",
            disallow: "/search",
            crawlDelay: 2,
          },
          {
            userAgent: "*",
            allow: "/",
            disallow: "/search",
            crawlDelay: 10,
            cleanParam: "ref /articles/",
          },
        ],
      },
    },
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        cacheTime: 600000, // default
      },
    },
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
  templates: {
    Tag: "/tag/:id",
  },
};
