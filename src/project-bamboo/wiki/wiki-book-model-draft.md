---
permalink: /projects/project-bamboo/wiki/book-model-draft/
title: "Project Bamboo wiki: Book Model (Draft)"
date: 2013-01-31
show_date: true
tags: [pbwiki]
header:
  overlay_image: /assets/images/header_bamboologo.jpg
  overlay_filter: 0.5
---
<p><strong>This was originally posted to the Project Bamboo wiki at <a href="https://wiki.projectbamboo.org/pages/viewpage.action?pageId=24643102">https://wiki.projectbamboo.org/pages/viewpage.action?pageId=24643102</a> (<a href="https://wiki.projectbamboo.org/x/HgZ4AQ">https://wiki.projectbamboo.org/x/HgZ4AQ</a>), last edited 1 June 2011</strong></p>
<p>(Drafted with Claire Stewart and Karen Miller)</p>
<h1 id="BookModelDraft-BookModelWorkingDraft">Book Model (Working Draft)</h1>
<p>The Bamboo Book Model is a set of recommendations for providing a core set of standard content for any text represented in Bamboo accessed via Collections Interoperability Services.</p>
<p>The Book Model is built on Content Management Interoperability Services (CMIS) standard. A book will be accessed as a set of CMIS documents, folders, and references. Since CMIS provides a web-service interface, many of the details for access are provided by the CMIS standard and need not be repeated here.</p>
<p>In this recommendation, a package of original content documents retrieved from a source repository are always provided without modification. Additional metadata properties and generated content is added to insure that tools can use a single set of conventions for navigation and display functions.</p>
<p>The software, under development by the Bamboo CI group extends the OpenCMIS server library to provide a CMIS interface to clients. This CMIS interface is not an actual repository, but provides a virtual representation of the content objects that will be available from the source repository on request.</p>
<p>For performance purposes, content that has been acquired and processed will be cached for a limited period of time.</p>
<h2 id="BookModelDraft-SourceContent"><strong>Source Content</strong></h2>
<p>At a minimum, source content should include:</p>
<p>1. Source repository id and an identifier for the items within that repository.</p>
<p>1. Metadata to supply the required item-level fields: title, creator, and date.</p>
<p>2. Full text of the book. This might be TEI, HTML, or OCR text files.</p>
<p>Optionally a book might include:</p>
<p>3. Additional item-level metadata: publisher, publication date(s)</p>
<p>4. Identifier for another book if this is a version. If this is a volume in a series, an identifier for that series.</p>
<p>5. Structural information about the book, divisions (chapters, acts, etc)</p>
<p>6. Scanned images of individual pages</p>
<h2 id="BookModelDraft-OrganizingBookMaterials"><strong>Organizing Book Materials</strong></h2>
<p><strong> </strong> <img src="/sites/default/files/bamboo/bamboo-model-1.jpg" /></p>
<p>The organization of a book is shown in the diagram "Bamboo CI Book Model". A book is represented as a CMIS folder of type bamboo:book. Within this folder are subfolders that contain the original source material and derived page HTML, TEI, page and thumbnail images, and indexes. Item-level metadata is attached as property values on the item folder. Item level metadata fields include:</p>
<div class="table-wrap">
<table class="confluenceTable">
<tbody>
<tr>
<td class="confluenceTd">
<p> dc:title <br class="atl-forced-newline" /> </p>
</td>
<td class="confluenceTd">
<p> Dublin Core title (required) <br class="atl-forced-newline" /> </p>
</td>
</tr>
<tr>
<td class="confluenceTd">
<p> dc:creator <br class="atl-forced-newline" /> </p>
</td>
<td class="confluenceTd">
<p> Dublin Core creator (required) <br class="atl-forced-newline" /> </p>
</td>
</tr>
<tr>
<td class="confluenceTd">
<p> dc:date <br class="atl-forced-newline" /> </p>
</td>
<td class="confluenceTd">
<p> Dublin Core date (required, ISO 8601 date range) <br class="atl-forced-newline" /> </p>
</td>
</tr>
<tr>
<td class="confluenceTd">
<p> dc:publisher <br class="atl-forced-newline" /> </p>
</td>
<td class="confluenceTd">
<p> Dublin Core publisher <br class="atl-forced-newline" /> </p>
</td>
</tr>
<tr>
<td class="confluenceTd">
<p> dc:issued <br class="atl-forced-newline" /> </p>
</td>
<td class="confluenceTd">
<p> Dublin Core publication or issue date <br class="atl-forced-newline" /> </p>
</td>
</tr>
<tr>
<td class="confluenceTd">
<p> dc:isPartOf <br class="atl-forced-newline" /> </p>
</td>
<td class="confluenceTd">
<p> Identifier for volume that includes this item <br class="atl-forced-newline" /> </p>
</td>
</tr>
<tr>
<td class="confluenceTd">
<p> dc:isVersionOf  <br class="atl-forced-newline" /> </p>
</td>
<td class="confluenceTd">
<p> Identifier for text that this is a version of <br class="atl-forced-newline" /> </p>
</td>
</tr>
<tr>
<td class="confluenceTd">
<p> dc:identifier <br class="atl-forced-newline" /> </p>
</td>
<td class="confluenceTd">
<p> Set only if there is a permanent URL for the item. The value of dc:identifier is the permanent URL <br class="atl-forced-newline" /><br />
in the contributing repository </p>
</td>
</tr>
<tr>
<td class="confluenceTd">
<p> bamboo:source <br class="atl-forced-newline" /> </p>
</td>
<td class="confluenceTd">
<p> Short identifier of contributing repository </p>
</td>
</tr>
<tr>
<td class="confluenceTd">
<p> bamboo:uri </p>
</td>
<td class="confluenceTd">
<p> Bamboo assigned, unique URI for the item. The URI includes a short identifier for the <br class="atl-forced-newline" /><br />
contributing repository and an identifier for the item in that repository. </p>
</td>
</tr>
</tbody>
</table>
</div>
<p>The "dc:" prefix represents the dublin core namespace (<a href="http://dublincore.org/documents/2007/07/02/dcmi-namespace/" class="external-link" rel="nofollow">http://dublincore.org/documents/2007/07/02/dcmi-namespace/</a>), and the "bamboo:" prefix represents the bamboo namespace (URI to be determined).</p>
<p>The values of bamboo:uri, dc:isPartOf, and dc:isVersionOf properties are bamboo identifiers. Bamboo identifiers are URIs in the form "<source>/<item-id>" where <source> is a short Bamboo-assigned URI for the contributing repository and <item-id> is the same as, or a slightly modified version of the contributing repository's identifier for the item. The source identifier is modified only so far as is needed to make it a legal component of the URI.</p>
<p>Dates (dc:date and dc:issued) as ISO 8601 dates or a range of ISO 8601 dates in the format "<d1> to <d2>". A date may be followed by a " ?" string if the original date was marked as uncertain. For example:</p>
<p>    1099 to 1100 ?</p>
<p>Represents an uncertain year between 1099 and 1100 inclusive.</p>
<h2 id="BookModelDraft-PageContent "><strong>Page Content</strong> </h2>
<p>Book pages are rendered in a number of formats depending on the materials available. Book pages will always be available as XHTML 1.0 and TEI page files. If page scans images are available, each page will also include a full image and thumbnail.</p>
<p>Every representation of a page appears in a sub-folder of the item folder depending by type. Page sub-folders are named: XHTML, TEI, images, and thumbnails. The following CMIS types are used to represent page content:</p>
<p><strong><em>bamboo:page-image (name "<sequence>.jpg")</em></strong></p>
<p>A high quality jpg image of a book page with width 800 pixels. Aspect ratio is the same as the original scan.</p>
<p><strong><em>bamboo:page-tei (name "<sequence>.tei.xml")</em></strong></p>
<p>TEI representation of book page</p>
<p><strong><em>bamboo:page-xhtml (name "<sequence>.html")</em></strong></p>
<p>Semantic XHTML (that is without formatting tags) of a book's page text. CSS classes will be mappable to TEI elements.</p>
<p><strong><em>bamboo:page-thumb150 (name "<sequence>w150.jpg")</em></strong></p>
<p>Thumbnail for page as a jpeg image with width 150 pixels. Aspect ratio is the same as the original scan.</p>
<p>Each page document (any of the above types) has the following properties:</p>
<div class="table-wrap">
<table class="confluenceTable">
<tbody>
<tr>
<td class="confluenceTd">
<p> bamboo:seq <br class="atl-forced-newline" /> </p>
</td>
<td class="confluenceTd">
<p> Assigned sequence number <br class="atl-forced-newline" /> </p>
</td>
</tr>
<tr>
<td class="confluenceTd">
<p> bamboo:page <br class="atl-forced-newline" /> </p>
</td>
<td class="confluenceTd">
<p> Page identifier as it appears in the source content <br class="atl-forced-newline" /> </p>
</td>
</tr>
<tr>
<td class="confluenceTd">
<p> bamboo:div </p>
</td>
<td class="confluenceTd">
<p> <span style="color: rgb(0,0,0);">Identifier for the division (chapter, act, etc) that includes the page. This may have multiple values if </span><br class="atl-forced-newline" /><br />
<span style="color: rgb(0,0,0);">the page includes content belonging to more than one division.</span><br class="atl-forced-newline" /> </p>
</td>
</tr>
</tbody>
</table>
</div>

<p>These properties are attached to each page representation as well as any separate source object (OCR text, image.) that was used in generating the derived content, so that the original source objects can be matched with generated content via a join.</p>
<h2 id="BookModelDraft-OriginalSourceContent"><strong>Original Source Content</strong></h2>
<p>The original content as obtained from the contributing repository is located in a subfolder of the item folded named "source". This content is exactly as obtained from the contributing repository. Additional property fields are added to the source objects to allow them to be matched with generated content (see page properties above). The following CMIS types are used to identify source content:</p>
<p><strong><em>bamboo:source-mets (name as original)</em></strong></p>
<p>METS document describing the Book as supplied by contributing repository</p>
<p><strong><em>bamboo:source-page-image (name as original)</em></strong></p>
<p>A scanned image of a page (any image format) as supplied by contributing repository</p>
<p><strong><em>bamboo:source-page-ocr (name as original)</em></strong></p>
<p>Raw OCR text of a book page as supplied by a contributing repository</p>
<p><strong><em>bamboo:source-page-xml (name as original)</em></strong></p>
<p>XML text and/or metadata for a book page as supplied by a contributing repository (usually TEI.)</p>
<p>Additional types will be added as needed.</p>
<h2 id="BookModelDraft-ContentsFolderandIndexing"><strong>Contents Folder and Indexing</strong></h2>
<p><strong> </strong> <img src="/sites/default/files/bamboo/bamboo-model-2.jpg" /><br />
Each item folder will contain a "contents" sub-folder, with multiple index folders. Each index provides an alternative way of navigating generated content. Indexes are (possibly nested) folders containing documents that reference content documents.</p>
<p>Indexes are sets of annotations of source and/or generated content, similar to (and available as) an Atom feed. Even though generated content is organized by page, index items may refer to a selected portion of a range of pages so as to allow divisions and other indexed units to overlap page boundaries. Indexes are described in the diagram labeled "Contents / Indexing".</p>
<p><strong>Page Index</strong></p>
<p>The page index provides a way of navigating to each page. The page index provides an easy way to examine all of the content (generated, and original source) that is related to a page.</p>
<p><strong>Div Index</strong></p>
<p>The div index provides a structural view of book content. (For example by chapter, scene and act). This index is built using the structure map in a METS file or TEI div structure depending on the content source.</p>
<p><strong>Genre Indexes</strong></p>
<p>Items may include one or more Genre Indexes. Each Genre Index resembles the div index, but will organize content using a standardized set of div types that will be consistant across source repositories. The types used will depend on the type of content (book, drama, essay.)</p>
<p>Genre indexes should be considered a research topic and may or might not exist for any particular book.</p>
