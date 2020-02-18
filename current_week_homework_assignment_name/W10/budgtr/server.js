const express = require('express')
const app = express()
const port = 3000

// see a list of your income and expenditures
// show you one income/expenditure item
// create a new income/expenditure item

// ROUTES =======================
app.get('/', (req,res)=>{
    res.send('<a href="/budgets">Budgetr App</a>')
})

app.get('/budgets', (req,res)=>{
    res.render('index.ejs')
})

app.get('/budgets/:index', (req,res)=>{
    res.send('show.ejs')
})

app.get('/budgets/new', (req,res)=>{
    res.send('new.ejs')
})

app.post('/budgets', (req,res)=>{
    res.render('index.ejs')
})

app.listen(port, ()=>{
    console.log('Listening to ' + port)
})