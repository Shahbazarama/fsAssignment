var fs = require('fs');
var path = require('path');

// Challenge 1

console.log(fs.readFileSync(path.join('.','challenge1', 'info.txt')).toString())

// Challenge 2

let oldText = fs.readFileSync(path.join('.', 'challenge2', 'info.txt')).toString()
oldText += 'Raffi Shahbazian'
fs.writeFileSync(path.join('.', 'challenge2', 'info.txt'), oldText)
// Challenge 3

// Challenge 4

// Challenge 5

// Challenge 6
