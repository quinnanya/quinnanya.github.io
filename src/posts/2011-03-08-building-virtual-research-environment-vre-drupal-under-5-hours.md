---
permalink: /blog/2011/03/08/building-virtual-research-environment-vre-drupal-under-5-hours/
title: "Building a virtual research environment (VRE) in Drupal (in under 5 hours)"
date: 2011-03-08
classes: wide
show_date: true
---
<p><em>Note: this post has been moved to the new Drupal-specific section of the site. <a href="/drupal/site-breakdowns/building-virtual-research-environment-vre-drupal-under-5-hours">Read the full post here</a>.</em></p>
<p>I recently sat down with a fresh Drupal install, and by the time the winter sun was setting, I'd made a lightweight custom virtual research environment (VRE) for a collaborative project. It took about eight hours, but if you cut out the e-mail answering, eating, false starts, and rethinking how I wanted to structure things, I bet I could re-do it in under five hours-- and so can you.</p>
<p>It was a familiar story-- two scholars, separated by geography and a time zone, gathering data from a variety of sources to illuminate a common set of real-world things from different angles. They had been passing Word documents back and forth, and had recently switched to Google Docs, but that wasn't doing what they needed, either. They had a data problem.</p>
<p>I've been using Drupal for website projects for years. It has a way of making my programmers sob when they look at the database. Sometimes it refuses to cooperate. I've never done a major version update (I abandoned my 4.x project before 5.x was released, and my 5.x project was winding down when 6.x came out), but I hear it's agony. That said, it's amazing what you can spin up given a single day of work, without writing a line of PHP, and keep running for quite some time with little attention or effort.</p>
<p>The custom VRE is I built very emphatically <em>custom</em>, with content types, taxonomies, and data views specific to a particular project. As such, I don't think it would be a good candidate for an <a href="http://drupal.org/project/installation%2Bprofiles">installation profile</a>, but my goal here is to write out the general steps for what I did, so anyone can repeat them with some tweaks for a different project.</p>
