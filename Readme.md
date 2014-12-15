---
---

[toc]

-

Get old content from the [über spreadsheet](https://docs.google.com/spreadsheet/ccc?key=0AuJrhF0oRyeRcnVFTy0tbnotMzZ1MTNCYk5XaTVuZlE&usp=drive_web#gid=0 "list of events on Google Docs")

## Add an upcoming event

**Duplicate one of the an event in [_posts](https://github.com/dannyhope/uxbrighton/edit/gh-pages/_posts "") and make sure the front matter has all this stuff in it:**

| Attribute		| Example value		| Note	|
|----------		|----------		|------		|
| layout:			| event-page |  |
| title:			| UX, Human Factors & Ergonomics |  |
| venue: | Hotel Du Vin | [pick one from the venue list](https://github.com/dannyhope/uxbrighton/edit/gh-pages/_includes/venues.html "") |
| start: | 7pm |  |
| ticket-link: | http://www.eventbrite.co.uk/e/ux-brighton-ux-human-factors-and-ergonomics-tickets-13077411891 |  |
| upcoming: | true |    **Alex, is this correct?** |
| organisers: | - Alex | N.B. Each person should be on their own line [pick from the organisers list](https://github.com/dannyhope/uxbrighton/edit/gh-pages/_includes/organisers.html "") |
| lanyrd-url: | http://lanyrd.com/2013/ux-brighton-oktoberfest/ |  |


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


## Add a stub

- **Past events lacking content**: put this in the front matter: **noinfo: true**
- **Future events not ready to go live**: put this in the front matter: **stub: true**

## People & venues

Duplicate and edit one of the [people](https://github.com/dannyhope/uxbrighton/edit/gh-pages/_includes/organisers.html "") or [venues](https://github.com/dannyhope/uxbrighton/edit/gh-pages/_includes/venues.html "")

## Conference pages

Conference pages appear at 2 URLs so, for technical reasons, we’re forced to store their content in templates ([in the _layouts folder](https://github.com/dannyhope/uxbrighton/tree/gh-pages/_layouts "")), not in the [_posts folder](https://github.com/dannyhope/uxbrighton/tree/gh-pages/_posts ""), which is where the rest of the content lives.

## Strip across the top of all pages

This is in [_includes/header-mini.html](https://github.com/dannyhope/uxbrighton/edit/gh-pages/_includes/header-mini.html "")

## Edit this readme document

[Edit this document in Github](https://github.com/dannyhope/uxbrighton/edit/gh-pages/Readme.md "") 

--------

## Undocumented front matter

- conference: false **?**
- conference: true **?**
- homepage: false **?**
- homepage: true **?**

- published: true **Alex, does this actually do anything?**
- start: null **Alex, is "null" the same as providing no value or just not having a start value?**
- venue: null **Alex, is "null" the same as providing no value?**

------

## Styling, URLs & installation

Is in [technical.md](/technical.md "")
