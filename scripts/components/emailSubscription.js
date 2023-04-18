(function() {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyFLPMiKDWQbsrwnbdIAnxL2GzvAv0hlKJrXypsZbCQ_4BIGWzFPhDHGJJTOkNCznXn/exec'
  const form = document.forms['google-sheet']
  const isJobsPage = document.querySelector('.email-form--jobs')

  // Jobs page: Show the additional email lists when the user types in their email address
  if(isJobsPage) {
    const emailFieldJobs = document.querySelector('.email-form--jobs input[type=email]')

    emailFieldJobs.addEventListener("keyup", () => {
      $('.form-list-add').fadeIn(1000);
    });
  };

  form.addEventListener('submit', event => {
    event.preventDefault() // Stop form from submitting normally

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log("Email subscription choices submitted."))
      .catch(error => console.error("Looks like there's an error.", error.message))

    document.querySelector('#form').style.display = 'none'; // make form invisible
    $('#form-message').fadeIn(1000); // completion message
  })
})();
