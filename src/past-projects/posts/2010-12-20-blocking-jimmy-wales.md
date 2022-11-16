---
permalink: /blog/2010/12/20/blocking-jimmy-wales/
title: "Blocking Jimmy Wales"
date: 2010-12-20
classes: wide
show_date: true
---
<p>Jimmy Wales has been driving me crazy. I've donated to Wikipedia before, and I've been on board with previous donation solicitation campaigns, but I'm really sick of looking at Jimmy Wales, his urgent appeal, and the bar-of-pity that scrolls through the $11.5M raised but, more importantly, the $4.5M left to go, <em>on every single Wikipedia page</em>. This year, I'm donating as soon as they take down that banner. In the meantime, I've figured out how to hide Jimmy Wales in my two most commonly-used browsers.</p>
<h3>Firefox</h3>
<p>Click on the <a href="http://adblockplus.org/en/">Adblock Plus</a> icon in the upper right of your browser, go to <em>Preferences</em>, choose <em>Add filter</em>, and paste in:<br />
<code>wikipedia.org##div[id="siteNotice"]</code></p>
<h3>Chrome</h3>
<p>In the URL bar, go to <code>chrome://extensions</code>. Go to the <a href="https://chrome.google.com/extensions/detail/gighmmpiobklfepjocnamgkkbiglidom">Adblock</a> options, then go to the <em>Blacklist</em> tab, and hit the <em>Edit</em> button next to "Manually edit your filters". Paste into the box:<br />
<code>*wikipedia.org/*##div[id="siteNotice"]</code></p>
<p>(Thanks to the <a href="https://adblockplus.org/forum/viewtopic.php?f=2&t=6347">Adblock Plus forums</a> for the Chrome fix.)</p>
