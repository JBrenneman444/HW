// Build an express application that enables users to count down the number of bottles of beer. Don't like beer? Pass around bottles of soda, kombucha, or milk etc.

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req,res)=>{
    res.send("99 Bottles of beer on the wall<br><a href='/98'>take one down, pass it around</a>")
})

app.get('/0', (req,res)=>{
    var oldNumber = Number(req.params.number)
    var newNumber = oldNumber - 1
    res.send("<a href='/'>More beer?</a>")
})

app.get('/:number', (req,res)=>{
    var oldNumber = Number(req.params.number)
    var newNumber = oldNumber - 1
    res.send(`${oldNumber} Bottles of beer on the wall<br><a href='/${newNumber}'>take one down, pass it around</a>`)
})

app.listen(port, () => {
    console.log('listening to port ', port)
})