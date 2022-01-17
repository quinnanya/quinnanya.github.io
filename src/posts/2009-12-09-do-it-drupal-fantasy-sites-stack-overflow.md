---
permalink: /blog/2009/12/09/do-it-drupal-fantasy-sites-stack-overflow/
title: "Do It With Drupal: Fantasy Sites- Stack Overflow"
date: 2009-12-08
classes: wide
show_date: true
---
<p><strong>About Stack Overflow</strong></p>
<ul>
<li>Zero barriers to entry</li>
<li>Reward good content by putting the best answers first</li>
<li>Give people karma</li>
<li>Destroy Experts' Exchange and answers behind a paywall</li>
<li>Incredibly active, has sister sites superuser, serverfault - people collaboratively build great answers to pressing questions</li>
<li>Spawning clones - can license software behind Stack Overflow</li>
<li>"I could do that" tinyurl.com/bitquabit-so, tinyurl.com/mythical-weekend - this ignores how much "soft work" went into it, how the community would work, etc.</li>
<li>24 hours of actual site-building behind this</li>
</ul>
<p><strong>Behind the site</strong></p>
<ul>
<li>You've got questions, people have answers, people can vote up/down, people can favorite, community moderation, collaborative editing - every question/answer can turn into a wiki page so people can edit/improve/tweak/correct content</li>
<li>Lots of views of content - tagging, rich user profiles, badges, "karma crap" to get people hooked on contributing</li>
<li>Mapping out architecture of site and how things are presented:
<ul>
<li>Current active list of questions - shows you votes, answers, how many views, tags</li>
<li>Can sort by "karma bounty" (give up 100 points of my karma to person with best answer)</li>
<li>Can sort by hot questions, current week, current month</li>
<li>Newest, featured, highest vote-earning</li>
<li>Tag cloud view of entire site</li>
<li>View of all users and activity level</li>
<li>Badges: all the different awards people have earned</li>
<li>View of unanswered questions</li>
</ul>
</li>
<li>"Ask a question" form</li>
<li>Moderation tools - editing and flagging, and post an answer right below the question</li>
<li>A lot of rich functionality, but totally dedicated to its core goal of Q&A</li>
</ul>
<p><strong>Drupal version</strong></p>
<ul>
<li><a href="http://www.array-shift.com" title="www.array-shift.com">www.array-shift.com</a></li>
<li>Can flag taxonomy tags that are interesting, and just see related questions</li>
<li>Node add form: done some work to streamline</li>
<li>BU Editor plugin - not WYSIWYG, but a tag helper - it puts the tags there, provides buttons</li>
<li>Uses markdown, not HTML</li>
<li>Markdown module in Drupal just provides an input filter</li>
<li>BU Editor plugin, Markdown manager, Markdown = rough analog to Stack Overflow</li>
<li>New module "Active Tags" - lets you accumulate tags as little flagged items rather than having them be in a list; just click a little X and it goes away - pure client-side stuff, nicer way of presenting the tag lists</li>
<li>Turned it on, added some extra CSS to put nice boxes around it, that's it</li>
<li>"Wikify" module lets you invert normal node access - like "Private" (checkbox for 'only people in specific codes can see this'), "Wikify" has the same thing, but the checkbox is for editing</li>
<li>"Flag" module used for star, "user points" module awards karma points when something is starred</li>
<li>(array-shift.com has major CSS problems in Safari)</li>
<li>100 lines of code that intercept Drupal events and ward karma; could use "rules" module but it was easier to just do what I needed for this exercise</li>
<li>"user points" automatically assigns roles when people pass karma thresholds</li>
<li>"flag" is a "flag" module ... flag that lets you set up arbitrary toggle-able flags for things, even supports "when more than 10 people flag something, do X"</li>
<li>Flagging something as offensive takes karma away (that's why there's a confirmation page to avoid mistakes), 10 offensive flags unpublish questions</li>
<li>Module called "flag term" - taxonomy terms, that's how you track topics you care about</li>
<li>Pure theming differentiates word "flag" and image of a star</li>
<li>List of answers uses "node comments" module - stands in for built-in comments, has a content type "comment"</li>
<li>Can have a view that shows the comments, where the arrangement is based on the rating</li>
<li>Comments on comments wasn't implemented (Stack Overflow has in-line meta-discussion, we didn't have time to do this)</li>
<li>Node Comment lets you use normal Drupal comments on things too</li>
<li>User badges module exists for Drupal, but doesn't have enough API support to configure without a lot of work (Anyone want to rewrite User Badges from scratch?)</li>
<li>Tabs for "newest", "hot", "etc" - each of these is a display on one view, set up with tabs</li>
<li>Tags view is a view of taxonomy tags - sort by popularity/name</li>
<li>Users - uses Gravatar module to pull in global avatar; set up user pictures like normal for Drupal, but Gravatar sits in the middle; generates unique geometric icons if you don't specify your own picture</li>
<li>"Type to find users" - exposed filter</li>
<li>Node Form Settings module - lets you do things like hide the revisions field, hide name of the title - exercise control over chunks of the node form</li>
<li>Similar By Terms module used for "similar questions" - other questions tagged with the same tags</li>
</ul>
<p><strong>Stepping back for a moment...</strong></p>
<ul>
<li>This thing has Q&A, voting (vote up/down module), karma (user points module), moderation (simple tools for flagging), ability to track interesting taxonomy terms (flag module), community editing (wikify - people with permissions can say "this is an article everyone should update to consolidate discussion"), a bunch of views that slice and dice content</li>
<li>Drupal didn't need a lot to do that basic functionality</li>
<li>What it doesn't have: meta-comments (this could be done, just didn't have time), in-line editing and AJAXy goodness (when you hit "edit", you go to the Drupal edit page; in Stack Overflow the body turns editable), karma bounties (could be written), user badges/awards (user badges module is pretty rough, doesn't work so well beyond use case), user profiles are unthemed (Stack Overflow can pull in OpenID profiles, what you've voted on, chart of karma history, etc - there's tools for each of that; user points history module that will generate chart; views attach module - stack views onto user profile)</li>
<li>Lots of polish isn't there</li>
<li>Queued messages - if you're not on the site when you've earned a new badge, it'll prepare a message for you when you come back (maybe Activity module?)</li>
<li>TOTALLY missing: performance tuning, no community around it (Stack Overflow has a great community - that's just as much work, and you can't install it)</li>
<li>Doesn't have a theme that can be distributed. Ever.</li>
</ul>
<p><strong>Under the hood</strong></p>
<ul>
<li>20 contrib modules, 2 custom modules (one is just exported flags/views), 1 theme, lots of config work</li>
<li>6 views with sub-tabs</li>
<li>5 flags (just set up in flag modules user interface: favorite, wikify, offensive, interesting/ignored for taxonomy terms)</li>
<li>3 behaviors: posting/editing, evaluating, filtering, suite of modules - vote up/down, voting API, user points; active tags, BU editor, markdown, markdown editor, node form settings</li>
<li>Did not theme node form - CSS + those modules</li>
<li>pathauto, token - clean URLS</li>
<li>CCK isn't even installed</li>
<li>2 custom modules: export (held exported versions of those views and flags), tweaks (intercepting voting API/posting hooks to give karma)- could've used Rules module to do this</li>
<li>Theme has page templates</li>
<li>Views have unformatted view, row-style template (has title, number of votes, times node has been viewed, listing of tags) - give me an array, I'll write markup</li>
<li>Theming views was easy</li>
<li>Custom node templates for question and answer nodes to position things correctly</li>
<li>Flag module templates used to override things and get the little star</li>
<li>Pre-process hooks to pull in user karma points, but no crazy theming hacks</li>
<li>30 lines of PHP in a template file</li>
<li>No overridden theme functions (user name, breadcrumbs, none of that)</li>
<li>Extra credit: just learned about a module called "inline registration" - if user is anonymous, can enter desired username and e-mail at the top of the node form; when they submit, it'll create user account, node, and assign node to user account in one step</li>
<li>Live preview of node editing can be done with "Live" module (used at groups.drupal.org)</li>
<li>blittr vs arrayshift
<ul>
<li>Analysis and evaluation of what the sites do, and what modules there are - spent more time on Array Shift doing that evaluation, bigger site, more ways of looking at that data than what Twitter provides</li>
<li>10 hours on that stuff</li>
<li>Configuring the site - about 4 hours of going through and clicking on stuff in Twitter site, 3 hours for Array Shift</li>
<li>After analyzing what Stack Overflow looks like, how it works - implementing it in Drupal with user points, flags, views was pretty straightforward</li>
<li>Building the views took less time than doing it for the Twitter module - very clean mapping between the tabs and what they connect to</li>
<li>UX mapped itself well to building some views</li>
<li>Time for the more complex parts (custom code) kept going up for Twitter clone (7-ish hours) - kept going down for Stack Overflow (2 hours)</li>
<li>Theming - tricky any way you look at it; 9-ish hours for Twitter, 13-ish for Stack Overflow</li>
<li>Translating the info Drupal provides into the right markup for the theme</li>
<li>This time is based on starting from a design in HTML + CSS (coming up with an idea would take a lot longer)</li>
</ul>
</li>
<li>"Magic" category - took 11+ hours, creating the whole install profile</li>
<li>Install profiles - use Aegir to install a copy of this on a sub-domain</li>
<li>Writing the install profile took as long as writing the theme - now can spawn infinite copies of this website</li>
<li>drupal.org/project/arrayshift - last pieces will be in place soon</li>
<li>BUT there will not be a pretty theme with it</li>
</ul>
