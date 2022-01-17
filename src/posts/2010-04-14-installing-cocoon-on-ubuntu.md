---
permalink: /blog/2010/04/14/installing-cocoon-on-ubuntu/
title: "Installing Cocoon on Ubuntu"
date: 2010-04-14
classes: wide
show_date: true
---
<p><strong>10/11/10 -- This guide was written for Intrepid, and doesn't work on the latest Ubuntu releases. An updated and working version of the guide is <a href="/blog/2010/12/10/installing-cocoon-on-ubuntu-10-04-or-10-10">available here</a>.</strong><br />
                This guide was prepared with help from a guide written on the GSLIS wiki by <a href="http://piez.org/wendell/">Wendell Piez</a>. If you try it and something doesn't work, please e-mail me (quinnd -at- uchicago +dot+ edu). This document is licensed <a href="http://creativecommons.org/licenses/by/3.0/us/">Creative Commons Attribution</a>.<br />
                No knowledge of Ubuntu or Unix is assumed; the intended audience is someone who's managed to install Ubuntu and isn't too intimidated by the Terminal.</p>
<p>                Step 1: Installing Java SDK</p>
<ol>
<li>Open the Terminal (Applications > Accessories > Terminal)</li>
<li>Type: sudo apt-get install sun-java6-jdk<br />
                    <em>(Hint: You can copy and paste, but in Terminal, pasting is Ctrl + <strong>Shift</strong> +C)</em></li>
<li>There'll be some downloading, you'll have to scroll through a long TOS and agree to it, but then it will install on its own.</li>
<li>Close Terminal.</li>
</ol>
<p>               Step 2: Installing Maven<br />
                Derived from <a href="http://maven.apache.org/guides/getting-started/maven-in-five-minutes.html">Maven in Five Minutes</a>.</p>
<ol>
<li><a href="http://maven.apache.org/download.html">Download Maven</a> (choose tar.bz2)</li>
<li>Open the tar.bz file; by default, it probably saved to the Desktop</li>
<li>Extract it to the Desktop</li>
<li>Open the Terminal again and type: cd /usr/local
<p>sudo mkdir apache-mavenAt this point, the Terminal will ask you for your sudo password. It's the same as the password you use to log in to Ubuntu. Then:<br />
cd /home/YOUR_USER_NAME/Desktop (be sure to replace YOUR_USER_NAME with your user name)</p>
<p>sudo mv apache-maven-2.0.9 /usr/local/apache-maven</p>
<p>export M2_HOME=/usr/local/apache-maven/apache-maven-2.0.9</p>
<p>export PATH=$M2:$PATH
</p>
</li>
<li>Cross you fingers and type:<br />
mvn --version</li>
<li>If everything worked right, it should display information about the version of Maven you have installed.</li>
<li>Close Terminal.</li>
</ol>
<p>Step 3: Installing Cocoon</p>
<p>                Derived from <a href="http://cocoon.apache.org/2.2/1159_1_1.html">Your first Cocoon application.</a></p>
<ol>
<li>Make a directory for your Cocoon install.
<ul>
<li>Using the GUI: go to Places > Home Folder, then in that new window, File > Create Folder.</li>
<li>Or, open the Terminal:mkdir cocoon</li>
<li>In the following text, I'm assuming you make a folder called <em>cocoon</em> in your Home Folder; if you give it a different name or put it somewhere else, you'll have to change the commands accordingly.</li>
</ul>
</li>
<li>Open the Terminal and change directory to your cocoon folder:cd cocoon
<p>mvn archetype:generate -DarchetypeCatalog=<a href="http://cocoon.apache.org">http://cocoon.apache.org</a></p>
</li>
<li>This begins the install process.
<ul>
<li>For archetype, choose 2</li>
<li><em>Define value for groupId:</em> - This should be a unique value. A classic value to use is, if you own the namespace myurl.com, you could type <em>com.myurl</em></li>
<li><em>Define value for artifactId:</em> cocoon</li>
<li><em>Define value for version: 1.0-SNAPSHOT:</em> 1.0.0</li>
<li><em>Define value for package:</em> - groupID.cocoon (i.e. <em>com.myurl.cocoon</em>)</li>
</ul>
</li>
<li>After everything's done installing, you should see <em>[INFO] BUILD SUCCESSFUL</em></li>
<li>Make sure you're in your cocoon directory in Terminal (does it say <em>~/cocoon$</em> right before the cursor?), and type mvn jetty:run</li>
<li>There'll be a lot more installing, but it should conclude with <em>[INFO] Started Jetty Server</em></li>
<li>Open a browser and go to <a href="http://localhost:8888/cocoonTest" title="http://localhost:8888/cocoonTest">http://localhost:8888/cocoonTest</a> - you should see a message saying Apache Cocoon: Welcome</li>
</ol>
<p>                Step 4: Cocoon Add-ons<br />
                There are a couple add-ons for Cocoon that are essentials-- like generators for HTML. If you want to use XSLT 2.0, Saoxn 9 is also critical. Posibly less important are the FOP processor (to generate PDFs from XSL-FO), Batik (for SVG) and Forms (to genrate forms). If you don't need to use XSLT 2.0, you can skip the first part of this section.</p>
