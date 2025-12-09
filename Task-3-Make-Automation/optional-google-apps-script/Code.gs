function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var name = data.name || '';
    var email = data.email || '';
    var ss = SpreadsheetApp.openById('YOUR_SHEET_ID'); // replace
    var sheet = ss.getSheetByName('Responses') || ss.getSheets()[0];
    sheet.appendRow([new Date(), name, email]);
    if (email) {
      MailApp.sendEmail(email, "Thanks for signing up - NxtWave", "Hi " + name + ",\n\nThanks for signing up. We'll reach out soon.\n\n- NxtWave");
    }
    return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: err.message })).setMimeType(ContentService.MimeType.JSON);
  }
}
