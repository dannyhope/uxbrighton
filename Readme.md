---
---

**Any changes you commit will be immediately visible on the site. Please [preview your changes first](http://0.0.0.0:4000/ "").**

---------------

## Add an event

**Duplicate one of the an event in [_posts](https://github.com/dannyhope/uxbrighton/edit/gh-pages/_posts "") and make sure the front matter has all this stuff in it:**

| Attribute		| Example		| Note		|
|----------		|----------		|------		|
| title:			| UX, Human Factors & Ergonomics |  |
| venue: | Hotel Du Vin | [pick one from the venue list](https://github.com/dannyhope/uxbrighton/edit/gh-pages/_includes/venues.html "") |
| start: | 7pm |  |
| ticket-link: | http://www.eventbrite.co.uk/e/ux-brighton-ux-human-factors-and-ergonomics-tickets-13077411891 |  |
| upcoming: | true |    **Alex, is this correct?** |
| lanyrd-url: | http://lanyrd.com/2013/ux-brighton-oktoberfest/ | **Alex, is this correct?** |
| lanyrd: | http://lanyrd.com/2013/ux-brighton-oktoberfest/ | **Alex, this seems redundant, is it there for a reason?** |

**Alex, how do we add the event date?**

## After an event

- mark it as past by adding **upcoming: no** to the front matter - **Alex, is this correct?**
- add video
- add slides
- add images
- add tweets, blog posts, photos

## Stubs

- **Past** events we don't have much info about: put this in the front matter: noinfo: true
- **Future** event ideas not ready to go live: put this in the front matter: stub: true

## Add a person or venue

Duplicate and edit one of the [people](https://github.com/dannyhope/uxbrighton/edit/gh-pages/_includes/organisers.html "") or [venues](https://github.com/dannyhope/uxbrighton/edit/gh-pages/_includes/venues.html "")

## Edit a conference page

Main conference content is stored in the [_layouts](https://github.com/dannyhope/uxbrighton/tree/gh-pages/_layouts "") folder (not in the [_posts](https://github.com/dannyhope/uxbrighton/tree/gh-pages/_posts "") which is where the rest of the content lives).

### Edit the strip that goes across the top of all pages

This is done in [_includes](https://github.com/dannyhope/uxbrighton/tree/gh-pages/_includes/header-mini.html "")

### Edit a conference page

Conference pages appear at 2 URLs so the content is technically stored in a template, all templates are in _layouts, that’s where you’ll find what you need

### Edit this document

[Edit this document in Github](https://github.com/dannyhope/uxbrighton/edit/gh-pages/Readme.md "") 

-------

## Templates etc.

### Menu

This is defined in [the nav include](https://github.com/dannyhope/uxbrighton/tree/gh-pages/_includes > nav.html "")

### Template

All of the templates are in [_layouts](https://github.com/dannyhope/uxbrighton/tree/gh-pages/_layouts "")

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

- layout: default
- layout: event-page
- -
- categories: [archive] ?
- conference: false ?
- conference: true ?
- homepage: false ?
- homepage: true ?
- -
- published: true ?
- start: 7pm ?
- start: null ?
- start: ?
- venue: null ?
- venue: ?
- venue: Fabrica …Lighthouse etc are defined in?
- organisers:
	- Alex
	- Patrick rendered into the bottom of the event page
- -
- calendar-url: # ?