// Description: Google Apps Script to handle form submissions
// NOTE: This script is used in conjunction with the emailSubscription.js javascript file
// IMPORTANT: You must create a Google Sheet and a Google Apps Script to use this code. The Google Sheet must have a tab named "Sheet1" and the Google Apps Script must be attached to the Google Sheet.
//            The script is named Code.gs and is located in the Google Apps Script editor. The Google Apps Script must be published as a web app and the URL must be added to the scriptURL variable in the emailSubscription.js file.

const sheetName = 'Sheet1' // Name of the tab you're using in Google Sheets
const scriptProp = PropertiesService.getScriptProperties()

function intialSetup () {
  var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  scriptProp.setProperty('key', activeSpreadsheet.getId())
}

function doPost (e) {
  const lock = LockService.getScriptLock()
  lock.tryLock(10000)

  try {
  const doc = SpreadsheetApp.openById(scriptProp.getProperty('key'))
  const sheet = doc.getSheetByName(sheetName)

  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
  const nextRow = sheet.getLastRow() + 1

  const newRow = headers.map(function(header) {
    return header === 'timestamp' ? new Date() : e.parameter[header]
  })

  sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow])

  return ContentService
    .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
    .setMimeType(ContentService.MimeType.JSON)
  }

  catch (e) {
  return ContentService
    .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
    .setMimeType(ContentService.MimeType.JSON)
  }

  finally {
    lock.releaseLock()
  }
}
