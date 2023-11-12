(function() {
  // Google Apps Script URL. This is the URL of the Google Apps Script that is deployed as a web app.
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwDl9VIJbb0cjo2SslwBFPHfZP8surYJubySb6Y9kgbYZG2svIoartUNs4q_Gz_uznw/exec';

  // Function to add an event listener to the document for email list input
  function addEmailListListener() {
    document.addEventListener("keyup", event => {
      // selecting relevant form email input elements and adding them to an array of selectors
      const selectors = [
        '.email-subscription--home input[type=email]',
        '.email-subscription--jobs input[type=email]',
        '.email-subscription--events input[type=email]',
        '.email-subscription--events-jobs input[type=email]'
      ];

      // Checking if the target matches any of the selectors
      if (event.target.matches(selectors.join(', '))) {
        $('.form-list-add').fadeIn(1000);
      }
    });
  }

  // Checking whether a page has a google-sheet form
  function initializeForm() {
    const form = document.forms['google-sheet'];

    // Checking if form doesn't exist. If not, return
    if (!form) {
      return;
    }

    // Selecting the current page URL and setting the value of the hidden input field - (beginning with the id value, "submitted_from") - to the current page URL
    let currentUrl = window.location.href;
    form.querySelector('[id^="submitted_from"]').value = currentUrl;

    // Attach event listener for form submission
    form.addEventListener('submit', async event => {
      event.preventDefault();

      // Selecting relevant form message elements
      const formPromptMessage = $('.form-message--prompt');
      const formSuccessMessage = $('.form-message--success');
      const formErrorMessage = $('.form-message--error');

      // Checking if any checkboxes are selected
      const checkboxes = form.querySelectorAll('input[type=checkbox]:checked');
      if (checkboxes.length === 0) {
        // No checkboxes selected - return and display prompt message to user to select at least one checkbox option
        console.log("No checkboxes selected.");
        // Display prompt message
        formPromptMessage.fadeIn(500);
        return;
      }

      // Selecting submit button
      const submitButton = form.querySelector('input[type=submit]');

      // Disable submit button and set text to "Sending..."
      submitButton.value = 'Sending...';
      submitButton.disabled = true;

      try {
        // Submitting form data using fetch
        const response = await fetch(scriptURL, {
          method: 'POST',
          body: new FormData(form)
        });

        // Checking if response isn't successful
        if (!response.ok) {
          // Non-successful response (e.g., HTTP error)
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Successful response
        console.log("Email subscription choices submitted.", response.message);

        // Selecting subscribe page email subscription form
        const subscribePage = document.querySelector('.email-subscription--subscribe');

        // If the subscribe page exists, select the form content element. Otherwise, select the element that contains an id that begins with "form"
        const formContent = subscribePage ? subscribePage.querySelector('.form-content') : document.querySelector('[id^="form"]');

        // Hide both the form and the form content elements
        formContent.style.display = 'none';

        // Display success message
        formSuccessMessage.fadeIn(1000);
      } catch (error) {
        // Error during fetch or handling the response
        console.error("Looks like there's an error.", error.message);
        // Display error message
        formErrorMessage.fadeIn(1000);
      } finally {
        // Reset submit / subscribe button text and enable it
        submitButton.value = 'Subscribe';
        submitButton.disabled = false;
      }
    });
  }

  /**
   * This function adds a click event listener to the document.
   * When an anchor tag with href containing '#sign-up' is clicked,
   * the page will smoothly scroll to the form element and focus on the email input field.
   */
  function addSignUpAnchorLinkListener() {
    document.addEventListener('click', event => {
      // Check if the clicked element's href attribute includes '#sign-up'
      if (!event.target.getAttribute('href').includes('#sign-up')) {
        return;
      }

      // Prevent the default action of the event
      event.preventDefault();

      // Find the email subscription element
      const emailSubscriptionElement = document.querySelector('[class*="email-subscription"]');
      if (!emailSubscriptionElement) {
        return;
      }

      // Find the form element
      const formElement = document.querySelector('form[id^="form-"]');
      if (formElement) {
        // Scroll to the form element
        formElement.scrollIntoView({ behavior: 'smooth' });

        // Focus on the email input field
        const emailInput = formElement.querySelector('input[type="email"]');
        if (emailInput) {
          setTimeout(() => {
            emailInput.focus();
          }, 500); // Delay of 500ms
        }
      }
    });
  }

  // Initialize the form when the page loads and attach email list listener
  document.addEventListener('DOMContentLoaded', () => {
    initializeForm();
    addEmailListListener();
    addSignUpAnchorLinkListener();
  });
})();
