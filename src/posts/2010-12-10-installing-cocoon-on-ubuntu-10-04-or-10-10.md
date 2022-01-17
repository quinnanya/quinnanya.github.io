---
permalink: /blog/2010/12/10/installing-cocoon-on-ubuntu-10-04-or-10-10/
title: "Installing Cocoon on Ubuntu 10.04 or 10.10"
date: 2010-10-10
classes: wide
show_date: true
---
<p>This is an updated version of a <a href="/blog/2010/04/15/installing-cocoon-on-ubuntu/">how-to written for Intrepid (8.10)</a>, now horrendously out-of-date. It was written for Maverick (10.10) but should also work on Lucid (10.04).</p>
<p>No knowledge of Ubuntu or Linux is assumed; the intended audience is someone who's managed to install Ubuntu and isn't too intimidated by the Terminal. <em>(Hint: You can copy and paste, but in Terminal, pasting is Ctrl + <strong>Shift</strong> +C)</em></p>
<h3>Step 1: Installing Java SDK</h3>
<p><em>(Thanks to <a href="http://happy-coding.com/install-sun-java6-jdk-on-ubuntu-10-04-lucid/">Daniel Bruegge</a> for the tip)</em></p>
<ul>
<li>Open the Terminal (Applications > Accessories > Terminal)</li>
<li><strong>On Maverick:</strong> type:<br />
<pre>sudo add-apt-repository "deb <a href="http://archive.canonical.com/" title="http://archive.canonical.com/">http://archive.canonical.com/</a> maverick partner"</pre></li>
<li><strong>On Lucid:</strong> type:<br />
<pre>sudo add-apt-repository "deb <a href="http://archive.canonical.com/" title="http://archive.canonical.com/">http://archive.canonical.com/</a> lucid partner"</pre></li>
<li>Type:<br />
<pre>sudo apt-get update</pre><p> This will check all the software repositories for what updates are available, including java.</p>
</li>
<li>Type:<br />
<pre>sudo apt-get install sun-java6-jdk</pre><p> It will ask you if you want to continue; type <em>y</em> to confirm.</p>
</li>
<li>You'll have to agree to the TOS and license (you can use the tab key to move between the options) and then it'll install on its own.</li>
</ul>
<h3>Step 2: Installing Maven</h3>
<ul>
<li>Open Terminal, and type<br />
<pre>sudo apt-get install maven2</pre><p> This will list all the packages that need to be installed; type <em>y</em> to proceed</p>
</li>
</ul>
<h3>Step 3: Installing Cocoon</h3>
<ul>
<li>Open the Terminal and type<br />
<pre>mvn archetype:generate -DarchetypeCatalog=http://cocoon.apache.org</pre></li>
<li>This begins the install process.
<ul>
<li>For archetype, choose 2</li>
<li><em>Define value for groupId:</em> - This should be a unique value. A classic value to use is, if you own the namespace myurl.com, you could type <em>com.myurl</em></li>
<li><em>Define value for artifactId:</em> cocoon</li>
<li><em>Define value for version: 1.0-SNAPSHOT:</em> 1.0.0</li>
<li><em>Define value for package:</em> - groupID.cocoon (i.e. <em>com.myurl.cocoon</em>)</li>
<li>Confirm the properties</li>
</ul>
</li>
<li>After everything's done installing, you should see <em>[INFO] BUILD SUCCESSFUL</em></li>
</ul>
<p>Cocoon will install in your Home folder, in a folder named the same thing as whatever you put for your artifactID. Here, the folder is named <em>cocoon</em>.</p>
<h3>Step 4: Starting Jetty</h3>
<p>You need to make a configuration change in the Maven <em>settings.xml</em> to be able to run Jetty. <em>(Thanks to <a href="http://ganeshgembali.wordpress.com/2008/12/29/maven-jetty-org-apache-maven-plugins/">Ganesh Gembali</a> for the tip.)</em></p>
<ul>
<li>Open up Terminal and type<br />
<pre>sudo gedit /etc/maven2/settings.xml</pre></li>
<li>This will pop up a text editor with <em>settings.xml</em>. Search for <em>pluginGroups</em>, and between<br />
<plugingroups> and </plugingroups>, add
<pre><plugingroup>org.mortbay.jetty</plugingroup></pre></li>
<li>Make sure you're in your cocoon directory in Terminal (does it say <em>~/cocoon$</em> right before the cursor?), and type<br />
<pre>mvn jetty:run</pre></li>
<li>There'll be a lot more installing, but it should conclude with <em>[INFO] Started Jetty Server</em></li>
<li>Open a browser and go to <a href="http://localhost:8888/cocoon" title="http://localhost:8888/cocoon">http://localhost:8888/cocoon</a> - you should see a message saying Apache Cocoon: Welcome</li>
</ul>
<h3>Step 5: Cocoon Add-ons</h3>
<p>There are a couple add-ons for Cocoon that are essentials-- like generators for HTML. If you want to use XSLT 2.0, Saxon 9 is also critical. Possibly less important are the FOP processor (to generate PDFs from XSL-FO), Batik (for SVG) and Forms (to genrate forms). If you don't need to use XSLT 2.0, you can skip the first part of this section.</p>
<ul>
<li>Installing Saxon 9 <em>- a good idea</em>
<ul>
<li>Open your <em>cocoon</em> directory and navigate to src/main/resources/META-INF/cocoon</li>
<li>Create directory <em>avalon</em></li>
<li>Create the following files in Text Editor (Applications > Accessories > Text Editor), and place them in the avalon directory:
<ul>
<li>File named <strong>cocoon-core-xslt-saxon.xconf</strong><br />
<pre><?xml version="1.0" encoding="UTF-8"??>
<components>
<component role="org.apache.excalibur.xml.xslt.XSLTProcessor/saxon" class="org.apache.cocoon.components.xslt.TraxProcessor">

