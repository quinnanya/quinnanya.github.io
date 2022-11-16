---
permalink: /blog/2010/06/27/new-birchbark-xml-names-in-context-nic/
title: "New birchbark XML: names in context (NIC)"
date: 2010-06-27
classes: wide
show_date: true
---
<p>To enable a more interesting proof-of-concept for the birchbark letter XML project, I've spent the last week making a new, limited data set (all documents from 1100-1120, plus some documents with the same names from the 12th century, and all the documents that include the name Boris) that lists all the names that occur in a given document and characterizes their role in the document. For the time being, I'm calling it "names in context" (NIC).</p>
<p>I've been adapting the schema every time I come across some new aspect that seems significant. Each document contains one or more</p>
<person> elements, which include:</person>
<ul>
<li>A name</li>
<li>Optionally, a "second name"-- sometimes a patronymic or city of residence used to specify <em>which</em> Ivan is being referred to</li>
<li>A role ("to", "from", or "3p" for 3rd party), and more optional details:
<ul>
<li><em>financial</em>
<ul>
<li>gen - general, mostly for lists of names and amounts without any context</li>
<li>owes</li>
<li>owed</li>
</ul>
</li>
<li><em>orders</em>
<ul>
<li>giving</li>
<li>receiving</li>
<li>report</li>
<li>an optional "polite" attribute to indicate particularly deferential language</li>
</ul>
</li>
<li><em>personal</em> -- might get renamed to <em>other</em> if the "scope creep" continues like this
<ul>
<li>advice</li>
<li>complaint</li>
<li>news</li>
<li>death</li>
<li>religious-- for when the names refer to saints</li>
<li>gen</li>
<li>optional "polite" attribute here, too</li>
</ul>
</li>
</ul>
</li>
<li>A section for relatives of the person:
<ul>
<li>Their relation (mother, father, brother, etc.)</li>
<li>All options for the relative's role, as listed above</li>
</ul>
</li>
</ul>
<p>To illustrate, here's a few sample entries:</p>
<h5><a href="http://gramoty.ru/index.php?no=49&act=full&key=bb">BBL 49</a>: from Nast'ja to her brother</h5>
<p>Conveying the news of her husband's death</p>
<p><code>    <bbl_names><br />
        <id>49</id></bbl_names></code></p>
<person>
            <name>Настасья</name><br />
            <role pos="to">
<personal>news</personal>
            </role><br />
            <fam><br />
                <relative><br />
                    <relationship>brother</relationship><br />
                    <role pos="to">
<personal tone="polite">news</personal>
                    </role><br />
                </relative><br />
            </fam><br />
        </person>
<person>
            <name>Борисъ</name><br />
            <role pos="3p">
<personal>death</personal>
            </role><br />
        </person>
    
<h5>BBL 736а: Ivan and Dristliv</h5>
<p>Ivan tells Dristliv to collect money from Pavel and Prokopii.</p>
<p><code>    <bbl_names><br />
        <id>736а</id></bbl_names></code></p>
<person>
            <name>Иванъ</name><br />
            <role pos="from"><br />
                <orders>giving</orders><br />
            </role><br />
        </person>
<person>
            <name>Дристливъ</name><br />
            <role pos="to"><br />
                <orders>receiving</orders><br />
                <financial>owed</financial><br />
            </role><br />
        </person>
<person>
            <name type="adj">Павелъ</name><br />
            <role pos="3p"><br />
                <financial>owes</financial><br />
            </role><br />
        </person>
<person>
            <name>Прокопии</name><br />
            <role pos="3p"><br />
                <financial>owes</financial><br />
            </role><br />
        </person>
    
