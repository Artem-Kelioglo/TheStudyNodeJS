const path = require('path')
console.log("название файла", path.basename(__filename))
console.log("название директории", path.dirname(__filename))
console.log("Расширение файла", path.extname(__filename))
console.log("parse", path.parse(__filename).name)

console.log( path.join(__dirname,'server',"index.html"))