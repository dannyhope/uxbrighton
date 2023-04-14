// Example POST method implementation:
async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "no-cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "include", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

postData("https://emailoctopus.com/api/1.6/lists/d57fc4bc-d983-11ed-97a1-d1924912cdff/contacts?api_key=806aed39-b849-4fd1-87ff-c5816505d301", { "email_address":"brootaylor_test-hello-fetch@gmail.com", "fields":{"FirstName": "Bruce", "LastName": "Taylor"}, "tags":["tagA","tagB","tagC"] }).then((data) => {
  console.log(data); // JSON data parsed by `data.json()` call
});
