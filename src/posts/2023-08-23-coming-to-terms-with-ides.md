---
permalink: /blog/2023/08/23/coming-to-terms-with-ides/
title: "Coming to Terms with IDEs"
date: 2023-08-23
classes: wide
show_date: true
header:
  overlay_image: /assets/images/header_code.jpg
  overlay_filter: 0.2
---

This week Brandon Walsh finished up his [summer of blogging](https://scholarslab.lib.virginia.edu/blog/blogging-summer-2023-in-review/), a series I very much enjoyed following along with. It was a refreshing reminder that a blog post doesn't need to be a whole production: jotting down and sharing a few thoughts or a tip or a workflow can have a lot of value for yourself and others. So much of that kind of casual writing ended up on Twitter over the last decade, where it now sits in people's individual archives, has been deleted, or is juxtaposed with increasingly dubious ads on something called "X".

I've been greatly enjoying my time over on Bluesky (where Brandon and I have been working on [getting invite codes to any DH folks who want them](https://scholarslab.lib.virginia.edu/blog/finding-the-community-after-twitter/)), but there's no denying the increasingly fractured nature of the broad DH community, and I'd rather write things in a place that are easier to find and reference in the future. So, a return to deliberate blogging -- with any luck, at the "once every two weeks" pace Brandon suggested.

Today's anecdote and DH pro-tip come out of my own efforts to learn to code, which I've written a lot about over on the Data-Sitters Club ([DSC 12: The DSC and the New Programming Language](https://datasittersclub.github.io/site/dsc12.html) especially, but "[learning to code](https://datasittersclub.github.io/site/genindex.html#L)" is also one of the longest entries in the DSC index) and elsewhere, including [arguing that learning to code should be weighed against learning myriad other things](https://purl.stanford.edu/ck442sc7933) for people interested in DH.

I've written [about Jupyter Notebooks](https://programminghistorian.org/en/lessons/jupyter-notebooks) and shortly after DSC 8 we switched to publishing the Data-Sitters Club using [Jupyter Book](https://jupyterbook.org/en/stable/intro.html), but I've never talked about IDEs or the software I use to write code because... I didn't use one. For the last five years, I've been writing all my code using the Jupyter Notebook environment. No plugins, nothing fancy, not even a whiff of autocomplete. Except when I was in a hurry, I wouldn't let myself copy and paste code from Stack Overflow: if I wanted to use it, I had to retype it. *This*, I reckoned, was how I learned human languages, and this was how I was going to learn to code.

If you've seriously studied another human language, you'll remember that passive recognition is much, much easier than production. The less thoughtfully produced Duolinguo courses (looking at you, Duolinguo Ukrainian) cut corners in the same way: in all the exercises, the answers are already there in front of your eyes. You just need to string the words together in the right order, or form a plausible translated English sentence. If you have the vaguest sense of what any of the words are, you'll rack up the gamified points.

Staring at a blank page and trying to summon from the depths of your brain what the word is -- and then sorting out the right form of the word and producing it from nothing, one letter at a time -- is an entirely different experience. Doing that same thing, but faster and verbally, is another challenge. And I thought to myself that if I was ever going to get good enough to do what I imagined to be the coding equivalent of fluent speech, I could allow myself no shortcuts. No copy/paste, no autocomplete, certainly no spicy AI autocomplete. It had to be me staring down a blank screen.

I can't say it didn't work: I am, after several years of work, much more comfortable and capable with writing code. During some phases of the year, I do it regularly; like most things, to keep your skill you have to practice. But it can be a bit of a mental stretch, especially when I return to it after a break. *How many equals signs do I need here? What was the syntax for wrangling those CSVs?* I've written enough code by now that I can crib from older projects, but I have to fight inertia to get started. There is a particular kind of energy and focus I need to *want to* tackle writing code, and its supply is far from infinite or reliable.

It felt like defeat, or at least indulging in some kind of heresy that would surely lead to perdition, when I mentioned my coding setup to my DH developer colleague Simon Wiles and his first response was to encourage me to use an IDE. How would I get better at writing code myself if I accepted becoming a thrall of code completion? But on the last night of the DH conference in Graz, we sat down together and he patiently showed me around VS Code (which I had spurned for years, associating it with bad high school programming classes that taught Visual Basic .NET), and helped me find useful extensions to install. Because Simon is usually the one to straighten out my code when I've caused a bigger wreck than a child with a wooden railway set and Godzilla fantasies, I promised to use VS Code in order to give him code disasters that were at least reasonably formatted.

This morning I found myself struggling with the latest Data-Sitters Club book, needing to extract 100 rows from a spreadsheet where the filename column matched a list of filenames. I kicked myself for not simply flagging them all in OpenRefine when I had looked them up yesterday, which would've made an export easy. I seriously considered doing it manually on the train. It's not that I didn't know basically how to write the code-- it's just that I dreaded sorting out all the punctuation and fiddling with it until it went from "basically right, should more or less work" to "actually does the thing".

I opened VS Code. I wrote a couple lines to open my source CSV and output file. I typed `reader` and began scratching my way through the recesses of my brain, trying to remember the syntax for reading in a CSV that way. 

The rest of the code appeared in gray. The Codium plugin I had installed had seen this story before, more times even than I'd heard scholars say, "I want to build a database", and it filled in the rest of the story.

I hit tab and accepted the additions.

In three minutes -- where it probably would have taken me 15 -- I had a new file with the 100 rows I needed and could get back to work on the actual project.

I had my qualms about using an IDE with code completion, and on some gut level, it still makes me squeamish. (My oldest kid is very into Baldur's Gate 3, and code completion is the closest thing to Illithid Powers in my daily life.) But ultimately, I write code in order to *accomplish things*, not to pull off parlor tricks. My awe at people who can code fluently without reference materials doesn't make that a sensible end goal for myself. As Simon pointed out, "There's no situation where you'd *have to* write code without an IDE" -- and short of some kind of super-minimal computing post-ecological-disaster scenario, I imagine he's right. If this setup lowers the mental hurdles I have to navigate to sit down and produce some code, it's a good one, given my actual goals and priorities. If I'm going to wrack my brain to produce something from scratch, let it be Ukrainian, not Python.

*Cross-posted to the [Stanford DH blog](https://digitalhumanities.stanford.edu/)*