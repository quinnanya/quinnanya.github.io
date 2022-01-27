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


	



module.exports = function (config) {
	
	config.addPlugin(pluginRss);
	
	config.setLibrary(
	    'md',
	    markdownIt().use(markdownItAnchor)
	  )



    // don't use .gitignore (allows compiling sass to css into a monitored folder WITHOUT committing it to repo)
    config.setUseGitIgnore(false)

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
	})

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
            }
        }
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