<parameter name="use-store" value="true"></parameter>
<parameter name="transformer-factory" value="net.sf.saxon.TransformerFactoryImpl"></parameter>  
</component> 
</components>
</pre></li>
<li>File named <strong>sitemap-transformers-saxon-transformer.xconf</strong><br />
<pre><?xml version="1.0" encoding="UTF-8"??>

<components xmlns:map="http://apache.org/cocoon/sitemap/1.0">
<transformers>
<transformer name="xslt2" src="org.apache.cocoon.transformation.TraxTransformer"> 
<xslt-processor-role>saxon</xslt-processor-role>
</transformer>  
</transformers>
</components></pre></li>
</ul>
</li>
<li>Download <a href="http://saxon.sourceforge.net/#F9.2HE">Saxon-HE 9.2 for Java</a>. By default, this will go into your Downloads folder.</li>
<li>Extract the zip file; you can delete everything but <em>saxon9he.jar</em></li>
<li>Open a new Terminal<br />
<pre>cd cocoon
mvn install:install-file -DgroupId=net.sf.saxon -DartifactId=saxon -Dversion=9.2.1.2 -Dpackaging=jar -Dfile=../Downloads/saxon9he.jar</pre></li>
<li>Go to <em>cocoon</em> and open pom.xml</li>
<li>At the bottom of <dependencies>, add:<br />
<pre>
<dependency>  
<groupid>net.sf.saxon</groupid>    
<artifactid>saxon</artifactid>    
<version>9.2.1.2</version>  
</dependency>  </pre></dependencies></li>
<li>If for some reason you only want Saxon 9 and not the ability to generate HTML, skip to the bottom of this section</li>
</ul>
</li>
<li>Installing HTML support
<ul>
<li>Still in pom.xml, at the bottom of <dependencies>, add:<br />
<pre>
<dependency>
<groupid>org.apache.cocoon</groupid>

