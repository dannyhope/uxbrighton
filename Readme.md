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

### Mark it as past

Set **upcoming:no** in the front matter

### Add video/slides

    <div class="responsive-height-limiter"><div class="embed-container vga"><iframe src="XXX" frameborder="0" scrolling="no" allowfullscreen></iframe></div></div>

Copy/paste the above code into your page and replace XXX with the URL of the media you’re embedding, e.g. `http://www.slideshare.net/slideshow/embed_code/35707261`

### Add text from tweets

Copy/paste this into the page

    > put the text of the tweet here
    —put the name/link here

### Add links to blog posts (at the top of the page)

In Markdown, this: `[My example](http://example.com "my tooltip")`

Renders as [My example](http://example.com "my tooltip")

### Add/link to photos


## Add a stub

- **Past** events lacking content: put this in the front matter: **noinfo: true**
- **Future** events not ready to go live: put this in the front matter: **stub: true**

## Add a person or venue

Duplicate and edit one of the [people](https://github.com/dannyhope/uxbrighton/edit/gh-pages/_includes/organisers.html "") or [venues](https://github.com/dannyhope/uxbrighton/edit/gh-pages/_includes/venues.html "")

## Edit a conference page

Conference pages appear at 2 URLs so their content is technically stored in [templates in the _layouts folder](https://github.com/dannyhope/uxbrighton/tree/gh-pages/_layouts ""), not in the [_posts folder](https://github.com/dannyhope/uxbrighton/tree/gh-pages/_posts "") which is where the rest of the content lives).

## Edit the strip across the top of all pages

This is done in [_includes/header-mini.html](https://github.com/dannyhope/uxbrighton/edit/gh-pages/_includes/header-mini.html "")

## Edit this document

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
