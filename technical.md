## Frontmatter

| Attribute		| Example value		| Note	|
|----------		|----------		|------		|
| layout:			| event-page |
| title:			| UX, Human Factors & Ergonomics |
| venue: | Hotel Du Vin | [pick one from the venue list](https://github.com/dannyhope/uxbrighton/edit/gh-pages/_includes/venues.html "") |
| start: | 7pm |
| ticket-link: | http://www.eventbrite.co.uk/e/ux-brighton-ux-human-factors-and-ergonomics-tickets-13077411891 |
| upcoming: | true |    **Alex, is this correct?** |
| organisers: | - Alex | N.B. Each person should be on their own line [pick from the organisers list](https://github.com/dannyhope/uxbrighton/edit/gh-pages/_includes/organisers.html "") |
| lanyrd-url: | http://lanyrd.com/2013/ux-brighton-oktoberfest/ |

## Style etc

### CSS

The main CSS file is in /css/style.css

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