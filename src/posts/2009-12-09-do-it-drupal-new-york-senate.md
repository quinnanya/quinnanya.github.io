---
permalink: /blog/2009/12/09/do-it-drupal-new-york-senate/
title: "Do It With Drupal: New York Senate"
date: 2009-12-08
classes: wide
show_date: true
---
<p><strong>Background</strong></p>
<ul>
<li>Transforming an anachronistic organization with Drupal</li>
<li>In control of Republican party for 44 years</li>
<li>Never had a CIO before January 2009 - focused on internal enterprise IT before</li>
<li>People were cutting out and pasting articles from papers, scanning them, printing them, and distributing these reams of paper to offices every day - 1.5 million/year</li>
<li>CRM (constituent relationship management) - command-line type system</li>
<li>Intranet 1.0 - publishing info, no collaboration</li>
<li>Desktop PCs</li>
<li>Email 1.0 - intranet only, can't work from home</li>
<li>Managing our own data center - not a core competency, but we do a reasonable job</li>
</ul>
<p><strong>NYSenate CIO Mission</strong></p>
<ul>
<li>Transparency</li>
<li>Efficiency - more effective, less cost</li>
<li>Participation - give people a participatory role in government</li>
<li>Modeling 'best tech practices' for legislative bodies</li>
<li>Organize/share data internally/externally, improve internal/external communications</li>
</ul>
<p><strong>Site dissection</strong></p>
<ul>
<li>No staff with web development experience in January; started out w/ consulting firm</li>
<li>Built by April, launched in May</li>
<li>Had to train hundreds of staff people to use it as content creators</li>
<li>RSS feeds, Twitter, Facebook</li>
<li>Popular/e-mailed/commented content, events, press releases/blogs/news clips</li>
<li>Almost 100 sites in one: 62 mini-sites for senators, 40-ish mini-sites for committees, issues/initiatives, legislation, open senate, about, photos & videos, newsroom</li>
<li>Previously, used proprietary CMS and external vendor - one party got better sites than the other, even with tax payer dollars covering everything</li>
<li>Senator directory - shows RSS/Twitter/Facebook (when available - been actively promoting this)</li>
<li>Senator pages: they stand on their own, all the info about the senator, he can post news releases/blog, news clips related to him, videos, RSS/Twitter/Facebook</li>
<li>Senators can create stories with visuals for their pages</li>
<li>Committees - each has its own stand-alone mini-site, with chairs, sign-up for newsletters, updates, video archive of meetings (will be live streams in January)</li>
<li>Submitting testimony on-line available in January</li>
<li>Issues & initiatives - marriage equality (aggregated all content from site), PSA (information about the census)</li>
<li>OpenLegislation: information should be freely available, searchable, sortable, permalinks</li>
<li>Open Senate initiative: OpenData (administrative info, how much who gets paid, what gets spent on what, etc.)</li>
<li>Data available in different formats - PDF, CSV, TXT, XLS, DOC</li>
<li>Contact forms for senators individually and for the site in general (press inquiry, webmaster)</li>
<li>Photos and videos - recording and, soon, livestreaming everything</li>
<li>Also available on YouTube; audio available on iTunes</li>
<li>Working on adding automated transcription</li>
<li>Blogger who works in the "newsroom" to create web-friendly content/press releases for the site</li>
</ul>
<p><strong>Modules</strong></p>
<ul>
<li>131 modules + core required: activism, petition, administration, gmap/location modules, content templates, interrelated date & calendar, imageAPI/imagecache, and more!</li>
<li>Views: home page image carousel, event calendars, video/photo galleries, press releases, petitions, senators' pages</li>
<li>CCK: constituent stories, senate districts, events, expenditure reports, photos, polls, press releases, video, senator, committee)</li>
<li>19 custom modules - custom views/blocks for the most part, permissioning system for Office and Web Editors</li>
<li>Upcoming: distributed authentication, ideas crowdsourcing, unified commenting</li>
<li>Working on implementing SOLR search - Acquia is now hosting our site as of today, we've so far been using native Drupal search</li>
<li>Embedded Media Field for video</li>
</ul>
<p><strong>Integration with other applications, social web</strong></p>
<ul>
<li>15,000 viewers on livestream.com for marriage equality debate</li>
<li>Social bookmarking for all content on the site</li>
<li>Some senators are using Facebook well and having open discussions with their constituents</li>
<li>nysenate.gov was re-branding, now we use "nysenate" for everything</li>
<li>API so developers can take any of our open data and do things with it</li>
<li>Haven't made a final call about whether to keep using Discuss (external product) for commenting, or use Drupal's native commenting (there's a lot of configuring to do to get the seamless experience we want)</li>
<li>Sign up for updates about anything on the website; integrating w/ Bronto for e-mail blasts</li>
<li>Voting content up and down - needs to be elegant and incredibly easy, using a 3rd party solution right now and themed it like the main site</li>
</ul>
<p><strong>Everything else</strong></p>
<ul>
<li>New hosting - don't have the resources to host something like this; now moved to Acquia</li>
<li>New domain name - wanted .gov to force the issue of what you can/can't say (previously, it'd been used to say partisan, sometimes nasty things)</li>
<li>New policies (content creation, copyright, privacy, TOS, release of data, permissions)</li>
<li>New processes (requirements gathering, quality assurance - people who had previously done phone service or legacy systems, content creation workflows)</li>
<li>New talent (previously didn't have any web developers in-house, consulting contracts, staff)</li>
<li>New tools (videoconferencing, IRC Chat, Central Desktop- lightweight project management, Redmine- bug/feature tracking, ticketing tasks)</li>
<li>New training materials</li>
<li>New communications/PR</li>
</ul>
<p><strong>Guidelines & miscellanea</strong></p>
<ul>
<li>No political or campaign information - conveniently, with .gov we're not allowed to</li>
<li>Copyright policy - states can assert copyright if they want, but we went for CC BY-NC-ND for most things</li>
<li>Privacy policy - mirrored White House</li>
<li>Terms of participation - also mirrored White House</li>
<li>Post all code to Github</li>
<li>Use Daylife.com for replacement to paper clipping system</li>
<li>Hope that other legislative bodies will be able to reuse code</li>
<li>Had an Unconference (CapitolCamp) to hear what people think - some people were excited to pitch in, do things with API</li>
</ul>
<p><strong>Questions & feedback</strong></p>
<ul>
<li>Node Bulk Operations could be helpful</li>
<li>Had to take screenshots for a while to allow very non-tech-savvy senior people to see private things without the risk of them doing anything wrong with it (finding a better way for this)</li>
<li>Feedback from senators has been all over the map - actually the inverse of expected, where more Republicans were early adopters even when they weren't saying nice things about it in public</li>
<li>More Republicans were effective using Twitter and Facebook, more internally organized to identify opportunities and make the most of them collectively</li>
<li>Senators are learning that by making content easy for others to see and share, related content gets more views too</li>
<li>Google Analytics stats available for all senators available; special reports around particular events</li>
<li>1.5 mil page views a month, on a big day, 50,000 unique views (marriage equality)</li>
<li>40-50 comments on a hot bill</li>
<li>Not massive, shouldn't cause major performance headaches, but we had to do this in such a rush that we have a lot of refactoring to do to make sure it holds up okay under stress</li>
<li>If there's something broken, blogs publish screenshots - we have to be very vigilant</li>
<li>Want to make custom modules available; just haven't had the bandwidth, just have a code drop on github for now</li>
<li>Building relationships with CIOs of various state agencies - some of them have a lot more developers</li>
<li>PDFs have been the traditional publication format, including scanned documents; we've maintained that format for most data to accommodate the "I want to download and print" crowd - only last week got wifi in capitol building</li>
<li>For born-digital content, making it available as feeds in ways that will make it easier for people to use</li>
<li>More and more federal work being done in Drupal (whitehouse.gov); a couple state entities have put up rudimentary sites (liquor authority for state of New York)</li>
<li>Contacted mostly about policy issues for other states - comment moderating, copyright</li>
<li>Big national open data initiatives - community of practice around government transparency</li>
<li>Haven't sat down with whitehouse.gov Drupal developers to talk about roadmaps yet - we feel overwhelmedly busy right now</li>
<li>Third party to compare roadmaps, sort out implications for working together? It's a major undertaking</li>
<li>Sunlight foundation - encourages getting data out in mashable form; they give us feedback</li>
<li>Some senators have gamed the system by getting people to e-mail things they post so it gets on the "most e-mailed" list - this upsets other senators</li>
</ul>
<p>@ahoppin<br />
@NYSenateCIO<br />
NYSenate.gov/department/cio<br />
Hoppin - at - Senate.State.NY.US</p>
