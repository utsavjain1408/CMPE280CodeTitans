var express = require('express')
var bodyParser = require('body-parser')

const PORT = 3051

var app = express()

app.listen(PORT, () =>{
    console.log(`Titan Pizza Server is now serving at ${PORT}`)
})

app.get('/', (req, res)=>{
    res.send(`CODE TITAS FOR THE WIN!!`)
})

