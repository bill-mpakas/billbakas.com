// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function(api) {
  api.loadSource(({ addMetadata, addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/

    addMetadata(
      "siteTitle",
      process.env.SITE_TITLE || "Bill Bakas | Full Stack Designer"
    );
    addMetadata("siteAuthor", process.env.SITE_AUTHOR || "Bill Bakas");
    addMetadata(
      "siteAuthorUrl",
      process.env.SITE_AUTHOR_URL || "https://billbakas.com"
    );
  });

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  });
};
