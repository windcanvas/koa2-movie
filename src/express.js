const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hi Luke')
})

app.listen(2334)