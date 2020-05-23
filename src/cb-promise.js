const fs = require('fs')

// fs.readFile('./package.json', (err, data) => {
//     if(err) return console.log(err)

//     // JSON.parse() 方法用于将一个 JSON 字符串转换为对象
//     data = JSON.parse(data)

//     console.log(data.name)
// })

// function readFileAsync(path) {
//     return new Promise((resolve, reject) => {
//         fs.readFile(path, (err, data) => {
//             if(err) reject(err)
//             else resolve(data)
//         })
//     })
// }

// readFileAsync('./package.json')
//    .then(data => {
//        data = JSON.parse(data)

//        console.log(data.name)
//    })
//    .catch(err => {
//        console.log(err)
//    })

   const util = require('util')

   util.promisify(fs.readFile)('./package.json')
     .then(JSON.parse)
     .then(data => {
         console.log(data.name)
     })
     .catch(err => {
         console.log(err)
     })
