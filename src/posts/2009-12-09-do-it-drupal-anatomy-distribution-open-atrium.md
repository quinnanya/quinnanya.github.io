---
permalink: /blog/2009/12/09/do-it-drupal-anatomy-distribution-open-atrium/
title: "Do It With Drupal: Anatomy of a Distribution: Open Atrium"
date: 2009-12-08
classes: wide
show_date: true
---
<ul>
<li>Open Atrium is a "team portal in a box" (AKA Basecamp alternative)</li>
<li>Can be behind a firewall, is free, openatrium.com</li>
<li>Putting people in different groups</li>
<li>Comes with six features:</li>
<ul>
<li>Blog: turned on/off on a group-by-group basis</li>
<li>Wiki</li>
<li>Calendar- iCal feeds too</li>
<li>Shoutbox - like private Twitter</li>
<li>Case Tracker - ticketing system</li>
<li>Group dashboard</li>
</ul>
</li>
<li>75,000 downloads since July 17</li>
<li>translate.openatrium.com - 31+ levels to various extents; get updates that don't overwrite your custom updates</li>
</ul>
<p><strong>What are people doing with it</strong></p>
<ul>
<li>Basic project management tool set</li>
<li>Sprite-based theme (5.5 kb, 13.7 kb)</li>
<li>Tailoring the system to your own needs</li>
<li>Drupal Core, modules, plus Features module power Open Atrium</li>
<li>People can customize their own dashboard</li>
<li>Cross-posting to different groups disabled; also, Organic Group configuration much more simple (clear distinction between public and private)</li>
</ul>
<p><strong>Migrating into Open Atrium</strong></p>
<ul>
<li>It's just a Drupal site, so in theory you can turn on the Open Atrium modules around your existing site (but this isn't suggested) - use some other way (Feeds module?) to aggregate existing content and put it into the new framework</li>
<li>Migration is a solvable problem, but probably not in a generic way useful for the core project</li>
</ul>
<p><strong>Extended features</strong></p>
<ul>
<li>Project status - time tracking and approval flow for a web shop</li>
<li>World Bank did a highly customzied version; integration with Lotus Notes - their own internet behind a firewall; faceted search across their pre-existing staff directory; extended events system to help with scheduling</li>
<li>Some custom coding went into the World Bank site, but a lot of what goes into it comes from configuring existing modules</li>
</ul>
<p><strong>How we use it</strong></p>
<ul>
<li>Over 50% tickets</li>
<li>Use blog instead of e-mail for the most part</li>
</ul>
<p><strong>Atrium's rules</strong></p>
<ul>
<li>Works out of the box</li>
<li>At least as simple as running straight from drupal.org</li>
<li>Once you install it, it's clear what the next step is - unlike Drupal, where you install it and wonder "what now?"</li>
<li>Works with Aegir</li>
<li>Doesn't hack core or contrib (except occasionally- there's a hack to Views that makes it translatable)</li>
<li>Doesn't do everything - does a few things that are widely useful for intranets, and you can extend it</li>
</ul>
<p><strong>Things we'll never do</strong></p>
<ul>
<li>Add a WYSIWYG; BUT, you can do that</li>
<li>Add CVS integration (but see features.blackstormsstudios.com)</li>
<li>Add Alfressco integration - but someone else has tried this</li>
<li>Investing some time in Google Docs integration</li>
<li>Won't ever clone Basecamp - but someone wrote a theme that looks a lot like it (drupal.org/project/atrium_simple)</li>
<li>Add Sharepoint integration to base package</li>
</ul>
<p><strong>Things we will do</strong></p>
<ul>
<li>Clearer branding- Drupalisms & Atriumisms beware!</li>
<li>Drag and drop dashboards (vimeo.com/7643255)</li>
<li>Better admin experience (drupal.org/project/admin)</li>
<li>Pluggable search</li>
<li>Improved l10n support- Drupal only supports one language at a time, we want to fix this</li>
<li>Rewriting core functionality - upgrading to Context and Spaces, when we say "beta", we mean it</li>
<li>Rework the "user space"</li>
<li>A calendar with a user story</li>
<li>Rewrite Case Tracker - this powers the to-do system, people want to customize the states cases can be in, kinds of cases, etc. (github.com/miccolis/casetracker)</li>
<li>This is going to be painful, we'll provide upgrade paths</li>
<li>Move to drush make (drupal.org/project/drush_make)</li>
<li>New on drupal.org: install profiles: lists of things that, all together, make a site</li>
</ul>
