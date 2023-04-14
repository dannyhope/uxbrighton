// API variables
const api = {
  url: 'https://emailoctopus.com/api/1.6/lists/',
  key: '806aed39-b849-4fd1-87ff-c5816505d301',
  listId_A: 'd57fc4bc-d983-11ed-97a1-d1924912cdff',
  listId_B: 'fd561856-d983-11ed-ae81-fdccfe662294',
  listId_C: '11747c1a-d984-11ed-bec0-c1ae38869683',
};

// POST request options
const options = {
  method: 'POST',
  mode: 'no-cors',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  },
  body: '{"email_address":"brootaylor_test-hello-again@gmail.com", "fields":{"FirstName": "Bruce", "LastName": "Taylor"}, "tags":["tagA","tagB","tagC"]}'
};

// Element variables
// const emailBtn = document.querySelector('.form-email-subscribe .button');

// write click event to run fetch request
// emailBtn.addEventListener('click', (event) => {

  // console.log('clicked', event.target);

// `list_testA`
// List ID: d57fc4bc-d983-11ed-97a1-d1924912cdff
fetch(`${api.url}${api.listId_A}/contacts?api_key=${api.key}`, options)
  .then(response => response.json())
  .then(response => console.log(response))

// `list_testB`
// List ID: fd561856-d983-11ed-ae81-fdccfe662294
fetch(`${api.url}${api.listId_B}/contacts?api_key=${api.key}`, options)
  .then(response => response.json())
  .then(response => console.log(response))

// `list_testC`
// List ID: 11747c1a-d984-11ed-bec0-c1ae38869683
fetch(`${api.url}${api.listId_C}/contacts?api_key=${api.key}`, options)
  .then(response => response.json())
  .then(response => console.log(response))

// });
