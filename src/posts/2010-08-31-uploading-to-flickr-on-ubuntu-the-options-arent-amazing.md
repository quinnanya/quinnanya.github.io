---
permalink: /blog/2010/08/31/uploading-to-flickr-on-ubuntu-the-options-arent-amazing/
title: "Uploading to Flickr on Ubuntu: the options aren’t amazing"
date: 2010-09-01
classes: wide
show_date: true
---
<p><strong>2/24/11 UPDATE: The recent release of <a href="http://live.gnome.org/Frogr">Frogr</a> 0.4 makes this post obsolete. It's the <a href="/blog/2011/02/24/frogr-flickr-uploader-ubuntu-ive-been-waiting">Flickr uploader for Ubuntu I've been waiting for</a>. It does everything I was looking for, and more-- I highly encourage anyone looking for a Flickr solution on Ubuntu to go download it.</strong></p>
<p>In April, I switched to Ubuntu for my main (non-work) machine. One of the major hurdles in doing so was figuring out what to do about Flickr. I import, edit, and upload 200-ish photos a week, and I need a piece of software that lets me:</p>
<ol>
<li>Change the title</li>
<li>Freely add tags</li>
<li>Add a description</li>
<li>Add the image to sets</li>
</ol>
<p>Long story short, none of the Linux-native software I was able to get working (on 64-bit Jaunty or Karmic, or 32-bit Lucid) made the cut. Fortunately, the official Windows <a href="http://www.flickr.com/tools/">Flickr Uploadr</a> (v. 3.2.1) installed flawlessly on Wine (v. 1.1.31)... but only on Jaunty and Karmic. On Lucid, it installs fine but throws an XULRunner error, "Couldn't load XPCom", that I haven't been able to get around.</p>
<p>Largely because of this issue, I'm hesitant to upgrade my Karmic machine to Lucid. Solid Flickr uploading software is a must, and in Karmic, the Windows Uploadr works like a dream. On my work Mac, canceling an upload in Flickr Uploadr (intentionally, or through losing the wireless connection) not-infrequently meant losing all the work I'd done on the remaining photos, but the Windows version on Wine consistently saves data, even when you shut it down in the middle of an upload, or lose connectivity.</p>
<p>If you're running Lucid, and the official Flickr Uploadr isn't an option, here's a comparison and description of the other software I tried. My recommendation on Lucid would have to be <a href="http://juploadr.org/">jUploadr</a>-- it's a bit annoying to use, it has a number of shortcomings (see below), but the features are there and it won't crash your machine.</p>
<table width="100%">
<tr>
<td></td>
<td><strong>Titles<strong></strong></strong></td>
<td><strong>Tags</strong></td>
<td><strong>Description</strong></td>
<td><strong>Sets</strong></td>
<td><strong>Permissions<br />
</strong></td>
</tr>
<tr>
<td><strong>F-Spot</strong></td>
<td bgcolor="red">No</td>
<td bgcolor="yellow">Annoyingly</td>
<td bgcolor="green"><font color="white">Yes*</font></td>
<td bgcolor="red">No</td>
<td bgcolor="green"><font color="white">Yes</font></td>
</tr>
<tr>
<td><strong>Shotwell</strong></td>
<td bgcolor="red">No</td>
<td bgcolor="green"><font color="white">Yes</font></td>
<td bgcolor="red">No</td>
<td bgcolor="red">No</td>
<td bgcolor="green"><font color="white">Yes</font></td>
</tr>
<tr>
<td><strong>jUploadr</strong></td>
<td bgcolor="green"><font color="white">Yes</font></td>
<td bgcolor="green"><font color="white">Yes</font></td>
<td bgcolor="green"><font color="white">Yes</font></td>
<td bgcolor="green"><font color="white">Yes</font></td>
<td bgcolor="green"><font color="white">Yes</font></td>
</tr>
<tr>
<td><strong>Postr</strong></td>
<td bgcolor="yellow">Yes</td>
<td bgcolor="yellow">Yes</td>
<td bgcolor="yellow">Yes</td>
<td bgcolor="yellow">Yes</td>
<td bgcolor="yellow">Yes</td>
</tr>
</table>
<h3>F-Spot</h3>
<p>I initially used F-Spot for importing images and automatically organizing them into date-based folders, like I used to do in Bridge CS4. Annoyingly, even though Ubuntu offers to import the photos using F-Spot when you attach your card reader, it'll only do the date-based organization if you start the import from within F-Spot itself. I've switched to Shotwell (and so will Ubuntu, in 10.10) and been much happier with it.</p>
<p>F-Spot really falls short on the Flickr uploading front (Photo > Export to > Flickr). A bit of Googling appears to have confirmed my suspicion that you can't rename photos in F-Spot-- not to mention giving the photos new titles specifically for the upload. The tags you assign in F-Spot carry over when you upload the image, but you have to pre-populate the F-Spot database with the tags. I've got far too many tags for that to be plausible; additionally, the tags are only saved within F-Spot, so if you switch software, you lose your tags. You can add a description for Flickr in the "Comment" field (at the bottom in the "Edit Image" view), and you can fiddle with the privacy settings, but there's no way to identify the content type or add the photo to a set.</p>
<h3>Shotwell</h3>
<p>As a photo organizer, Shotwell is a step up from F-Spot. Being able to assign comma-separated tags is a major improvement over pre-populating a database. Other than that, Shotwell suffers from all the same Flickr uploading shortcomings as F-Spot. No assigning titles (nor renaming the photo within Shotwell), descriptions, or sets; permissions are limited to visibility.</p>
<p>The worst part is, on my netbook running Lucid (10.04), Shotwell crashes as soon as I try to upload anything.</p>
<h3>jUploadr</h3>
<p>Of all the Linux-friendly software I've tried, <a href="http://juploadr.org/">jUploadr</a> has one of the best sets of features. It meets all my requirements, and then some (it has a nice option for adding geo data).</p>
<p>The UI, though, drives me crazy. It distorts the preview of the images. I hate having to right-click on an image to get the metadata options to show up-- and they do so in another window. And if it crashes, unlike the official Flickr Uploadr it doesn't try to save your data. Worse, if you drop a group of photos in there, it uploads them backwards-- the last one you put in is the first one that gets uploaded, which will mess up the chronology of your photostream if you don't plan ahead and carefully drop your photos in there, one-by-one, in reverse chronological order. No sorting options or re-arranging available. It also doesn't seem to always respect the metadata (available with some cameras) that indicates whether your photo was taken in portrait or landscape mode, so it won't show the photos rotated in the preview. If you try to fix them yourself with the jUploadr rotate button, the upload will get screwed up as Flickr rotates them one more time. So just tilt your head while you're adding tags.</p>
<h3>Postr (Flickr Uploader), 0.12.3-1ubuntu2/0.12.4-2</h3>
<p><a href="http://projects.gnome.org/postr/">Postr</a>, the GNOME Flickr uploadr, might just be the perfect solution... if I could get it to work. The integration with the GNOME desktop is convenient, it meets all my criteria, but on my laptop running Karmic (9.10), shortly after I add an image and before I can do anything with it, I get flooded with "User timeout caused connection failure" messages that at times completely freeze up my whole system. It looks like it's not the most common problem (Bugzilla <a href="https://bugzilla.gnome.org/show_bug.cgi?id=549963">still lists it as unconfirmed</a>), so perhaps others will have better luck.</p>
<p>I managed to get it to work, briefly, on Lucid. One beautiful afternoon I was able to upload 11 photos. The experience could've been better-- when you're doing a multi-photo batch, it does tell you what photo it's on, but not when you're uploading a single photo there's no way to tell if it's frozen or actually uploading.</p>
<p>Unfortunately, the next time I tried to use Postr, I was flooded with error messages-- different ones, about not being able to contact the host (no other programs were having connectivity issues), another message about a timeout. Often the error boxes would pop up without any text in them. More than once, it completely locked up my system and I had to do a hard reboot. Uninstalling, reinstalling, re-authenticating, nothing helped.</p>