<ol>
<li>Installing Saxon 9 <em>- a good idea</em>
<ol>
<li>Open your <em>cocoon</em> directory and navigate to src/main/resources/META-INF/cocoon</li>
<li>Create directory <em>avalon</em></li>
<li>Create the following files in Text Editor (Applications > Accessories > Text Editor), and place them in the avalon directory:
<ol>
<li>File named <strong>cocoon-core-xslt-saxon.xconf</strong><br />
<?xml version="1.0" encoding="UTF-8"??><br />
<components><br />
<component role="org.apache.excalibur.xml.xslt.XSLTProcessor/saxon"></component>
class="org.apache.cocoon.components.xslt.TraxProcessor">
<p>
<parameter name="use-store" value="true"></parameter></p>
<parameter name="transformer-factory" value="net.sf.saxon.TransformerFactoryImpl"></parameter>
<br />
</components>
</li>
<li>File named <strong>sitemap-transformers-saxon-transformer.xconf</strong><br />
<?xml version="1.0" encoding="UTF-8"??>
<p><components xmlns:map="http://apache.org/cocoon/sitemap/1.0"><br />
<transformers><br />
<transformer name="xslt2" src="org.apache.cocoon.transformation.TraxTransformer"><br />
<xslt-processor-role>saxon</xslt-processor-role><br />
</transformer><br />
</transformers><br />
</components>
                    </p>
</li>
</ol>
</li>
<li>Download <a href="http://prdownloads.sourceforge.net/saxon/saxonb9-1-0-5j.zip" title="http://prdownloads.sourceforge.net/saxon/saxonb9-1-0-5j.zip">http://prdownloads.sourceforge.net/saxon/saxonb9-1-0-5j.zip</a></li>
<li>Extract the zip file to you Home folder; you can delete everything but <em>saxon9.jar</em></li>
<li>Open a new Terminalcd cocoon
<p>mvn install:install-file -DgroupId=net.sf.saxon -DartifactId=saxon -Dversion=9.1.0.5 -Dpackaging=jar -Dfile=../saxon9.jar</p>
</li>
<li>Go to <em>cocoon</em> and open pom.xml</li>
<li>At the bottom of <dependencies>, add:
<p><dependency><br />
<groupid>net.sf.saxon</groupid><br />
<artifactid>saxon</artifactid><br />
<version>9.1.0.5</version><br />
</dependency>  </p>
</dependencies></li>
<li>If for some reason you only want Saxon 9 and not the ability to generate HTML, skip to the bottom of this section</li>
</ol>
</li>
<li>Installing HTML support
<ul>
<li>Still in pom.xml, at the bottom of <dependencies>, add:
<p><dependency><br />
<groupid>org.apache.cocoon</groupid></dependency></p>
<p><artifactid>cocoon-html-impl</artifactid><br />
<version>1.0.0</version><br />
</p>
</dependencies></li>
</ul>
</li>
<li>Installing FOP (for PDFs)
<ul>
<li>Still in pom.xml, at the bottom of <dependencies>, add:
<p><dependency><br />
<groupid>org.apache.cocoon</groupid><br />
<artifactid>cocoon-fop-impl</artifactid><br />
<version>1.0.0</version><br />
</dependency></p>
</dependencies></li>
</ul>
</li>
<li>Installing Batik (SVG)
<ul>
<li>Still in pom.xml, at the bottom of <dependencies>, add:
<p><dependency><br />
<groupid>org.apache.cocoon</groupid></dependency></p>
<p><artifactid>cocoon-batik-impl</artifactid><br />
<version>1.0.0</version><br />

