export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({"src/assets": "assets"});
  eleventyConfig.addPassthroughCopy({"src/_headers": "_headers"});
  eleventyConfig.addPassthroughCopy({"src/robots.txt": "robots.txt"});

  eleventyConfig.addFilter("limit", (arr, n) => (arr || []).slice(0, n));

  eleventyConfig.addFilter("datePL", (dateObj) => {
    const d = new Date(dateObj);
    return new Intl.DateTimeFormat("pl-PL", {
      year: "numeric", month: "long", day: "numeric"
    }).format(d);
  });

  eleventyConfig.addCollection("aktualnosci", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/aktualnosci/*.md")
      .filter(item => !item.data.draft)
      .sort((a,b) => b.date - a.date);
  });

  eleventyConfig.addCollection("dzialam", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/dzialam/*.md")
      .filter(item => !item.data.draft)
      .sort((a,b) => b.date - a.date);
  });

  eleventyConfig.addCollection("tematy", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/tematy/*.md")
      .filter(item => !item.data.draft)
      .sort((a,b) => b.date - a.date);
  });

  eleventyConfig.addCollection("miejsca", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/ludzie-i-miejsca/*.md")
      .filter(item => !item.data.draft)
      .sort((a,b) => b.date - a.date);
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
}
