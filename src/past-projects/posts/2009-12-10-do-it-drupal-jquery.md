---
permalink: /blog/2009/12/10/do-it-drupal-jquery/
title: "Do It With Drupal: jQuery"
date: 2009-12-09
classes: wide
show_date: true
---
<p>See slides <a href="http://www.doitwithdrupal.com/2009/sessions/jquery-drupal">here</a>.</p>
<ul>
<li>What's jQuery: javascript library, circumvents browser incompatibility</li>
<li>Known for things like opacity, AJAX requests that work across all browsers</li>
<li>Visual effects and "wow factor"</li>
<li>Reducing javascript code: getting elements by class name - 15 lines of javascript, 1-line snippet of jQuery $(".classname");</li>
</ul>
<p><strong>Selectors</strong></p>
<li>jQuery selectors: CSS selectors by class (.), by ID (#), child elements/multiple elements ($('.sidebar a, .content a');), CSS3 select by attribute: $('input[type=text]'); also regular expressions on properties - see docs.jquery.com/Selectors</li>
<p><strong>Effects</strong></p>
<ul>
<li>$('h1').hide(); - hides all h1's</li>
<li>can also do .hide('slow'); or .hide(3000) - milliseconds</li>
<li>.fadeOut('slow'), .slideUp('slow') - more at docs.jquery.com/Effects</li>
</ul>
<p><strong>Events</strong></p>
<ul>
<li>Trigger an action in response to user (click, change, toggle, hover)</li>
<li>Toggle: two function names, the first time you click it does A, and the second time you click it does B</li>
<li>You can do it inline (not suggested)</li>
<li><em>return false</em> is useful if you want the hand icon to show up to click, but not take the person anywhere (ie AJAX toggle; degrades gracefully if javascript is turned off)</li>
<li>Declared: gives a name to the function</li>
<li>Take all your PHP knowledge, apply it to Javascript really easily - but there's lots of things that Javascript can do that PHP can't</li>
</ul>
<p><strong>Libraries and modules</strong></p>
<ul>
<li>Lots and lots of "wrapper" modules - so many nice jQuery plugins (equivalent of Drupal modules); make a module for every jQuery plugin (jCarousel, Lightbox, jqModal, Juitter, hoverIntent etc.) - there's a whole module for just one function</li>
<li>People want to have dependencies - jCarouselViews module relies on jCarousel, even though there's only one function there</li>
<li>You can end up with multiple copies of jQuery plugins all over the place</li>
<li>"We need an API to handle all these javascript libraries!" - so now we have wrapper-wrapper modules! (Plugins, JQP, jQ, jQuery UI the module)</li>
<li>Competing ways of adding multiple javascript libraries - different modules require different things</li>
<li>jQuery UI isn't as bad as the other ones - so many modules need it</li>
<li>In short, some modules have great implementation (jCarouselViews); a lot more modules do things in a totally unnecessary way - not worth having a module if it only does one thing and you only need it in one place</li>
</ul>
<p><strong>Adding JS in a theme</strong></p>
<ul>
<li>"It's not hacking, it's theming!"</li>
<li>Open up info file, add some scripts (scripts[] = utilities.js)</li>
<li>Name is always relative to the root of your theme</li>
<li>After you do that, clear Drupal caches</li>
</ul>
<p><strong>drupal_add_js()</strong></p>
<ul>
<li>What if you only need it in certain places?</li>
<li>Put this function in template.php; same thing that the .info file is doing for you</li>
<li>Don't just put it in page.tpl.php</li>
<li>Can aggregate and compress your CSS files - a lot less work for the web server</li>
<li>Javascript can be all aggregated together</li>
<li>Hosting your javascript elsewhere - well, it's only 15k, it'll slow down performance, it'll update to the latest version (but this might break your site</li>
<li>If you add any javascript using drupal_add_js(), it'll add jquery and drupal.js - provides some extra functionality, utility functions, global variables</li>
<li>drupal_add_js($data, $type); - $data is path to js, $type = 'module' (default) or 'theme'; theme stuff always goes last because it's assumed to be more important</li>
<li>Pass PHP variables to JavaScript: drupal_add_js($data, 'setting'), where $data is an array of strings</li>
<li>$(document).ready() - execute js when the page has finished loading</li>
<li>Prevents content hang-ups, degrade gracefully; replaces body(onload)</li>
</ul>
<p><strong>References</strong></p>
<ul>
<li>visualjquery.com - whole library referenced on a single page</li>
<li>docs.jquery.com - official documentation</li>
<li>Drupal 6 uses 1.2.6 - there was an API change, and Drupal doesn't break APIs between major versions</li>
</ul>
<p><strong>jGarland</strong></p>
<ul>
<li>Can create a base theme in your info file, uses the stuff from the base module when you haven't written something custom</li>
<li>Adding a bunch of javascript (jquery.countdown.js, cufon-yui.js - the new, hot thing in the world of fonts)</li>
<li><a href="http://cufon.shoqolate.com/generate/">Cufon</a> is awesome</li>
<li>Behaviors works on AJAX requests as well as page load</li>
</ul>
