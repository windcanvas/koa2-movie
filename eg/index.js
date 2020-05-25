import { promisify } from 'util'
import { resolve as r } from 'path'
// import { readFile, writeFileSync as wfs } from 'fs' 
// import * as qs from 'querystring'

// promisify(readFile)(r(__dirname, '../package.json'))
//   .then(data => {
//       data = JSON.parse(data)

//       console.log(data.name)

//       wfs(r(__dirname, './name'), String(data.name), 'utf8')
//   })

import { promisfy } from 'util'
import { readFile } from 'fs'

// import { name } from './ex'
// import { getName } from './ex'
// import age from './ex'
// import { 
//   name2 as name3,
//   getName2 as getName3,
//   age as age2
// } from './ex'

// console.log('name3 ', name3)
// console.log('getName3', getName3())
// console.log(age2)
// console.log(getName())
 
async function init () {
    let data = await promisify(readFile)(r(__dirname, '../package.json'))

    data  = JSON.parse(data)

    console.log(data.name)
}

init()