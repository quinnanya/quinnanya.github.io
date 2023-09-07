---
permalink: /blog/2023/09/07/finding-close-enough-text/
title: "Finding 'close enough' text"
date: 2023-09-07
classes: wide
show_date: true
header:
  overlay_image: /assets/images/header_dsc.jpg
  overlay_filter: 0.2
---

For people new to text analysis, it can be hard to wrap your head around the gap between what's completely obvious to you as a human and what's easily detectible by a computer. Especially when working with humanities data, there's a lot of "almosts". Is _Pale Fire_ the same as _Pale Fire: A Novel_? Unless you're researching the nuances of book titles (or rather, [book cover conventions](https://www.vox.com/the-goods/2019/2/14/18223954/a-novel-book-cover-reading-line) that can find their way into metadata), those are functionally the same -- but if you search for duplicate rows in your spreadsheet, this pair won't come up because they're not **exactly** the same.

One of my favorite Python libraries for finding these near-matches is the adorably-named [FuzzyWuzzy](https://pypi.org/project/fuzzywuzzy/), which has some simple and effective options for "fuzzy string matching", the name for the problem we're trying to solve here. It uses Levenshtein distance -- a way to measure the difference between two sequences -- to calculate a score between two strings, or pieces of text. The simple ratio (`fuzz.ratio`) gets you the distance between your two pieces of text in their entirety, so if one of them contains extra information (e.g. _The Baby-Sitters Club #1: Kristy's Great Idea_ vs _Kristy's Great Idea_), it will push the score down because that information is missing from one of the texts, which makes them less similar. What I usually use instead is the partial ratio (`fuzz.partial_ratio`), which takes the shortest piece of text, and scores to what extent that text exists (in its entirety, or altered) within the longer text.

As an example, I've used this with a metadata sheet that has a column with what a matching filename _should_ look like (author last name, hyphen, then the title with words lower-cased and separated by underscores). I've compared the values in the metadata sheet with the actual list of files that _actually exist_ in a directory (which may have some extra cruft attached, like book series or series number), and then had the code print out all matches above a certain threshold -- 90 to start, then skimming the results for 80 to pick up anything I missed (`if fuzz.partial_ratio(line, file) > 90:`)

Data cleaning is always a slog, but FuzzyWuzzy cuts down on the pain by bringing the computer's evaluation of what's "the same" to something a little closer to mine.
