module.exports = function(config) {
    config.addPassthroughCopy('src/pres');
    return {
        dir: {
            input: 'src',
            output: 'dist'
        },
        passthroughFileCopy: true
    };
};