</p>
</dependencies></li>
</ul>
</li>
<li>Installing Forms
<ul>
<li>Still in pom.xml, at the bottom of <dependencies>, add:
<p><dependency><br />
<groupid>org.apache.cocoon</groupid><br />
<artifactid>cocoon-forms-impl</artifactid><br />
<version>1.0.0-RC1</version></dependency></p>
<p>
            </p>
</dependencies></li>
</ul>
</li>
<li>There's <a href="http://cocoon.apache.org/2.2/blocks/1204_1_1.html">a list of all blocks</a>, and the syntax for the dependency code is in there someplace.</li>
<li><strong>Once you're done adding dependencies:</strong>
<ol>
<li>If you have a Terminal open with <em>[INFO] Started Jetty Server</em>, close it.</li>
<li>Open a new Terminalcd cocoon
<p>mvn compileAfter it's done...<br />
mvn jetty:run
     </p>
</li>
</ol>
</li>
</ol>
<p>        Redirecting the Sitemap<br />
        You can add your pipelines to the <em>sitemap.xmap</em> in cocoon/src/main/resources/COB-INF, or (more conveniently) you can tell that base sitemap to look elsewhere for your files.<br />
        I'm assuming here that you have a folder called <em>myproject</em> in your Home folder where you have all your files and your sitemap. Please change that, and your user name, accordingly.</p>
<p>Included here is also the code to generate more useful error messages than a blank pages.<br />
        In <em>sitemap.xmap</em> in cocoon/src/main/resources/COB-INF, at the bottom of the<br />
<pipelines section="" add:="">
<p><pipeline><br />
<handle-errors><br />
<generate type="exception"></generate> </handle-errors></pipeline></p>
<p><serialize type="xml"></serialize><br />
<br />
<match pattern="myproject/**"><br />
<mount uri-prefix="myproject/" check-reload="yes"></mount>
src="/home/YOUR_USER_NAME/myproject/sitemap.xmap" reload-method="synchron"/><br />
</match><br />
</p>
<p>        In this case, your project will be found at <a href="http://localhost:8888/cocoonTest/myproject/[things">http://localhost:8888/cocoonTest/myproject/[things</a> that match your pipelines]. But it doesn't have to match the folder name with your files. You can change the URL by chanigng <match pattern="myproject/**"> to <match pattern="whatever_you_want/**"></match></match></p>
<p>        Hints and Tips<br />
        Every time you restart Ubuntu, you have to restart Cocoon:<br />
cd cocoon</p>
<p>mvn jetty:run<br />
            Be sure to keep that Terminal window open while you're working with Cocoon. You can always check if Cocoon is working by going to: <a href="http://localhost:8888/cocoonTest" title="http://localhost:8888/cocoonTest">http://localhost:8888/cocoonTest</a>.</p>
</pipelines></p>