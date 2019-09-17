# Start with the Ops manual 👇

The [UX Brighton Ops Manual](https://docs.google.com/document/d/1t12ZPHP_JP2uj69qeO9Dyljep3zaSu3UpmwLCvR4qdg/edit# ) is the starting point for all UX Brighton technical tasks.

## Frontmatter

| Attribute		| Example value		| Note	|
|----------		|----------		|------		|
| layout:			| event-page |
| title:			| UX, Human Factors & Ergonomics |
| venue: | Hotel Du Vin | [pick one from the venue list](https://github.com/dannyhope/uxbrighton/edit/gh-pages/_includes/venues.html "") or leave blank |
| start: | 7pm | Or leave blank |
| ticket-link: | http://www.eventbrite.co.uk/e/ux-brighton-ux-human-factors-and-ergonomics-tickets-13077411891 |  Or leave blank. Page will say "Details about this event are coming soon"  |
| upcoming: | true / false |    |
| organisers: | - Alex | N.B. Each person should be on their own line [pick from the organisers list](https://github.com/dannyhope/uxbrighton/edit/gh-pages/_includes/organisers.html "") |
| lanyrd-url: | http://lanyrd.com/2013/ux-brighton-oktoberfest/ |
|supporters:|  - name: Interaction Design Foundation<br>link-url: http://example.com/<br>image-url: http://example.com/logo.jpg  | Optional - use if you need logos & links at the bottom of an event page for supporters or sponsors. See [the UX for Kids event](http://uxbrighton.org.uk/UX-for-kids/) ([here's the event .md file](https://github.com/dannyhope/uxbrighton/blob/gh-pages/_posts/2015-03-10-UX-for-kids.md)) for an example.

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
