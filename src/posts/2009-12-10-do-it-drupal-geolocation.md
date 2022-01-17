---
permalink: /blog/2009/12/10/do-it-drupal-geolocation/
title: "Do It With Drupal: Geolocation"
date: 2009-12-09
classes: wide
show_date: true
---
<ul>
<li>You can use full html to input a map straight from Google</li>
<li>Geo, Geocode, OpenLayers modules</li>
<li>Standards compliance</li>
<li>Example functions: within, touches, crosses - also, distance, area, perimeter, and others!</li>
<li>PostGIS is a common way of doing it, but you can also "do it in Drupal"</li>
<li>User friendliness: you shouldn't have to be a cartographer!</li>
<li>"Geo-spacial data sets", shape files, projections, coordinates - this stuff can get messy fast</li>
</ul>
<p><strong>Collecting data</strong></p>
<ul>
<li>Run everything through CCK</li>
<li>Geo Field</li>
<li>Geocode</li>
</ul>
<p><strong>Lines</strong></p>
<ul>
<li>Can import a line (big mess of points)</li>
<li>OpenLayers - takes your data and turns it into awesome, pretty, rendered maps</li>
</ul>
<p><strong>Data</strong></p>
<ul>
<li>Stuff you can geocode: image fields (exif), file fields (gpx track logs)</li>
<li>Demo site: <a href="http://geoblog.geojune.org/" title="http://geoblog.geojune.org/">http://geoblog.geojune.org/</a></li>
<li>Collecting tracks: dedicated GPS, gaiagps.com (iPhone), emacberry.com/gpslogger.html (Blackberry)</li>
<li>Data sources: data.gov, zillow.com, DataFinder, etc.</li>
</ul>
<p><strong>Questions</strong></p>
<ul>
<li>Compatibility with other modules? - A lot of work is monolithic, people don't work together; there may be a CCK thing for Mapstraction</li>
<li>GMapEasy module? No idea...</li>
<li>Before, people were doing Location, but that was overwhelming; then people did a simple lat/lon field; the views code was starting to get messy</li>
<li>You shouldn't write a module that has to hunt around and look for things - try to get all the people who work on geo stuff to express their data in a consistent way (rather than making a module check all the possible ways to store data)</li>
<li>How many ways can you pull in data? - Geocode module is open, just tell it what kind of data you want to give it ("I'm going to give you an IP address"); no support for adding Geo stuff to users, but it's an easy API change</li>
<li>In Drupal 7, when you can add CCK fields to users, the geo field becomes available</li>
<li>Any way to define/create your own graphics? Mapping Middle Earth? - No technical limitation, Geo module doesn't care what you put in there; Geo just stores points/lines/polygons/3D, etc.</li>
<li>OpenLayers - finding graphical tile sets for your map of Middle Earth, that's a whole secondary technical problem, even if you've got the right coordinates in there; there's pieces on the display side that need to be there</li>
<li>There's a filter for "less than/equal to X miles of this point" in Views - this saves you from math</li>
</ul>
<p><strong>Modules</strong></p>
<ul>
<li>Geo - storing your data</li>
<li>Gathering your data - geocode, postal</li>
<li>Showing it - OpenLayers</li>
</ul>
