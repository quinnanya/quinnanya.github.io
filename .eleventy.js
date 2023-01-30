const fs = require("fs-extra");
const sass = require("sass");
const postcss = require("postcss");
const autoprefixer = require("autoprefixer");
const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const pluginTOC = require('eleventy-plugin-toc');
const moment = require("moment");
const description = require('eleventy-plugin-description');
const pluginRss = require("@11ty/eleventy-plugin-rss");
const Eleventy = require("@11ty/eleventy");


// Below for relativeUrl
const path = require("path");
const urlFilter = require("@11ty/eleventy/src/Filters/Url");

module.exports = function (config) {


config.addGlobalData("config", () => {
  return { version: Eleventy.getVersion() };
});

    config.addPlugin(pluginRss);

    config.setLiquidOptions({
        dynamicPartials: false,
        strictVariables: false,
        strictFilters: false,
        jekyllInclude: true,
    });

    config.setLibrary("md", markdownIt().use(markdownItAnchor));
    //Copy CNAME
    config.addPassthroughCopy("src/CNAME");

    // don't use .gitignore (allows compiling sass to css into a monitored folder WITHOUT committing it to repo)
    config.setUseGitIgnore(false);

    // Processing configuration
    config.addPassthroughCopy('src/favicon.ico');
    config.addPassthroughCopy('src/admin');
    config.addPassthroughCopy('src/assets');


    //Blog excerpts
    config.addPlugin(description);


    // Eleventy Navigation (https://www.11ty.dev/docs/plugins/navigation/)
    config.addPlugin(require('@11ty/eleventy-navigation'));

    // Eleventy RSS Feed (https://www.11ty.dev/docs/plugins/rss/)
    config.addPlugin(require('@11ty/eleventy-plugin-rss'));

    config.addLiquidFilter("toUTCString", (date) => {
        const utc = date.toUTCString();
        return moment.utc(utc).format("MMMM Do YYYY");
    });

    // Filter to generate a Table of Contents from page content
    config.addPlugin(pluginTOC, {
    tags: ['h2', 'h3'],
    wrapper: 'div'
  })

    // TODO https://www.npmjs.com/package/eleventy-plugin-meta-generator

    // Eleventy Syntax Highlighting (https://www.11ty.dev/docs/plugins/syntaxhighlight/)
    config.addPlugin(require('@11ty/eleventy-plugin-syntaxhighlight'));


    // Merge Data (https://www.11ty.dev/docs/data-deep-merge/)
    config.setDataDeepMerge(true);
	


    // Custom Collections
    config.addCollection('pages', collection => collection
        .getFilteredByGlob('./src/pages/**/*')
    );

    config.addCollection('posts', collection => collection
        .getFilteredByGlob('./src/posts/**/*')
        .filter(item => item.data.draft !== true && item.date <= new Date())
            .reverse()
            .map((cur, i, all) => {
            cur.data['siblings'] = {
                'next': all[i - 1],
                'prev': all[i + 1],
                };
                return cur;
            })
    );

    config.addCollection('projects', collection => collection
        .getFilteredByGlob('./src/projects/**/*')
        .sort((a, b) => a.data.weight - b.data.weight)
    );

    config.addCollection('tags', collection => {
        let tags = new Set();

        collection.getAll().forEach(item => {
            if ('tags' in item.data) {
                for (const tag of item.data.tags) {
                    tags.add(tag);
                }
            }
        });

        return [...tags];
    });


    // Markdown Configuration
    const md = require('markdown-it')({
        html: true,
        breaks: true,
        linkify: true,
    });
    config.setLibrary('md', md
        .use(require('markdown-it-attrs'))
        .use(require('markdown-it-container'), '', {
            validate: () => true,
            render: (tokens, idx) => {
                if (tokens[idx].nesting === 1) {
                    const classList = tokens[idx].info.trim()
                    return `<div ${classList && `class="${classList}"`}>`;
                } else {
                    return `</div>`;
                }
            }
        })
        .use(require('markdown-it-fontawesome'))
        .use(require('markdown-it-footnote'))
    );
    // override markdown-it-footnote anchor template to use a different unicode character
    md.renderer.rules.footnote_anchor = (tokens, idx, options, env, slf) => {
        var id = slf.rules.footnote_anchor_name(tokens, idx, options, env, slf);

        if (tokens[idx].meta.subId > 0) {
            id += ':' + tokens[idx].meta.subId;
        }

        /* ⇑ with escape code to prevent display as Apple Emoji on iOS */
        return ' <a href="#fnref' + id + '" class="footnote-backref">\u21d1\uFE0E</a>';
    };


    config.setFrontMatterParsingOptions({
        excerpt: true,
    });


    config.addNunjucksFilter('markdownify', str => md.render(str));

    config.addFilter('jsonify', variable => JSON.stringify(variable));
    
    config.addFilter('slugify', str => require('slugify')(str, {
        lower: true,
        replacement: '-',
        remove: /[*+~.·,()''`´%!?¿:@]/g
    }));

    config.addFilter('where', (array, key, value) => array.filter(item => {
        const keys = key.split('.');
        const reducedKey = keys.reduce((object, key) => object[key], item);
    
        return (reducedKey === value ? item : false);
    }));

    config.addFilter('date', (date, format = '') => require('moment')(date).format(format));


    // Configure BrowserSync to serve the 404 page for missing files
    config.setBrowserSyncConfig({
        callbacks: {
            ready: (_err, browserSync) => {
                const content_404 = fs.readFileSync('dist/404.html');
    
                browserSync.addMiddleware('*', (_req, res) => {
                    // render the 404 content instead of redirecting
                    res.write(content_404);
                    res.end();
                });
            },
        },
    });

    config.setBrowserSyncConfig({
			files: './dist/assets/styles/**/*.css'
    });

    return {
        templateFormats: ['html', 'liquid', 'md', 'njk'],

        pathPrefix: '/',

        passthroughFileCopy: true,

        dir: {
            input: 'src',
            includes: '_includes',
            data: '_data',
            output: 'dist'
        }
    };
};

// Below is from NPM plugin eleventy-filter-relative-url, however its
// tied to v0.12, using it with eleventy 1.x or 2.x requires providing
// --legacy-peer-deps any time you add a new package. Therefore I took
// the code and inlined it. Although better would be an external file.

/**
 * Heuristic to detect if an URL needs an index file; either because it ends
 * with a slash, or its last component has no dots in it.
 *
 * @param {string} url
 * @returns trailing `/index.html` if url looks like a directory.
 */
const indexify = (url) => url.replace(/(\/[^.]*)$/, "$1index.html");

/**
 * Just `{{ '/something' | url }}` will return the relative path to
 * `/something/index.html`.
 *
 * `{{ '/something.with.dots' | url }}` will return the relative path to
 * `/something.with.dots`.
 *
 * @param {string} url the URL to transform
 * @param {string} [pathPrefix] optional path prefix to force an absolute URL
 * @returns {string} resulting URL
 */
function relativeUrl(url, pathPrefix = undefined) {
    //      console.log(url);
    //      console.log(pathPrefix);
    //      console.log(this.page);
    if (pathPrefix !== undefined) {
        // Fall back on original url filter if pathPrefix is set.
        return urlFilter(url, pathPrefix);
    }

    if (pathPrefix == undefined && this.page == undefined) {
        //      added by RMCG
        return urlFilter(url, "");
    }

    // Look up the url of the current rendering page, which is accessible via
    // `this`.
    console.log(this);
    const currentDir = this.page.url;
    const filteredUrl = urlFilter(url, "/");

    // Make sure the index.html is expressed.
    const indexUrl = indexify(filteredUrl);

    // Check that the url doesn't specify a protocol.
    const u = new URL(indexUrl, "make-relative://");
    if (u.protocol !== "make-relative:") {
        // It has a protocol, so just return the filtered URL output.
        return filteredUrl;
    }

    // Return the relative path, or `index.html` if it's the same as the current
    // page's directory.
    const relativePath = `${
        path.relative(currentDir, u.pathname) || "index.html"
    }`;
    return relativePath;
}