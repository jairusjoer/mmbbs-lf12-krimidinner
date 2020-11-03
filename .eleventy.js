module.exports = function (eleventyConfig) {
    // Pass through assets
    eleventyConfig.addPassthroughCopy('src/assets/');

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
