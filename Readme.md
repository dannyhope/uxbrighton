---
---
[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/dannyhope/uxbrighton?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

**Any changes you commit will be immediately visible on the site. Please [preview your changes first](http://0.0.0.0:4000/ "").**

---------------

## How to add content

### [Have a look at the über spreadsheet for information that needs moving into the site](https://docs.google.com/spreadsheet/ccc?key=0AuJrhF0oRyeRcnVFTy0tbnotMzZ1MTNCYk5XaTVuZlE&usp=drive_web#gid=0 "lsit of events on Google Docs")

### Add an upcoming event

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
| calendar-url: | ????????? | **Alex, is this correct?** |
| lanyrd-url: | http://lanyrd.com/2013/ux-brighton-oktoberfest/ | **Alex, is this correct?** |
| lanyrd: | http://lanyrd.com/2013/ux-brighton-oktoberfest/ | **Alex, this seems redundant, is it there for a reason?** |

### After an event

#### Mark it as past

Set **upcoming:no** in the front matter

#### Add videos or slide decks

Paste this code into the page and replace the URL in the middle

    <div class="responsive-height-limiter"><div class="embed-container vga"><iframe src="http://www.slideshare.net/slideshow/embed_code/35707261" frameborder="0" scrolling="no" allowfullscreen></iframe></div></div>

#### Add tweets (as quotes)

#### Link to blog posts

Put followup links at the top of the page.

##### Code

    [Look at this example website](http://example.com "example url")

##### Rendition

[Look at this example website](http://example.com "example url")

#### Add/link to photos

### Stubs

- **Past** events we don't have much info about: put this in the front matter: noinfo: true
- **Future** event ideas not ready to go live: put this in the front matter: stub: true

### Add a person or venue

Duplicate and edit one of the [people](https://github.com/dannyhope/uxbrighton/edit/gh-pages/_includes/organisers.html "") or [venues](https://github.com/dannyhope/uxbrighton/edit/gh-pages/_includes/venues.html "")

### Edit a conference page

Conference pages appear at 2 URLs so their content is technically stored in [templates in the _layouts folder](https://github.com/dannyhope/uxbrighton/tree/gh-pages/_layouts ""), not in the [_posts folder](https://github.com/dannyhope/uxbrighton/tree/gh-pages/_posts "") which is where the rest of the content lives).

#### Edit the strip across the top of all pages

This is done in [_includes/header-mini.html](https://github.com/dannyhope/uxbrighton/edit/gh-pages/_includes/header-mini.html "")

#### Edit this document

[Edit this document in Github](https://github.com/dannyhope/uxbrighton/edit/gh-pages/Readme.md "") 

--------

## Undocumented front matter

- categories: [archive] **?**
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