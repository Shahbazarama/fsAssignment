var fs = require('fs');
var path = require('path');

// Challenge 1

console.log(fs.readFileSync(path.join('.','challenge1', 'info.txt')).toString())

// Challenge 2

// let oldText = fs.readFileSync(path.join('.', 'challenge2', 'info.txt')).toString()
// oldText += 'Raffi Shahbazian'
// fs.writeFileSync(path.join('.', 'challenge2', 'info.txt'), oldText)

// Challenge 3

// fs.renameSync(path.join('.', 'challenge3', 'binfo.txt'), path.join('.', 'challenge3', 'info.txt'))

// Challenge 4
//
// fs.mkdirSync(path.join('.', 'challenge4', 'copyfolder'))
// fs.copyFileSync(path.join('.', 'challenge4', 'info.txt'), path.join('.', 'challenge4', 'copyfolder', 'info.txt'))

// Challenge 5

let oldString = fs.readFileSync(path.join('.', 'challenge5', 'info.txt')).toString()
oldString = oldString.replace(/-/g, ' ')
fs.writeFileSync(path.join('.', 'challenge5', 'info.txt'), oldString)
// Challenge 6
