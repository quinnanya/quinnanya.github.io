---
permalink: /blog/2022/05/07/hosting-eleventy-on-github-pages/
title: "Hosting Eleventy on GitHub Pages"
date: 2022-05-07
classes: wide
show_date: true
---

I've really been enjoying building sites with Eleventy instead of Jekyll. I'm still learning my way around some of the cool data capabilities, but NodeJS has been much more agreeable to wrangle than Ruby, and that alone is worth a lot.

I appreciate that Netlify would make hosting Eleventy sites very easy, but I'm reluctant to add yet another platform to the set of things I have to deal with, especially when I'm using GitHub Pages for the Jekyll sites I'm still running. When I looked at the tutorials for hosting Eleventy on GitHub Pages, I wasn't able to get any of them to work -- there was always something just slightly off for my use case. But with help from [Cassey Lottman](https://www.cassey.dev/), I got it working with my first Eleventy site and I've reused that configuration for a handful of other sites since.

## The big picture
GitHub Pages assumes you're using Jekyll unless you tell it otherwise. Instead of using the automatic GitHub Pages workflows for building Jekyll sites, you'll be using the [Github Pages action by Peace Iris](https://github.com/peaceiris/actions-gh-pages) that can build other kinds of static sites and move them to the branch where the HTML files will be hosted. You'll need to add a number of new files to your GitHub repo to make this happen.

## New files in your GitHub repo
- **.nojekyll file**: Open a plain-text editor and save an empty file in the root of your repo (where you have the *.eleventy.js*) with the filename *.nojekyll*. This will stop GitHub from trying to build your site as a Jekyll site.
- **.github directory**: Create a new directory in the root of your repo and name it *.github* (yes, starting with a period). Inside that directory, make a directory named *workflows*. Open a plain-text editor and save a file inside the workflows directory called *build.yml*. Copy the [contents from my build.yml file here](https://github.com/quinnanya/quinnanya.github.io/blob/main/.github/workflows/build.yml).

*Note: my build.yml file was updated 6/14/23 with Node version improvements thanks to Simon Wiles*


Depending on your Eleventy setup, you may need to change `publish_dir` in your build.yml file. My Eleventy site builds to a folder called *dist*. If yours builds to a folder with a different name, change it in this file.


## GitHub configuration
### Creating a gh-pages branch
Using the GitHub interface, you'll need to create a new branch of your repo called *gh-pages* where the built version of your site will be hosted from. If you're looking at your repo on GitHub, you should see a little button that says *main* towards the upper left, under the *<> Code* tab. Click that button, then type *gh-pages* into the field that says *Find or create a branch*. This will create a new branch called *gh-pages*

### Actions configuration
Go into the settings for your repo, click on *Actions* in the set of tabs on the left, then *General*. Make sure that "Allow all actions and reusable workflows" is selected, and at the bottom of that page, under *Workflow permissions* make sure that you have "Read and write permissions" selected.

If you the "Read and write permissions" is disabled and grayed out so you can't enable it, you may need to go into the settings for the parent account or organization that owns the repo, and enable "Read and write permissions" at that level first.

### GitHub Pages configuration
Go into the settings for your repo, and click on "Pages" in the set of tabs on the left. Use the dropdown under *Source* to choose the gh-pages branch. 

### Custom domain configuration
If you're using a custom domain (e.g. something-something.com) for your website, make sure you enter the custom domain in the *Custom domain* field in the GitHub Pages configuration, and you [configure the DNS for your domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) to point to GitHub.

When you add a custom domain in the *Custom domain* field in the GitHub Pages configuration, you'll get a new file in the root of your repo called *CNAME*. It's a plain text file with one line of text: the custom domain you want to use.

You'll need to make a small change to your *.eleventy.js* file to make sure the CNAME file gets moved over to the built version of the site. As part of the `module.exports` section, add a line that reads `config.addPassthroughCopy("src/CNAME");`. (If your function is named something other than *config*, like *eleventyConfig*, change this line to have the right function name.)

## Building the site
In theory, if you've set up all these things, anytime you push changes to GitHub, it will trigger an action that will build the site and move those files to the GitHub Pages hosting environment.

If everything isn't set up just right, you'll get an email that an action failed. Click the "View workflow run" link in the email, which will take you to a page with information on the failed workflow. Click on the text in the middle panel where you see a red circle with an x -- what the text says depends on where exactly it failed. Eventually you'll see text reflecting where exactly the process failed, and you can search parts of that error message to figure out what's going wrong.

In one case for me, I spent a little while stuck on "Permission to myrepo/myrepo.github.io.git denied to github-actions\[bot\]", and it turned out that I hadn't enabled the "Read and write permissions" under *Actions* in the GitHub repo settings.