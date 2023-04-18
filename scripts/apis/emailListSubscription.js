// NOTE: This file is not used in the project. It is just a reference for the EmailOctopus API calls for now
// TODO: Decide whether we use something like this in the future. For now not recommended because it's not secure
// Being able to see the API key in the browser is not good.

// API variables
const api = {
  url: 'https://emailoctopus.com/api/1.6/lists/',
  key: '806aed39-b849-4fd1-87ff-c5816505d301',
  listId_A: 'd57fc4bc-d983-11ed-97a1-d1924912cdff',
  listId_B: 'fd561856-d983-11ed-ae81-fdccfe662294',
  listId_C: '11747c1a-d984-11ed-bec0-c1ae38869683',
};

// Example POST request data object (email address, fields, tags)
const emailData = {
  email_address: 'brootaylor_gday@gmail.com',
  fields: {
    FirstName: 'Bruce',
    LastName: 'Taylor'
  },
  tags: ['tagA', 'tagB', 'tagC']
};

// POST method implementation:
async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "no-cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "include", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

// `list_testA`
// List ID: d57fc4bc-d983-11ed-97a1-d1924912cdff
postData(`${api.url}${api.listId_A}/contacts?api_key=${api.key}`, emailData).then((data) => {
  console.log(data); // JSON data parsed by `data.json()` call
});

// `list_testB`
// List ID: fd561856-d983-11ed-ae81-fdccfe662294
postData(`${api.url}${api.listId_B}/contacts?api_key=${api.key}`, emailData).then((data) => {
  console.log(data); // JSON data parsed by `data.json()` call
});

// `list_testC`
// List ID: 11747c1a-d984-11ed-bec0-c1ae38869683
postData(`${api.url}${api.listId_C}/contacts?api_key=${api.key}`, emailData).then((data) => {
  console.log(data); // JSON data parsed by `data.json()` call
});
