// Description: Google Apps Script to handle form submissions
// NOTE: This script is used in conjunction with the emailSubscription.js javascript file
// IMPORTANT: You must create a Google Sheet and a Google Apps Script to use this code. The Google Sheet must have a tab named "Sheet1" and the Google Apps Script must be attached to the Google Sheet.
//            The script is named Code.gs and is located in the Google Apps Script editor. The Google Apps Script must be published as a web app and the URL must be added to the scriptURL variable in the emailSubscription.js file.

const sheetName = 'Sheet1'; // Name of the tab you're using in Google Sheets
const scriptProp = PropertiesService.getScriptProperties();

function initialSetup() {
  // Gets the currently active spreadsheet and sets its ID as a property in the script properties
  const activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  scriptProp.setProperty('key', activeSpreadsheet.getId());
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000); // Attempts to acquire a lock on the script for 10 seconds

  try {
    const doc = SpreadsheetApp.openById(scriptProp.getProperty('key')); // Opens the spreadsheet using the stored ID
    const sheet = doc.getSheetByName(sheetName); // Gets the sheet by name

    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]; // Retrieves the headers of the sheet
    const nextRow = sheet.getLastRow() + 1; // Determines the next available row for inserting data

    // Creates a new row of data based on the headers and the received parameters
    const newRow = headers.map(function (header) {
      return header === 'timestamp' ? new Date().toLocaleString() : e.parameter[header];
    });

    // Sets the values of the new row in the sheet
    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow]);

    // Returns a JSON response indicating success and the inserted row number
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (e) {
    // Returns a JSON response indicating an error and the error details
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock(); // Releases the lock on the script
  }
}
