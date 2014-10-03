**IMPORTANT**: Any changes you commit will be immediately visible on the site. Please preview your changes first.

# Summary of front matter values

(Could be broken down by desired effect)

**permalink: /404.html** designates it as a 404 page
**layout: default**
**layout: event-page**
**layout: conference-2012** …2013, …2014 is where all of the content is in the conference template, not the Markdown document
**categories: [archive]** ?
**conference: false** ?
**conference: true** ?
**homepage: false** ?
**homepage: true** ?
**noinfo: true** ?
**stub: yes** ?

**title** defines the title of the page (which appears in the window’s title bar)
**upcoming: no** ?
**published: true** ?
**start: 7pm** ?
**start: null** ?
**start:** ?
**venue: null** ?
**venue:** ?
**venue: Fabrica** …Lighthouse etc are defined in**?**
**organisers:**
	- **Alex**
	- **Patrick** rendered into the bottom of the event page

**lanyrd-url: http://lanyrd.com/2013/ux-brighton-oktoberfest/** ?
**lanyrd: http://lanyrd.com/2013/uxbrighton-june/**
**calendar-url: #** ?

# Things an editor may want to do

## Make a new volunteer
## Make an event as past
## Add event meta data such as title, date, venue, start time and Lanyrd page
## Add the ticket widget
## Edit a template
## Change the appearance of a template (CSS)

Templates are all in /_layout

## Edit a conference page

Conference pages appear at 2 URLs so the content is technically stored in a template, all templates are in _layouts, that’s where you’ll find what you need

## Add an event

* Go to _posts
* Duplicate an existing event and modify the front matter

## Make an event invisible

make sure that the front matter includes

upcoming: 
stub: yes

## Run the site locally

You will need

- Xcode
- Xcode Command Line Tools 
- Ruby
- Ruby gems (package manager)
- (In the terminal, type) gem install jekyll
	-  [Jekyll](http://jekyllrb.com/). If you've not worked with Jekyll before, follow the [quick start guide](http://jekyllrb.com/docs/quickstart/), 
- Ensure you have all the [dependencies](http://jekyllrb.com/docs/installation/) installed first.

In the terminal type:
cd /Users/dannyhope/Dropbox/UX\ Brighton\ \(private\)/Repos/uxbrightonn
jekyll serve -w

Browse to http://0.0.0.0:4000/

## Domain stuff

The following domains point to uxbrighton.org.uk, the canonical domain. This is set at the 123-reg control panel.

uxbri.org	→ uxbrighton.org.uk
uxbri.com	→ uxbrighton.org.uk
uxbri.co.uk	→ uxbrighton.org.uk

Subdomains are set at panel.dreamhost.com

Subdomains for conferences are forwarded to folders thus:

2010.uxbrighton.org.uk → uxbrighton.org.uk/2010
2011.uxbrighton.org.uk → uxbrighton.org.uk/2011
2012.uxbrighton.org.uk → uxbrighton.org.uk/2012
2013.uxbrighton.org.uk → uxbrighton.org.uk/2013
2014.uxbrighton.org.uk → uxbrighton.org.uk/2014
2015.uxbrighton.org.uk → uxbrighton.org.uk/2015

When a conference page is the homepage, should we just show it at the root or at the permalink?