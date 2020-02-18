const express = require('express')
const app = express()
const port = 3000

// see a list of your income and expenditures
// show you one income/expenditure item
// create a new income/expenditure item

// Index
// GET /budgets
// Show
// GET /budgets/:index
// New
// GET /budgets/new
// Create
// POST /budgets

// ROUTES =======================
app.get('/', (req,res)=>{
    res.send('<a href="#">Budgetr App</a>')
})

app.listen(port, ()=>{
    console.log('Listening to ' + port)
})