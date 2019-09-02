# How to conduct an accessibility audit

## Windows

### Accessibility checker web service id setup

1. Go to the [accessibility checker](https://achecker.ca/checker/) site and register an account
2. Once registered, go to the [profile page](https://achecker.ca/profile/index.php) and copy and paste the `Web Service ID` field into a file in this directory named `web-service-id.txt`
    - Note: this is your private API key so make sure you don't publish it online. The `web-service-id.txt` file is also already in the .gitignore

### Setting the local environment up

1. Download and install [Python 3.6.X](https://www.python.org/downloads/release/python-368/)
2. Now run `pip install pipenv` in a command prompt
3. Then navigate to this directory in a command prompt and run `pipenv install`

### Updating the sitemap

1. Go to this [XML sitemap generator](https://www.xml-sitemaps.com/)
2. Enter `https://uxbri.org/` in to the domain

### Running the accessibility audit process

1. Navigate to this directory in a command prompt and run `pipenv shell`
2. To start generating the accessibility issues, run `python accessibility-scan.py X` where `X` is the amount of URLs to process - you can also leave blank to process all URLs
3. The output is then generated inside of the `output` folder in another folder with the time stamp of when the script was ran

### Updating the ignored-error-id-info.md file

1. Make sure you are in the pipenv shell, if you aren't sure, run `pipenv shell`
2. Run `python get-ignored-ids.py` to generate the markdown file again
