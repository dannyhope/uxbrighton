(function() {
  // Google Apps Script URL
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyFLPMiKDWQbsrwnbdIAnxL2GzvAv0hlKJrXypsZbCQ_4BIGWzFPhDHGJJTOkNCznXn/exec';

  // Get form and page elements
  const form = document.forms['google-sheet'];
  const homePage = document.querySelector('.email-subscription--home');
  const subscribePage = document.querySelector('.email-subscription--subscribe');
  const jobsPage = document.querySelector('.email-subscription--jobs');
  const eventsPage = document.querySelector('.email-subscription--events');

  // Create an array of page objects
  const pages = [
    { page: homePage },
    { page: jobsPage },
    { page: eventsPage }
  ];

  // Function to add email list event listener
  function addEmailListListener(page) {
    if (page) {
      const emailField = page.querySelector('input[type=email]');
      emailField.addEventListener("keyup", () => {
        $('.form-list-add').fadeIn(1000);
      });
    }
  }

  // Attach event listeners for email lists on each page
  pages.forEach(({ page }) => {
    addEmailListListener(page);
  });

  if (form) {
    // Form submission event listener
    form.addEventListener('submit', event => {
      event.preventDefault();

      // Submit form data using fetch
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
          console.log("Email subscription choices submitted.", response.message);

          // Hide form content after submission
          if (subscribePage) {
            subscribePage.querySelector('.form-content').style.display = 'none';
          } else {
            document.querySelector('#form').style.display = 'none';
          }

          // Show completion message (success)
          $('.form-message--success').fadeIn(1000);
        })
        .catch(error => {
          console.error("Looks like there's an error.", error.message);
          // Show completion message (error)
          $('.form-message--error').fadeIn(1000);
        });
    });
  }
})();

