import os
import sys
import re
import requests
from xml.etree.ElementTree import fromstring
from xmljson import badgerfish as bf


with open('./web-service-id.txt', 'r') as file_handle:
    WEB_SERVICE_ID = file_handle.read()

API_LINK = f'https://achecker.ca/checkacc.php?id={WEB_SERVICE_ID}'
OUTPUT_DIR = os.path.join(os.getcwd(), 'output')
try:
    NUM_URLS_TO_CHECK = int(sys.argv[1])
except (ValueError, IndexError):
    NUM_URLS_TO_CHECK = None

if os.path.isfile(OUTPUT_DIR):
    raise Exception("Specified output directory is a file")
elif not os.path.isdir(OUTPUT_DIR):
    os.mkdir(OUTPUT_DIR)


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


for i in range(NUM_URLS_TO_CHECK if NUM_URLS_TO_CHECK else len(url_data)):
    url = urls[i]
    print('\nChecking ' + url)
    response = requests.get(API_LINK + '&output=rest&uri=' + url)
    cleaned_content = re.sub(rb'&[a-z]+;', lambda match: b'&amp;' + match.group(0)[1:], response.content)
    xml_response = bf.data(fromstring(cleaned_content))
    summary = xml_response['resultset']['summary']
    if summary['status']['$'] == 'PASS':
        print('Passed! moving on ...')
        continue
    print('Failed with ' + str(summary['NumOfErrors']['$']) + ' errors, ' + str(summary['NumOfLikelyProblems']['$']) +
          ' likely problems and ' + str(summary['NumOfPotentialProblems']['$']) + ' potential problems')

    response = requests.get(API_LINK + '&uri=' + url)
    file_name = ''.join([char for char in url if char.isalnum()]) + '.html'
    file_loc = os.path.join(OUTPUT_DIR, file_name)
    print('Saving output to file under: ' + file_name)
    with open(file_loc, 'wb') as f:
        f.write(response.content)
