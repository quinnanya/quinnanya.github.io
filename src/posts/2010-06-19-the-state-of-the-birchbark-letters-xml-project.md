---
permalink: /blog/2010/06/19/the-state-of-the-birchbark-letters-xml-project/
title: "The state of the birchbark letters XML project"
date: 2010-06-19
classes: wide
show_date: true
---
<p>I was hoping to delay this until I had the Subversion repository ready to distribute the first versions of the XML, but setting it up is taking a bit longer than I anticipated. I'm working on a proof-of-concept for the kinds of analysis that can be done using the name and date indices together; I'm hoping to finish it in about a week or so. Here's the current status of the deliverables as of 20 June 2010:</p>
<h4>Date index</h4>
<p>A preliminary version is done and ready for release. It contains all the documents and all the different proposed date ranges found in Zaliznjak 2004 and gramoty.ru. A sample entry:</p>
<p><code><br />
    <bbl_date><br />
        <id>380</id><br />
        <year_ne m="услов">1140</year_ne><br />
        <year_ne m="страт">1135</year_ne><br />
        <year_ne m="внестрат">1100</year_ne><br />
        <year_nl m="услов">1160</year_nl><br />
        <year_nl m="страт">1170</year_nl><br />
        <year_nl m="внестрат">1190</year_nl><br />
        <year_pref_ne m="внестрат">1100</year_pref_ne><br />
        <year_pref_nl m="внестрат">1140</year_pref_nl><br />
        <loc>Нерев</loc><br />
        <loc_id>И-1</loc_id><br />
    </bbl_date><br />
</code></p>
<h4>Name index</h4>
<p>Finished, other than the metadata about whether a name is attested elsewhere, compositional, or none of the above. A sample entry:</p>
<p><code><name gen="m"></name></code></p>
<form>Матфѣи</form>
<p>
            <adj>Матфѣѥвъ</adj></p>
<patronym>Матфѣѥвичь</patronym>
            <alt>Матьфѣи</alt><br />
            <rel>Мафѣи</rel><br />
        <br />

<h4>Names in context</h4>
<p>Starting work on this index (which shows all the names found in each document, and the role they play) is the next step in building a proof-of-concept for the work on the BBL names sub-project.</p>
<h4>Unicode word index</h4>
<p>Completed through page 62 out of 113.</p>
<h4>Word index with vowel etymology</h4>
<p>Pending completion of Unicode word index.</p>
