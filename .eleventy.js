module.exports = function(config) {
    config.addPassthroughCopy('src/pres');
    config.addPassthroughCopy('src/blocks');
    config.addPassthroughCopy('src/fonts');
    config.addPassthroughCopy('src/blog/**/*.(html|gif|jpg|png|svg|zip)');

    config.addFilter('readableDate', (value) => {
        return value.toLocaleString('ru', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }).replace(' г.', '');
    });

    config.addCollection('postsReversed', function(collection) {
        return collection.getFilteredByTag('post').reverse();
    });

    return {
        dir: {
            input: 'src',
            output: 'dist',
            includes: 'includes',
            layouts: 'layouts',
            data: 'data',
        },
        passthroughFileCopy: true,
        templateFormats: [
            'md',
            'njk',
        ],
    };
};
