---
permalink: /blog/2023/12/21/locked-loom-1-gideon-the-ninth/
title: "The Locked Loom 1: Gideon the Ninth"
date: 2023-12-21
classes: wide
show_date: true
header:
  overlay_image: /assets/images/header_lockedloom1.jpg
  overlay_filter: 0.2
---

I've declared this academic year the Year of the Loom at the [Textile Makerspace](https://textilemakerspace.stanford.edu/). Last March I replaced my desk with a floor loom without knowing the first thing about them, but since September I've been making a lot of progress on making sense of weaving as a textile craft. (The [School of Sweet Georgia](https://www.schoolofsweetgeorgia.com/) has been a big help.)

I've woven the occurrences of "computer", "archive", and "librarian" in Star Trek: TOS novels in connection with a [paper I co-wrote about the data landscape of Star Trek](https://vector-bsfa.com/2023/12/02/the-librarian-the-computer-the-android-and-big-data/). I've woven the messages in my library group's Slack channel between August-November 2022. I've been begging friends to send me their favorite data because I want to practice weaving while thinking through its affordances as a data visualization medium. This has turned out to be harder than I expected, because even though most of my friends are digital humanists, they _still_ react a little funny when asked for their favorite data.

So I ended up making my own data, as I often do. I was struggling through Anne Leckie's _Ancillary Justice_ when my pal Liz Grumbach recommended _Gideon the Ninth_, shortly after Halloween. (She'd gone as Harrowhark Nonagesimus, but didn't want to tell me at first because Harrow starts off so mean.) I really enjoyed it, and the idea occurred to do some basic text analysis and weave _that_. (_Note: spoilers ahead for 'Gideon the Ninth'_.)

![Quinn and the locked loom 1 weaving](/assets/images/lockedloom1-quinnweaving.jpg)

## Making the data

The actual code I used was very hacked together: it split the book into chapters, then extracted all dialogue, then looked for the names `Griddle`, `Nav`, `Gideon`, `Harrow[hark]`, `Nonagesimus`, and the small list of colorful alternate names I could think of, extracting the sentence where they occurred. But I didn't care about what most people call our two protagonists: I wanted how they address each other. It was only a couple hundred entries, and it felt like it'd be faster to check manually by reading the sentences. Ultimately, I got a pointer to a [better list of names](https://solomonara.tumblr.com/post/668025855696650240/things-harrow-calls-gideon) thanks to Jaj Karajgikar. (Bless the fan community for doing the important close-reading work here! Digital humanists kill for lists like this.) I just searched for those additional colorful epithets using classic Ctrl + F and fit them into the right spots in my spreadsheet.

There are, of course, more clever and computational ways to do this: I could've run the book through David Bamman's [BookNLP](https://github.com/booknlp/booknlp), then tried to use its quote attribution to identify speech by Gideon and Harrow, and then extracted entities from it and reviewed all those. But I'm not sure how much time it woud've saved in the end, and a list like the one on Tumblr is gold. All said and done, I probably only spent 60-90 minutes on the data prep.

## The colors

Black was a must, and black-and-white seemed obvious. I asked Liz what colors she associated with Gideon; she said orange (made sense, Gideon's hair), white, and gold (I hadn't read book 2 yet but was willing to roll with it).

I mapped gold to "Griddle" and orange to "Nav". For the third "creative name" color, I found a bronze yarn. "Harrow" would be a plain black yarn, and "Nonagesimus" would be the black-and-white. I had a black-with-colorful-flecks yarn for the "creative names".

I wanted to mark the chapters, and given the focalized narrative on Gideon, I went with a orange-to-red variegated yarn that also varied thickness. But what of the chapters where they don't address one another by name (or, potentially, interact at all)? Using the warp/weft patterns from "Creative Projects on a Little Loom", I decided I'd do a pattern of six thin black or white threads that would make for a nice-looking design for chapters with no data. Because I can't manage to ever keep things simple, I also got the idea in my head to spin some of the black yarn myself, and use a yarn that was thicker after every murder. In the end, this didn't quite work (you can't tell the difference between finding the ashes of Protesilaus and when Isaac and Jeannemarie die) because I didn't appreciate how big of a difference you need for it to be visible in a weaving. You can definitely tell the difference between the "no interaction" pattern at the beginning of the book and the end, though, where the black yarn is thick enough to distort the pattern.

![Black and white pattern, thin yarn](/assets/images/lockedloom1-bw1.jpg)
![Black and white pattern, thick yarn](/assets/images/lockedloom1-bw2.jpg)

As I was finishing the weaving and thinking ahead to the sequels, I realized that I wanted to bring God/John in, because he'd probably be unavoidable in weaving 3. So for that, I picked a fluffy black yarn with bronze specks.

![Fluffy black and bronze yarn](/assets/images/lockedloom1-jod.jpg)

## The warp

Not gonna lie: I had recently acquired a variable-dent reed for my rigid heddle loom, and I really wanted to try it out. I came up with the idea of using it to chart how frequently Gideon and Harrow were (not) interacting. It was a little impressionistic: I lined up the chapters where I had data, noted where (and how big) the gaps were, and started sliding different reed pieces in. There's a couple places where there's more than one chapter where Gideon and Harrow don't interact, and I used the smallest-dent reed pieces for those. The parts where they're interacting a lot -- at the beginning and end -- got the largest-dent reed pieces. I used the same colors for the warp as I planned for the weft, distributing the yarns based on which reed they would best fit.

![Variable dent reed](/assets/images/lockedloom1-reed.jpg)

These days, I warp the loom at work, because I don't have anywhere at home as long and flat as the two tables I have in my office.

![Warping the loom](/assets/images/lockedloom1-warping.jpg)

I don't know how much the problem is inherent to using so many different-dent reed pieces together, how much is my lack of skill in warping a loom, or other complicating factors, but the end result was that the thin yarns were pretty well-tensioned, but the chunkier the yarn got, the soggier the tension got.

![Sagging warp threads](/assets/images/lockedloom1-sagging.jpg)

For the weaving process to work at all (read: even with a lot of manual fiddling with the shed), I ultimately resorted to using a bunch of magic clips to keep the thicker yarns from drooping beyond usability.

![Weaving while using a lot of clips to hold tension](/assets/images/lockedloom1-clips.jpg)

## The weft

The weaving process was straightforward, if annoying due to dealing with the variable tension issue: one weft yarn for every name a protagonist used to refer to her counterpart, one orange/red yarn to indicate chapter breaks, and the 6 black/white pattern when there were no names in a chapter.

![Weaving while using a lot of clips to hold tension](/assets/images/lockedloom1-weft.jpg)

Things got a little more interesting at the end: I didn't want the epilogue to be just the black/white pattern. Instead, I attempted two passes of leno weaving, which involves twisting the warp threads over each other, then sort of skewering them with a weft thread. The first was with the gold-color weft thread, and the second was with the fluffy God weft thread. After packing the threads in a bit as part of tying off the weaving, it's not all that visible, but I don't hate that: it's not that obvious what happened with Gideon, either.

![Twisted warp threads](/assets/images/lockedloom1-twist.jpg)

## What I've learned

A few takeaways from this project:

- I still beat the weft really unevenly and need to work on that. The variable warp didn't help, but I spent a lot of time desperately rearranging weft when chapter dividers were going diagonal. (That said: having chapter dividers was useful as a set of checkpoints.)
- I really like the visualization potential of variable warp, but I need to work on the tension issues. Trying to tighten things up when I took the weaving off the loom led to some bubbles as I tightened unevenly; some of that was fixable with wet blocking.
- I should really spend some time practicing leno weaving and other fancy warp-related techniques; I think they'll be useful in sequel weavings.

Overall, though, I'm pretty happy with what I ended up with as my first attempt to weave a novel. Given the amount of text-to-data work I do, this feels like a fruitful way to get more data sets to work with and think through how to use the different affordances of textiles for data visualization.

![Panorama photo of the weaving](/assets/images/lockedloom1-panorama.jpg)

I put together an attempt at a panorama photo (in reality, the shape isn't this skewed), and my next step for this one is to work on annotating it, with something like [Storymap](https://storymap.knightlab.com/gigapixel/), so you can zoom in on "gloom mistress" or any other favorite epithets.
