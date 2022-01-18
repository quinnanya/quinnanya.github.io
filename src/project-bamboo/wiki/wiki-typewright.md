---
permalink: /projects/project-bamboo/wiki/typewright/
title: "Project Bamboo wiki: TypeWright"
date: 2013-01-31
show_date: true
tags: [pbwiki]
header:
  overlay_image: /assets/images/header_bamboologo.jpg
  overlay_filter: 0.5
---
<p><strong>This was originally published on the Project Bamboo wiki, at <a href="https://wiki.projectbamboo.org/display/BTECH/TypeWright">https://wiki.projectbamboo.org/display/BTECH/TypeWright</a> (<a href="https://wiki.projectbamboo.org/x/egJ4AQ">https://wiki.projectbamboo.org/x/egJ4AQ</a>), by Travis Brown. Last modified 19 December 2011.</strong></p>
<p>This page is for the description of a tool which will be presented and discussed at the second Corpora Space Workshop. It should also include relevant links to pages on the web etc.</p>
<h5 id="TypeWright-Name">Name</h5>
<p>TypeWright</p>
<h5 id="TypeWright-Briefdescription">Brief description</h5>
<p>TypeWright is a tool for correcting the text-version of a document made  up of page images. These text-versions are crucially necessary: they are  what enables full-text searching, data-mining, preserving, and curating  texts of historical importance. Right now, the text running behind the  page images of these texts has been mechanically typed, leaving behind  errors that need to be corrected by human eyes and hands.</p>
<h5 id="TypeWright-Websiteprojectwikiorotherrelevantlinks">Website, project wiki, or other relevant links</h5>
<p><a href="http://www.18thconnect.org/typewright/documents" class="external-link" rel="nofollow">http://www.18thconnect.org/typewright/documents</a></p>
<h5 id="TypeWright-Presentationslidestalksorscreencasts">Presentation slides, talks, or screencasts</h5>
<h5 id="TypeWright-Pre-workshopquestions">Pre-workshop questions</h5>
<p><strong>1. What does your tool do? What are your core use cases?</strong></p>
<p>TypeWright allows a user to go through a text line by line and improve it by correcting OCR errors and other mis-transcriptions. It will allow scholars to construct freely available transcriptions of texts from the ESTC catalog.<br />
<strong>2. Who are your current users? What do you see as the project’s long-term impact for the scholarly community?</strong></p>
<p>TypeWright is currently in beta with a planned launch production in August. TypeWright will allow users to improve dirty OCR transcriptions from the ESTC catalog and create freely available, lightly marked up, versions of these transcriptions. These results will help improve the quality of full text searches on both 18th Connect and the ECCO catalog.</p>
<p><strong>3. How does your tool fit into the proposed five genres for Corpora Space tools? Is it a stand-alone application or a library that supports one or more of these categories of task? What is the current interface? CLI or GUI? Web or desktop?</strong></p>
<p>TypeWright is a curation tool which operates as a plugin with the Collex search and discovery system. It allows users to curate texts discovered through Collex and to contribute back improved texts to the Collex search index. It is a web based application which requires a free login (an 18th Connect account).  <br />
<strong>4. What kinds of data does the tool work with? What kinds of structure does it expect or require? What kinds of formats does it produce and consume?</strong></p>
<p>From the end user's perspective, TypeWright comes with its data fully loaded. At present, it is structured to operate on the ESTC catalog holdings. We have special scripts that prepare the transcriptions and images for editing. The end result will be a lightly marked up TEI file.<br />
<strong>5. What kinds of technology is your tool built on (languages, runtimes, libraries, platforms)?</strong></p>
<p>TypeWright is a component of Collex and is written with Ruby on Rails. It also relies on the output of Gamera, which is programmatically cleans up the dirty OCR source transcriptions to a degree.</p>
<p><strong>6. How is your tool licensed? Are there licensing restrictions on any resources that your tool depends on?</strong></p>
<p>TypeWright is distributed under the open source Apache 2.0 license.</p>
<p><strong>7. What advantages do you see for your project in a collaboration with Corpora Space? What do you see your project bringing to Corpora Space?</strong></p>
