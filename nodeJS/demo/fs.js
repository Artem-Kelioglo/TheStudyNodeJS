//file sestem
const fs = require('fs');
const path = require('path');
 const filePath = path.join(__dirname, 'test', 'text.txt')
// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log('папка создана')
// })


// fs.writeFile(filePath, 'hello nodeJs', (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log('файл создан')
// })


// fs.appendFile(filePath, ' \nhello again', (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log('файл создан')
// })


fs.readFile(filePath,'utf-8', (err,content) => {
    if (err) {
    throw err;
  }
//  const data=Buffer.from(content)
//   console.log('content:',data.toString())
console.log('content:',content)
})