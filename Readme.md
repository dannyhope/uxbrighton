---
---

## Where to get old content to update this site

Get old content from the [über spreadsheet](https://docs.google.com/spreadsheet/ccc?key=0AuJrhF0oRyeRcnVFTy0tbnotMzZ1MTNCYk5XaTVuZlE&usp=drive_web#gid=0 "list of events on Google Docs")

## Add an event page

**[Create a new file in _posts](https://github.com/dannyhope/uxbrighton/new/gh-pages/_posts "Add a file to _posts using Github")**

Name the file with the event date and event title, e.g.

2015-01-09-amazing-event.md

    ---
    layout: event-page	
    title: e.g. UX, Human Factors & Ergonomics
    venue: e.g. Hotel Du Vin or Fabrica or Lighthouse more are in venues.html
    start: e.g. 7pm
    ticket-link: e.g. http://www.eventbrite.co.uk/e/ux-brighton-ux-human-factors-and-ergonomics-tickets-13077411891
    upcoming: true / false
    lanyrd-url: e.g. http://lanyrd.com/2013/ux-brighton-oktoberfest/
    upcoming: true
    stub: false
    noinfo: true
    ---

    ## Talk title
    
    ## Talk title
    
    ## Organisers [delete as applicable]
    
    - [Luke](http://uxbrighton.org.uk/about/#luke "")
    - [Alex](http://uxbrighton.org.uk/about/#alex "")
    - [Tim](http://uxbrighton.org.uk/about/#tim "")
    - [Patrick](http://uxbrighton.org.uk/about/#patrick "")
    - [Danny](http://uxbrighton.org.uk/about/#danny "")
    - [Tom](http://uxbrighton.org.uk/about/#tom "")
    - [Harry](http://uxbrighton.org.uk/about/#harry "")
    - [Jay](http://uxbrighton.org.uk/about/#jay "")
    - [Jenni](http://uxbrighton.org.uk/about/#jenni "")
    - [Rob](http://uxbrighton.org.uk/about/#rob "")
    
### Make it public

Add this to the frontmatter:

    upcoming: true
    stub: false

### Mark a page as being empty (these pages are sometimes known as stubs)

Add this to the frontmatter

    noinfo: true
    
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

Photos from flickr.com get some automatic styling so they'll float when on desktop and fill the screen on mobile. Ideally ask Emmeline to upload your photos to the [UX Brighton flickr account](https://www.flickr.com/photos/uxbrighton) and then also link to the relevant album, e.g.

    ![Kevin O'Neill speaking](https://farm8.staticflickr.com/7292/15930421673_fbe5d64c05.jpg)
    ![Kevin speaking at Fabrica](https://farm9.staticflickr.com/8628/16549504962_c048fc315d.jpg)
    ![Audience at Fabrica](https://farm8.staticflickr.com/7309/16548923641_8d73058db5.jpg)
    [View all photos from this event](https://www.flickr.com/photos/uxbrighton/sets/72157651397567815/)

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
