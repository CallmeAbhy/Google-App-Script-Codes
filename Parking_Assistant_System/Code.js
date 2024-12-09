function doGet(e) {
  var HtmlOutput = HtmlService.createTemplateFromFile("search");
  HtmlOutput.search = "";
  return HtmlOutput.evaluate();
}
function doPost(e) {
  var search = e.parameter.search;
  var HtmlOutput = HtmlService.createTemplateFromFile("search");
  HtmlOutput.search = search;
  return HtmlOutput.evaluate();
}

function getSheetData() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Parking");
  var dataRange = sheet.getDataRange();
  var values = dataRange.getValues();
  return values;
}

function getUrl() {
  var url = ScriptApp.getService().getUrl();
  return url;
}
