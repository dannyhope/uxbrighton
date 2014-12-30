---
---

## Where to get old content to update this site

Get old content from the [über spreadsheet](https://docs.google.com/spreadsheet/ccc?key=0AuJrhF0oRyeRcnVFTy0tbnotMzZ1MTNCYk5XaTVuZlE&usp=drive_web#gid=0 "list of events on Google Docs")

## Add events

**[Create a new file in _posts](https://github.com/dannyhope/uxbrighton/new/gh-pages/_posts "Add a file to _posts using Github")**

    ---
    layout: event-page	
    title: [e.g. UX, Human Factors & Ergonomics]
    venue: [e.g. Hotel Du Vin or Fabrica or Lighthouse more are in venues.html]
    start: [e.g. 7pm]
    ticket-link: [e.g. http://www.eventbrite.co.uk/e/ux-brighton-ux-human-factors-and-ergonomics-tickets-13077411891]
    upcoming: true
    organisers:
    - Alex
    - Tim
    - Patrick
    - Luke
    - Danny
    - Tom
    - Harry
    - Jay
    - Jenni
    lanyrd-url: [e.g. http://lanyrd.com/2013/ux-brighton-oktoberfest/]
    stub: true [hide the event from the event list]
    noinfo: true [adds "Stub" in the menu]
    ---
    
    # Event title
    
    ## Talk title
    
    ## Talk title
    
### Prevent the conference page from taking over the homepage

In the root, change the layout of index.html from "conference-2014" to "homepage".

## After an event

### Mark the event as past

Set **upcoming:no** in the front matter

### Video & slides

    <div class="responsive-height-limiter"><div class="embed-container vga"><iframe src="XXX" frameborder="0" scrolling="no" allowfullscreen></iframe></div></div>

Copy/paste the above code into your page and replace XXX with the **embed URL (not the page URL)** of the media you’re embedding, e.g.

http://www.slideshare.net/slideshow/**embed_code**/35707261

https://www.youtube.com/**embed**/yxmgYdrl4lI

### Tweets & quotes

Don’t embed tweets. Instead format them thus;

    > [content of the tweet]
    —[text](URL "optional title")

### Blog posts

At the top of the page, add: `[My example](http://example.com "my tooltip")`

Renders as [My example](http://example.com "my tooltip")

### Add/link to photos

## People & venues

Duplicate and edit one of the [people](https://github.com/dannyhope/uxbrighton/edit/gh-pages/_includes/organisers.html "") or [venues](https://github.com/dannyhope/uxbrighton/edit/gh-pages/_includes/venues.html "")

## Conference pages

Conference pages appear at 2 URLs so, for technical reasons, we’re forced to store their content in templates ([in the _layouts folder](https://github.com/dannyhope/uxbrighton/tree/gh-pages/_layouts "")), not in the [_posts folder](https://github.com/dannyhope/uxbrighton/tree/gh-pages/_posts ""), which is where the rest of the content lives.

## Strip across the top of all pages

This is in [_includes/header-mini.html](https://github.com/dannyhope/uxbrighton/edit/gh-pages/_includes/header-mini.html "")

## Edit this readme document

[Edit this document in Github](https://github.com/dannyhope/uxbrighton/edit/gh-pages/Readme.md "") 

------

# Frontmatter, styling, URLs & installation

Are in [technical.md](/technical.md "")
