# How To Generate

## Public API Key Setup

- Go to [this](https://achecker.ca/checker/) site and register an account
- Once registered, go to the profile page and copy and paste the `Web Service ID` field into a file in this directory named `web-service-id.txt`

## Setup

1. Download and install [Python 3.6.X](https://www.python.org/downloads/release/python-368/)
2. Now run `pip install pipenv` in a command prompt
3. Then navigate to this directory in a command prompt and run `pipenv install`

## Running The Script

1. Navigate to this directory in a command prompt and run `pipenv shell`
2. To start generating the accessibility issues, run `python accessibility-scan.py`

## Updating The Sitemap

1. Go to [This XML sitemap generator](https://smallseotools.com/xml-sitemap-generator/)
2. Enter `uxbrighton.org.uk` in to the domain and make the number of pages to crawl 500 (currently gets 108 links but I set to 500 to make sure it gets everything)
