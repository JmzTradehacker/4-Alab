const csvString = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

const rows = csvString.split('\n');
const header = rows[0].split(',');
const numcol = header.length;
const obArr = [];
let totalAge = 0;
let newArray = [];

for (let i = 1; i < rows.length; i++) {
  let col = rows[i].split(',');
  newArray.push(col);
}

for (let i = 0; i < newArray.length; i++) {
  const row = newArray[i];
  const object = {};

  for (let j = 0; j < numcol; j++) {
    const key = header[j].toLowerCase();
    const value = row[j];
    object[key] = value;
  }

  obArr.push(object);
}

obArr.pop();
obArr.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });
obArr.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

for (let i = 0; i < obArr.length; i++) {
  const age = parseInt(obArr[i].age, 0);
  totalAge += age;
}

const aveAge = totalAge / obArr.length;

console.log("Total Age:", totalAge);
console.log("Average Age:", aveAge);