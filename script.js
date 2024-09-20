const csvString = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

const rows = csvString.split('\n');
const header = rows[0].split(',');
const numcol = header.length;

let newArray = [];

for (let i = 0; i < rows.length; i++) {
  let col = rows[i].split(',');
  newArray.push(col);
}

console.log(newArray)