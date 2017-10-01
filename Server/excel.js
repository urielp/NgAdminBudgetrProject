/**
 * Created by Uriel on 16/07/2017.
 */
XLSX = require('xlsx');
var workbook = XLSX.readFile('test.xlsx');
console.log(workbook);
