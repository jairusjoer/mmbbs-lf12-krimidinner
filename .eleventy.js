module.exports = function (eleventyConfig) {
    // Pass through assets
    eleventyConfig.addPassthroughCopy('src/assets/data');
    eleventyConfig.addPassthroughCopy('src/assets/images');
    eleventyConfig.addPassthroughCopy('src/assets/scripts');

    return {
        dir: {
            input: 'src',
            output: 'dist',
            data: 'data',
            includes: 'includes',
            layouts: 'layouts',
        },
    };
};