<artifactid>cocoon-html-impl</artifactid>
<version>1.0.0</version>
</dependency></pre></dependencies></li>
</ul>
</li>
<li>Installing FOP (for PDFs)
<ul>
<li>Still in pom.xml, at the bottom of <dependencies>, add:<br />
<pre>
<dependency>
<groupid>org.apache.cocoon</groupid>
<artifactid>cocoon-fop-impl</artifactid>
<version>1.0.0</version>
</dependency>

</pre></dependencies></li>
</ul>
</li>
<li>Installing Batik (SVG)
<ul>
<li>Still in pom.xml, at the bottom of <dependencies>, add:<br />
<pre>
<dependency>
<groupid>org.apache.cocoon</groupid>

<artifactid>cocoon-batik-impl</artifactid>
<version>1.0.0</version>
</dependency>
</pre></dependencies></li>
</ul>
</li>
<li>Installing Forms
<ul>
<li>Still in pom.xml, at the bottom of <dependencies>, add:<br />
<pre>
<dependency>
<groupid>org.apache.cocoon</groupid>
<artifactid>cocoon-forms-impl</artifactid>
<version>1.0.0-RC1</version>

</dependency>
            </pre></dependencies></li>
</ul>
</li>
<li>There's <a href="http://cocoon.apache.org/2.2/blocks/1204_1_1.html">a list of all blocks</a>, and the syntax for the dependency code is in there someplace.</li>
</ul>
<li><strong>Once you're done adding dependencies:</strong>
<ul>
<li>If you have a Terminal open with <em>[INFO] Started Jetty Server</em>, close it.</li>
<li>Open a new Terminal<br />
<pre>cd cocoon
            
mvn compile</pre></li>
<li>After it's done...<br />
<pre>mvn jetty:run</pre></li>
</ul>
</li>
<h3>Redirecting the Sitemap</h3>
<p>You can add your pipelines to the <em>sitemap.xmap</em> in cocoon/src/main/resources/COB-INF, or (more conveniently) you can tell that base sitemap to look elsewhere for your files.</p>
<p>I'm assuming here that you have a folder called <em>myproject</em> in your Home folder where you have all your files and your sitemap. Please change that, and your user name, accordingly.</p>
<p>Included here is also the code to generate more useful error messages than a blank pages.</p>
<p>In <em>sitemap.xmap</em> in cocoon/src/main/resources/COB-INF, at the bottom of the<br />
<pipelines> section, add:</pipelines></p>
<pre>
<pipeline>
<handle-errors>
<generate type="exception"></generate> 

<serialize type="xml"></serialize>
</handle-errors>   
<match pattern="myproject/**">
<mount uri-prefix="myproject/" check-reload="yes" src="/home/YOUR_USER_NAME/myproject/sitemap.xmap" reload-method="synchron"></mount>
</match>
</pipeline></pre><p>In this case, your project will be found at <a href="http://localhost:8888/cocoon/myproject/[things">http://localhost:8888/cocoon/myproject/[things</a> that match your pipelines]. But it doesn't have to match the folder name with your files. You can change the URL by chanigng <match pattern="myproject/**"> to <match pattern="whatever_you_want/**"></match></match></p>
<h3>Hints and Tips</h3>
<p>Every time you restart Ubuntu, you have to restart Cocoon:</p>
<pre>cd cocoon
mvn jetty:run</pre><p>            Be sure to keep that Terminal window open while you're working with Cocoon. You can always check if Cocoon is working by going to: <a href="http://localhost:8888/cocoon" title="http://localhost:8888/cocoon">http://localhost:8888/cocoon</a>.</p>
<p>This guide was prepared with help from a guide written on the GSLIS wiki by <a href="http://piez.org/wendell/">Wendell Piez</a>. If you try it and something doesn't work, please post a comment. This document is licensed <a href="http://creativecommons.org/licenses/by/3.0/us/">Creative Commons Attribution</a>.</p>
