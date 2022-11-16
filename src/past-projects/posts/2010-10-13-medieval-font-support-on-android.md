---
permalink: /blog/2010/10/13/medieval-font-support-on-android/
title: "Medieval font support on Android"
date: 2010-10-12
classes: wide
show_date: true
---
<p><a href="http://www.flickr.com/photos/quinnanya/3874764643/" title="Cyrillic post-it note by quinn.anya, on Flickr"><img src="http://farm3.static.flickr.com/2669/3874764643_44c97b3d52_m.jpg" width="160" height="240" alt="Cyrillic post-it note" class="alignright" /></a>Froyo 2.2 brought native Arabic, Hebrew and Thai support to Android, but what about <a href="http://en.wikipedia.org/wiki/Glagolitic_alphabet">Glagolitic</a>? What is a Slavic medievalist to do without the Old Church Slavonic combining characters, or any of the other wonderful characters introduced in Unicode 5.1? No longer content to look at rectangles, I set about installing a font that supported the Unicode characters I count on.</p>
<h3>What you need</h3>
<ul>
<li>A <strong>rooted</strong> Froyo phone. Not rooted? Check out <a href="http://www.unrevoked.com">Unrevoked</a> or <a href="http://wiki.cyanogenmod.com/index.php?title=Universal_Androot">Universal Androot</a>.</li>
<li>The <em>Terminal Emulator</em> app by Jack Palevich, available in the Market (NOT the one by ZTA Technologies)</li>
<li>A font that supports your favorite Unicode characters</li>
<li>A computer</li>
</ul>
<h3>The procedure</h3>
<ul>
<li>Connect your Android to the computer, and copy the font to the root of the SD card on your Android. Rename it <em>DroidSansFallback.ttf</em> (the capitalization is important)</li>
<li>Unmount and/or disconnect your Android from the computer</li>
<li>Launch Terminal Emulator</li>
<li>Type <em>su</em>. A "Superuser request" screen might come up; allow access. You'll know it works when the prompt in Terminal Emulator changes from <strong>$</strong> to <strong>#</strong></li>
<li>Type <em>mount</em>, and your screen will be filled with a lot of text. Look about 9 lines down for one that looks like <em>/dev/block/mtdblock[some number] /system yaffs2 ro,relatime 0 0</em>. On my Evo 4G, this line says <em>/dev/block/mtdblock4 /system</em>, but different phones have a different number after <em>mtdblock</em>. Make a note of yours.</li>
<li><a href="http://www.flickr.com/photos/quinnanya/5080080122/" title="Glagolitic on an Android by quinn.anya, on Flickr"><img src="http://farm5.static.flickr.com/4124/5080080122_987605ed87_m.jpg" width="146" height="240" alt="Glagolitic on an Android" class="alignright" /></a>Type <em>mount -o rw,remount -t yaffs2 /dev/block/<strong>mtdblock4</strong> /system</em>, substituting in the number you just wrote down instead of "4", if yours is different.
<ul>
<li>A helpful hint: At least on my setup, using SwiftKey and Terminal Emulator, you can't type a period or comma without overwriting the previous character. If you have this problem too, type a space before typing the comma (i.e., in <em>rw,remount</em>). It'll replace the space with the comma and you can continue as usual. This also comes in handy when you need to type the period in <em>DroidSansFallback.ttf</em>.</li>
</ul>
</li>
<li>Type <em>cp /system/fonts/DroidSansFallback.ttf /sdcard/DroidSansFallbackOld.ttf</em>. This will copy the built-in DroidSansFallback.ttf font to your SD card with the name "DroidSansFallbackOld.ttf". That way, if you ever want to restore the default font, you'll still have it.</li>
<li>Type <em>cp /sdcard/DroidSansFallback.ttf /system/fonts/DroidSansFallback.ttf</em>. This will overwrite the default DroidSansFallback.ttf font with the font you've chosen.</li>
<li>Reboot your phone, and savor the joys of Unicode.</li>
</ul>
