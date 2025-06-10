export default function eleventy(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ 'src/assets': 'assets' });
  eleventyConfig.addWatchTarget('src/assets/styles/*.css');
  eleventyConfig.addWatchTarget('src/assets/scripts/*.js');
  eleventyConfig.addLayoutAlias('base', 'layouts/base.liquid');
}

export const config = {
  dir: {
    input: 'src',
  },
};
