(function() {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyFLPMiKDWQbsrwnbdIAnxL2GzvAv0hlKJrXypsZbCQ_4BIGWzFPhDHGJJTOkNCznXn/exec' // Google Apps Script URL
  const form = document.forms['google-sheet']
  const isEmailHomePage = document.querySelector('.email-subscription--home')
  const isEmailSubscribePage = document.querySelector('.email-subscription--subscribe')
  const isEmailJobsPage = document.querySelector('.email-subscription--jobs')

  // Home page: Show the additional email lists when the user types in their email address
  if(isEmailHomePage) {
    const emailFieldHome = document.querySelector('.email-subscription--home input[type=email]')

    emailFieldHome.addEventListener("keyup", () => {
      $('.form-list-add').fadeIn(1000);
    });
  };

  // Jobs page: Show the additional email lists when the user types in their email address
  if(isEmailJobsPage) {
    const emailFieldJobs = document.querySelector('.email-subscription--jobs input[type=email]')

    emailFieldJobs.addEventListener("keyup", () => {
      $('.form-list-add').fadeIn(1000);
    });
  };

  // What to do when the form is submitted
  form.addEventListener('submit', event => {
    event.preventDefault() // Stop form from submitting normally

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})

      // Console log the response from the Google Apps Script
      .then(response => console.log("Email subscription choices submitted.", response.message))
      .catch(error => console.error("Looks like there's an error.", error.message))

    // Handle the subscribe page email subscription form a little differently
    if(isEmailSubscribePage) {
      document.querySelector('.form-content').style.display = 'none'; // make all other content invisible
    } else {
      document.querySelector('#form').style.display = 'none'; // make only the form invisible
    }

    $('.form-message').fadeIn(1000); // completion message fadein
  })
})();
