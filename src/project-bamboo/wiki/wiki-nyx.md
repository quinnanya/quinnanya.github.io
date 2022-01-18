---
permalink: /projects/project-bamboo/wiki/nyx/
title: "Project Bamboo wiki: NYX"
date: 2013-02-01
show_date: true
tags: [pbwiki]
header:
  overlay_image: /assets/images/header_bamboologo.jpg
  overlay_filter: 0.5
---
<p><strong>This was originally published on the Project Bamboo wiki, at <a href="https://wiki.projectbamboo.org/display/~khc@uchicago.edu/NYX">https://wiki.projectbamboo.org/display/~khc@uchicago.edu/NYX</a> (<a href="https://wiki.projectbamboo.org/x/uICj">https://wiki.projectbamboo.org/x/uICj</a>), by Kaylea Champion. Last modified 13 May 2009.</strong></p>
<p>what was demo'd, why, what were outcomes, what was learned, who was involved, whether it'll continue to exist.<br class="atl-forced-newline" /></p>
<p>NYX uses formatting stylesheets prepared using the XSLT language to format XML-encoded documents, particularly TEI documents, into human-readable and useful HTML documents. TEI encoding presents a particular challenge for a generic service because the standard is very flexible. This demonstrator is, potentially, an example of a truly generic service, and will be available as a standalone service as well as part of a standalone web applications and as part of the SEASR tool platform. Is a service at this scope too generic to be useful? Too specific to be implemented by non-Humanities specialists? Or is it "just right" for collaboration between IT/Humanities/Library? What might this tell us about assessing future services for their suitability to a Bamboo services community? Can services of this type make manifest the benefits of a shared services approach? What sort of API might a shared service offer in order to be useful?<br class="atl-forced-newline" /></p>
<p>The overall goal of this demonstrator is two-pronged: to create a generic service for the display of XML-encoded documents in a useful HTML format. For scholars, this allows the web-friendly viewing of TEI documents by means of a set of XSLT transformations. The original proposal is attached as a child to this document. In working on this demonstrator, we will answer the following questions:<br />
<br class="atl-forced-newline" /></p>
<div class="code panel" style="border-width: 1px;">
<div class="codeContent panelContent">
<script type="syntaxhighlighter" class="theme: Confluence; brush: java; gutter: false">
<!--//--><![CDATA[// ><!--
<![CDATA[Is a service at this scope too generic to be useful? Too specific to be implemented by non-Humanities specialists? Or is it "just right"?

What might  this tell us about assessing future services for their suitability to a Bamboo services community?

Can services of this type make manifest the benefits of a shared services approach?

What sort of API might a shared service offer in order to be useful?]]]]><![CDATA[>
//--><!]]>
</script></div>
</div>
<p> Phase 1:</p>
<p>An XSLT transform service -- an XML file and and XSLT file go in, and an HTML file comes out. A basic front-end allowing selection of an XSLT file from a list or an uploaded one and submission of an XML document, with output directed to the screen or to an e-mail.</p>
<ul>
<li>Information-gathering (week 1)
<ul>
<li>Increase our overall understanding of XSLT and TEI. (All)</li>
<li>Assemble resources
<ul>
<li>Find existing XSLT stylesheets for TEI work (Quinn)</li>
<li>What are the Java libraries for XSLT like these days? (Jon Miller)</li>
</ul>
</li>
<li>Clarify objectives
<ul>
<li>what sorts of HTML views might be most useful to start with?
<ul>
<li>Bibliographic references</li>
<li>Footnoted articles ?</li>
<li>Are the relevant XSLT sheets available, or do they need to be written?</li>
</ul>
</li>
<li>what are the necessary features of a front-end?</li>
<li>what are the desired APIs of the service?</li>
</ul>
</li>
</ul>
</li>
</ul>
<ul>
<li>Service construction (week 2-3) (Jon Miller)</li>
<li>Web UI construction (week 2-3) (Quinn Dombrowski, Kaylea Champion)</li>
<li>SEASR tool construction (week 2-3) (Jon Miller)</li>
</ul>
<p>Phase 2:</p>
<p>Iteration: new XSLT stylesheets to match other desired views, new input methods in the web UI<br class="atl-forced-newline" /></p>
