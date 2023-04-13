const api = {
  url: 'https://emailoctopus.com/api/1.6/lists/',
  key: '806aed39-b849-4fd1-87ff-c5816505d301',
  listId_A: 'd57fc4bc-d983-11ed-97a1-d1924912cdff',
  listId_B: 'fd561856-d983-11ed-ae81-fdccfe662294',
  listId_C: '11747c1a-d984-11ed-bec0-c1ae38869683',
};

const options = {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: '{"email_address":"brootaylor_test_dannnnnnny@gmail.com","tags":["tagA","tagB","tagC"]}'
};

// `list_testA`
// List ID: d57fc4bc-d983-11ed-97a1-d1924912cdff
fetch(`${api.url}${api.listId_A}/contacts?api_key=${api.key}`, options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

// `list_testB`
// List ID: fd561856-d983-11ed-ae81-fdccfe662294
fetch(`${api.url}${api.listId_B}/contacts?api_key=${api.key}`, options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

// `list_testC`
// List ID: 11747c1a-d984-11ed-bec0-c1ae38869683
fetch(`${api.url}${api.listId_C}/contacts?api_key=${api.key}`, options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
