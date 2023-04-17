(function() {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyFLPMiKDWQbsrwnbdIAnxL2GzvAv0hlKJrXypsZbCQ_4BIGWzFPhDHGJJTOkNCznXn/exec'
  const form = document.forms['google-sheet']

  form.addEventListener('submit', event => {
    event.preventDefault() // Stop form from submitting normally

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log("Email subscription choices submitted."))
      .catch(error => console.error("Looks like there's an error.", error.message))

    document.getElementById('form').style.display = 'none'; // make form invisible
    document.getElementById('form-message').style.display = 'block'; // completion message
  })
})();
