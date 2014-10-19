---
---

**Any changes you commit will be immediately visible on the site. Please [preview your changes first](http://0.0.0.0:4000/ "").**

---------------

## Content

### Add an upcoming event

**Duplicate one of the an event in [_posts](https://github.com/dannyhope/uxbrighton/edit/gh-pages/_posts "") and make sure the front matter has all this stuff in it:**

| Attribute		| Example value		| Note		|
|----------		|----------		|------		|
| title:			| UX, Human Factors & Ergonomics |  |
| venue: | Hotel Du Vin | [pick one from the venue list](https://github.com/dannyhope/uxbrighton/edit/gh-pages/_includes/venues.html "") |
| start: | 7pm |  |
| ticket-link: | http://www.eventbrite.co.uk/e/ux-brighton-ux-human-factors-and-ergonomics-tickets-13077411891 |  |
| upcoming: | true |    **Alex, is this correct?** |
| organnisers: | Alex | [pick from the organisers list](https://github.com/dannyhope/uxbrighton/edit/gh-pages/_includes/organisers.html "") |
| calendar-url: | ????????? | **Alex, is this correct?** |
| lanyrd-url: | http://lanyrd.com/2013/ux-brighton-oktoberfest/ | **Alex, is this correct?** |
| lanyrd: | http://lanyrd.com/2013/ux-brighton-oktoberfest/ | **Alex, this seems redundant, is it there for a reason?** |

### After an event

- mark it as past by adding this in the front matter- 

|Attribute|Value|
|----|--|
|upcoming:|no|

- add videos

      <>

- add slides
- add images
- add tweets, blog posts, photos

### Stubs

- **Past** events we don't have much info about: put this in the front matter: noinfo: true
- **Future** event ideas not ready to go live: put this in the front matter: stub: true

### Add a person or venue

Duplicate and edit one of the [people](https://github.com/dannyhope/uxbrighton/edit/gh-pages/_includes/organisers.html "") or [venues](https://github.com/dannyhope/uxbrighton/edit/gh-pages/_includes/venues.html "")

### Edit a conference page

Conference pages appear at 2 URLs so their content is technically stored in [templates in the _layouts folder](https://github.com/dannyhope/uxbrighton/tree/gh-pages/_layouts ""), not in the [_posts folder](https://github.com/dannyhope/uxbrighton/tree/gh-pages/_posts "") which is where the rest of the content lives).

#### Edit the strip across the top of all pages

This is done in [_includes](https://github.com/dannyhope/uxbrighton/edit/gh-pages/_includes/header-mini.html "")

#### Edit this document

[Edit this document in Github](https://github.com/dannyhope/uxbrighton/edit/gh-pages/Readme.md "") 

-------

## Style etc

### Menu

This is defined in the layout  [nav.html](https://github.com/dannyhope/uxbrighton/edit/gh-pages/_includes/nav.html "")

### Templates

All in [_layouts](https://github.com/dannyhope/uxbrighton/tree/gh-pages/_layouts "")

**Event pages** use 2 templates: The [event-page.html](https://github.com/dannyhope/uxbrighton/edit/gh-pages/_layouts/event-page.html "") template is wrapped in the [default.html](https://github.com/dannyhope/uxbrighton/edit/gh-pages/_layouts/default.html "") one.

### Make a 404 page

Place permalink: /404.html in the front matter to designate a page as a 404

------

## Run the site locally

You will need

- Xcode 
- Xcode Command Line Tools 
- Ruby
- Ruby gems (package manager)
- [Jekyll dependencies](http://jekyllrb.com/docs/installation/)
- In the terminal, type: gem install jekyll
	-  [Jekyll](http://jekyllrb.com/). If you've not worked with Jekyll before, follow the [quick start guide](http://jekyllrb.com/docs/quickstart/)

In the terminal type:
cd /Users/dannyhope/Dropbox/UX\ Brighton\ \(private\)/Repos/uxbrighton
jekyll serve -w

Browse to [http://0.0.0.0:4000/](http://http://0.0.0.0:4000/ "")

-------

## URLs

The following domains should all point to [uxbrighton.org.uk](http://uxbrighton.org.uk ""), the canonical domain. This is set at the 123-reg control panel.

- [uxbri.org](http://uxbri.org "")
- [uxbri.com](http://uxbri.com "")
- [uxbri.co.uk](http://uxbri.co.uk "")

###Subdomains

[Manage subdomains on Dreamhost](http://panel.dreamhost.com "")

Subdomains are used for conferences:

- [2010.uxbrighton.org.uk](http://2010.uxbrighton.org.uk "") goes to [uxbrighton.org.uk/2010](http://uxbrighton.org.uk/2010 "")
- [2011.uxbrighton.org.uk](http://2011.uxbrighton.org.uk "") goes to [uxbrighton.org.uk/2011](http://uxbrighton.org.uk/2011 "")
- [2012.uxbrighton.org.uk](http://2012.uxbrighton.org.uk "") goes to [uxbrighton.org.uk/2012](http://uxbrighton.org.uk/2012 "")
- [2013.uxbrighton.org.uk](http://2013.uxbrighton.org.uk "") goes to [uxbrighton.org.uk/2013](http://uxbrighton.org.uk/2013 "")
- [2014.uxbrighton.org.uk](http://2014.uxbrighton.org.uk "") goes to [uxbrighton.org.uk/2014](http://uxbrighton.org.uk/2014 "")
- [2015.uxbrighton.org.uk](http://2015.uxbrighton.org.uk "") goes to [uxbrighton.org.uk/2015](http://uxbrighton.org.uk/2015 "")

When a conference page is the homepage, should we just show it at the root or at the permalink?

--------

## Undocumented front matter

- categories: [archive] **?**
- conference: false **?**
- conference: true **?**
- homepage: false **?**
- homepage: true **?**

- published: true **Alex, does this actually do anything?**
- start: null **Alex, is "null" the same as providing no value?**
- venue: null **Alex, is "null" the same as providing no value?**