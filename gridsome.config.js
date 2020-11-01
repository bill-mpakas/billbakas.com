// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Bill Bakas - UI Designer/Developer",
  plugins: [
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Project', // Required
        baseDir: './projects', // Where .md files are located
        pathPrefix: '/projects', // Add route prefix. Optional
        template: './src/templates/Project.vue', // Optional
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'Post',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    },
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        presetEnvConfig: {},
        shouldImport: true,
        shouldTimeTravel: true,
        shouldPurgeUnusedKeyframes: true,
      }
    }
  ],
  templates: {
    Tag: '/tag/:id'
  },
}

