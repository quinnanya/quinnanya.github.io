---
permalink: /blog/2009/12/10/do-it-drupal-power-features/
title: "Do It With Drupal: The Power of Features"
date: 2009-12-09
classes: wide
show_date: true
---
<p>See also <a href="http://drupal.org/project/features">Features</a> on drupal.org</p>
<ul>
<li>Jeff Miccolis & Eric Gundersen - Development Seed, building a lot of products (things like Open Atrium)</li>
<li>Drupal is very configurable - but that's also a weakness: no distinction between what's configuration (views settings) and what's content</li>
<li>Workflow problem: when you build a site, you build in a dev environment, but client/boss wants to see what it looks like before it goes live
<ul>
<li>So, you stage it somewhere, then move it over</li>
<li>Development: where the action happens (possibly your laptop)</li>
<li>Staging: where it's reviewed (much closer to where it's going to live)</li>
<li>Production: where it's live. (developing on the live site is always a bad idea)</li>
</ul>
</li>
<li>Three people working on a project that needs to go live
<ul>
<li>Musician, developer, themer</li>
<li>Round 1 goes great - everyone works together and the site goes live</li>
<li>Round two is a PITA: new views build on dev, rebuild on staging, rebuild on dev, rebuild on staging, over and over, rebuild on prod</li>
<li>Extensive note taking, prone to human error, loads of repeated tasks</li>
</ul>
</li>
<li>The solution? Make a distinction between config and content - views and settings are heavily and clearly distinguished from the actual content - then write this configuration to code and get it out of the database</li>
<li>You can do version control with your config - this lets you track changes</li>
<li>Node types, CCK fields, menu, blocks, views - these are config</li>
<li>You can say "these components taken together define a feature" - something the site does</li>
<li>"Features" module - Feature = Drupal parts that do something specific (Views, ImageCache presets, content types, fields, etc.)</li>
<li>Features = Drupal module that allows for the capture of configuration into code</li>
<li>(Sorry about the name; the Feature module makes Feature modules which have things)</li>
<li>Feature modules have Core exportables: content types, permissions, input filters, menu items</li>
<li>Contrib support: contexts, views, ImageCache, Ctools (panels, feeds, etc.)</li>
<li>Features is a system to capture the various components that describe how your site behaves</li>
<li>Features should be used throughout the development process - you can take a live site and capture existing features, but it requires you to change your thinking about how users interact with the site</li>
<li>Concepting what's part of which feature, what's shared, etc. gives you stronger features</li>
</ul>
<p><strong>Making Features</strong></p>
<ul>
<li>Create a Feature: you can add components, cycle through various elements, clickthe ones you want in your module</li>
<li>Features come as a nice tarball - turn it on in your website, you get all the stuff that comes with it</li>
<li>But then people start changing the view - you can see the status in the Features module (has it been changed?)</li>
<li>If something has been changed, it'll show you what</li>
<li>"Recreate" button will give you another tarball, with the current state of things</li>
</ul>
<p><strong>Create, Update, Revert</strong></p>
<ul>
<li>Drush commands - features, features export, features update, features revert</li>
<li>Views changes are made only once, each change has a commit log, if you check it into SVN like you should</li>
<li>If you move your development to a real dev environment, and leave the staging site as a staging site (that you can show clients, etc without worrying it broke in the last five minutes) this is good</li>
</ul>
<p><strong>Distributing Features</strong></p>
<ul>
<li>Are your features appropriate for drupal.org?</li>
<li>Is the configuration an IP issue?</li>
<li>How can I get that nifty update status thing behind the firewall?</li>
<li>If you can't/don't want to send it to drupal.org, but want to manage it internally over time: Features server</li>
<li>code.developmentseed.org/featureserver</li>
<li>Create projects, make new releases, subscribe to updates, etc</li>
<li>For automatic packaging, try the Project module</li>
<li>Feature server is much simpler, lets you get off the ground fast</li>
<li>Based on implicit standards: update status xml, exportables, drush make</li>
</ul>
