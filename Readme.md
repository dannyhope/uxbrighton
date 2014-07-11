# UX Brighton beta site:

## How to edit event pages

UX Brighton uses [Prose.io](http://prose.io/#dannyhope/uxbrighton/tree/gh-pages/_posts), a simple content editor for the Jekyll blogging platform. 

### To add speakers and talk descriptions

- Head over to [http://prose.io/#dannyhope/uxbrighton/tree/gh-pages/_posts](http://prose.io/#dannyhope/uxbrighton/tree/gh-pages/_posts)
- Select the page you want to edit
- Make your changes
- Select "Changes to submit" and commit your changes. 

### To add event meta data such as title, date, venue, start time and Lanyrd page

TODO

**IMPORTANT**: Any changes you commit will be immediately visible on the site. Please preview your changes first.

## Run the site locally

Running a local version of the UX Brighton website requires a few more steps:

- You will need [Jekyll](http://jekyllrb.com/). If you've not worked with Jekyll before, follow the [quick start guide](http://jekyllrb.com/docs/quickstart/), 
- Ensure you have all the [dependencies](http://jekyllrb.com/docs/installation/) installed first.

In the terminal type:
cd /Users/dannyhope/Dropbox/UX\ Brighton\ \(private\)/Repos/uxbrightonn
jekyll serve -w


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