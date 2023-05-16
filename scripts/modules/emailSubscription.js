(function() {
  // Google Apps Script URL
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyFLPMiKDWQbsrwnbdIAnxL2GzvAv0hlKJrXypsZbCQ_4BIGWzFPhDHGJJTOkNCznXn/exec';

  // Get form and page elements
  const form = document.forms['google-sheet'];

  // Create an array of page objects that have an additional email list option
  const pagesWithListAdd = [
    { page: document.querySelector('.email-subscription--home') },
    { page: document.querySelector('.email-subscription--jobs') },
    { page: document.querySelector('.email-subscription--events') }
  ];

  // Function to add an event listener to pages that have an additional email list option
  function addEmailListListener(page) {
    if (page) {
      const emailField = page.querySelector('input[type=email]');
      emailField.addEventListener("keyup", () => {
        $('.form-list-add').fadeIn(1000);
      });
    }
  }

  // Attach event listeners for pages that have an additional email list option
  pagesWithListAdd.forEach(({ page }) => addEmailListListener(page));

  // Checking whether a page has a google-sheet form
  if (form) {
    // Form submission event listener
    form.addEventListener('submit', event => {
      event.preventDefault();

      // On submit, disable the submit button and change the button text
      const submitButton = form.querySelector('input[type=submit]');
      submitButton.value = 'Sending...';
      submitButton.disabled = true;

      // Submit form data using fetch
      fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form)
      })
        .then(response => {
          console.log("Email subscription choices submitted.", response.message);

          // Hide form content after submission -> but handle the subscribe page differently
          const subscribePage = document.querySelector('.email-subscription--subscribe');
          const formContent = subscribePage ? subscribePage.querySelector('.form-content') : document.querySelector('#form');
          formContent.style.display = 'none';

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
