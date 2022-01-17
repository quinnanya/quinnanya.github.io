---
permalink: /blog/2011/02/24/frogr-flickr-uploader-ubuntu-ive-been-waiting/
title: "Frogr: the Flickr uploader for Ubuntu I've been waiting for"
date: 2011-02-24
classes: wide
show_date: true
---
<p>Last summer, I tried to <a href="/blog/2010/08/31/uploading-to-flickr-on-ubuntu-the-options-arent-amazing">survey the landscape</a> of software available for uploading photos to Flickr on Ubuntu. My conclusion at that time was that there were no good options that met my needs-- which I felt were fairly modest:</p>
<ol>
<li>Change the title</li>
<li>Freely add tags</li>
<li>Add a description</li>
<li>Add the image to sets</li>
</ol>
<p><a href="http://juploadr.org/">jUploadr</a> met those requirements, but was downright painful to use. <a href="http://projects.gnome.org/postr/">Postr</a> seemed promising, but I was never able to get it to work. Since then, I've stuck with the official Windows <a href="http://www.flickr.com/tools/">Flickr Uploadr</a>, on Karmic, using Wine v. 1.1.31, since combinations of more recent versions of Wine and Ubuntu had failed to work*.</p>
<h3>Enter Frogr</h3>
<p><a href="http://www.flickr.com/photos/quinnanya/5474318543/" title="Frogr by quinn.anya, on Flickr"><img src="http://farm6.static.flickr.com/5056/5474318543_b3896d7c91_m.jpg" width="240" height="171" alt="Frogr" class="alignright" /></a>According to the <a href="http://live.gnome.org/Frogr">Frogr page</a>, versions 0.1 and 0.2 were released in mid-2009, and there had been no further activity as of last summer, so  I'm not surprised I overlooked it. Last December, version 0.3 brought a lot of bug fixes, but it was the release of 0.4 on February 5th that turned Frogr into hands-down the best Flickr uploader option available for Ubuntu.</p>
<h3>Everything I want, and more</h3>
<p>Frogr has all the functionality and ease-of-use of the official Flickr Uploadr, and then some. You can drag-and-drop photos into Frogr (something I've missed, because I've never gotten it to work for the Flickr Uploadr on Wine.) You can add photos to sets (using an interface I think is better than the official Uploadr), and create new sets. You can add photos to groups-- which isn't an option in the Uploadr. You can easily set privacy levels and content types for photos individually, and by default using Preferences settings. You can add titles, tags, and descriptions to photos as a batch. You can cancel an upload without the losing the metadata you've added to your un-uploaded photos. You can have multiple accounts. Another feature that the Flickr Uploadr doesn't have is tag auto-completion-- which can be a big help if you're trying to be consistent with your metadata.</p>
<h3>Nitpicky stuff</h3>
<p><a href="http://www.flickr.com/photos/quinnanya/5474070664/" title="Frogr autocomplete by quinn.anya, on Flickr"><img src="http://farm6.static.flickr.com/5139/5474070664_d969ebedaf_m.jpg" width="240" height="168" alt="Frogr autocomplete" class="alignright" /></a>There's very little I can say against Frogr-- it's a solid piece of software that does an excellent job meeting my needs. All things being equal, I'd probably prefer to have the metadata panel appear on the right whenever a photo or photos are selected (like the Flickr Uploadr), instead of having to double-click, but in practice double-clicking is much less of a nuisance than I feared it would be.</p>
<p>The interface that lists the accounts you've authorized shows your name, rather than the username. Both of my accounts have my name on it, so other than trial-and-error (or remembering which one I authorized first) there's no way to tell which account I'm sending photos to until they show up there.</p>
<p>I appreciate the thought that went into the tag auto-complete, but I wish there were a way to turn it off. With over 50,000 heavily-tagged photos, I've got thousands upon thousands of tags, and they take a long time to load (there's a <em>loading tags</em> step in Frogr, though thankfully only once each time you launch it) and the auto-complete is more annoying than helpful. On my less-powerful netbook, the autocomplete makes Frogr stop responding for a few seconds, though it does recover. Fortunately, I  can out-type it most of the time, so I'm done tagging by the time the auto-complete pops up.</p>
<p><em>(2/25/10 update: <a href="http://blogs.igalia.com/mario/">Mario Sanchez</a>, the awesome developer behind Frogr, has already made a couple changes so that the list of authorized accounts also includes the account name, and there's a setting in the preferences to turn auto-complete off. I've tried an unreleased version and it's great! Look for those changes in the next release.)</em></p>
<h3>Go download Frogr now</h3>
<p>If you use Flickr and Ubuntu, Frogr is a huge leap forward from whatever you've been using to upload your photos, providing one of the best feature sets available, and hands-down the best user experience. Go <a href="http://live.gnome.org/Frogr">download Frogr</a>-- it's fantastic.</p>
<p><em>* The situation has recently improved for the official Flickr Uploadr on wine-- I've successfully gotten it running on Maverick using Wine 1.3.13. At this point, though, I think Frogr is a much more compelling option.</em></p>
