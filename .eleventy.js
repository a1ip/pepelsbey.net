module.exports = function(config) {
    config.addPassthroughCopy('src/pres');
    config.addPassthroughCopy('src/styles');
    config.addPassthroughCopy('src/fonts');
    return {
        dir: {
            input: 'src',
            output: 'dist'
        },
        passthroughFileCopy: true,
        templateFormats: [
            'md',
            'gif', 'jpg', 'png', 'svg'
        ],
    };
};
