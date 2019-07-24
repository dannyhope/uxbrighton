import os
import sys
from datetime import datetime
import re
import requests
from xml.etree.ElementTree import fromstring, ParseError
from xmljson import badgerfish as bf

PARENT_DIR = os.path.join(os.getcwd(), 'output')
GUIDELINES = 'WCAG2-A'

with open('./web-service-id.txt', 'r') as file_handle:
    WEB_SERVICE_ID = file_handle.read()

API_LINK = f'https://achecker.ca/checkacc.php?guide={GUIDELINES}&id={WEB_SERVICE_ID}'
try:
    num_urls_to_check = int(sys.argv[1])
except (ValueError, IndexError):
    num_urls_to_check = None

if os.path.isfile(PARENT_DIR):
    raise Exception('Specified parent directory is a file')
elif not os.path.isdir(PARENT_DIR):
    os.mkdir(PARENT_DIR)

timestamp_folder_name = datetime.utcnow().strftime('%Y%m%dT%H%M%S')
output_dir = os.path.join(PARENT_DIR, timestamp_folder_name)

if os.path.isfile(output_dir):
    raise Exception(output_dir + ' is already a file')
elif not os.path.isdir(output_dir):
    os.mkdir(output_dir)


with open('./sitemap.xml', 'r') as sitemap:
    contents = sitemap.read()

data = bf.data(fromstring(contents))


def find_urls(data):
    if type(data) == list or not data:
        return data
    else:
        for key in data:
            output = find_urls(data[key])
            if output:
                return output


url_data = find_urls(data)
urls = []


for url in url_data:
    for key in url:
        urls.append(url[key]['$'])


iter_limit = num_urls_to_check if num_urls_to_check is not None else len(urls)
iterate = True

for i in range(iter_limit):
    iterate = True
    while iterate:
        iterate = False
        url = urls[i]
        print(f'\n({i + 1}/{iter_limit}): Checking {url}')
        response = requests.get(API_LINK + '&output=rest&uri=' + url)
        cleaned_content = re.sub(rb'&[a-z]+;', lambda match: b'&amp;' + match.group(0)[1:], response.content)
        try:
            xml_response = bf.data(fromstring(cleaned_content))
        except ParseError:
            iterate = True
            print('Got a ParseError. Going to check again ...')
            continue
        summary = xml_response['resultset']['summary']
        if summary['status']['$'] == 'PASS':
            print('Passed! moving on ...')
            continue
        print('Failed with ' + str(summary['NumOfErrors']['$']) + ' errors, ' + str(summary['NumOfLikelyProblems']['$']) +
              ' likely problems and ' + str(summary['NumOfPotentialProblems']['$']) + ' potential problems')

        response = requests.get(API_LINK + '&uri=' + url)
        file_name = ''.join([char for char in url if char.isalnum()]) + '.html'
        file_loc = os.path.join(output_dir, file_name)
        print('Saving output to file under: ' + file_name)
        with open(file_loc, 'wb') as f:
            f.write(response.content)
