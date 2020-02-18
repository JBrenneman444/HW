const express = require('express')
const app = express()
const port = 3000

const budgetData = require('./models/budget.js') // This is our 'database'.

// see a list of your income and expenditures
// show you one income/expenditure item
// create a new income/expenditure item

// MIDDLEWARE =======================
app.use(express.static('public'))

// ROUTES =======================
app.get('/', (req,res)=>{
    res.send('<a href="/budgets">Budgetr App</a>')
})

app.get('/budgets', (req,res)=>{
    res.render('index.ejs',{budget: budgetData})
})

app.get('/budgets/new', (req,res)=>{
    res.render('new.ejs')
})

app.get('/budgets/:index', (req,res)=>{
    res.render('show.ejs')
})

app.post('/budgets', (req,res)=>{
    res.render('index.ejs')
})

app.listen(port, ()=>{
    console.log('Listening to ' + port)
})