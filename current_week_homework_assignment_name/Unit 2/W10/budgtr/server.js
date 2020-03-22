const express = require('express')
const app = express()
const port = 3000

const budgetData = require('./models/budget.js') // This is our 'database'.
// see a list of your income and expenditures
// show you one income/expenditure item
// create a new income/expenditure item

// MIDDLEWARE =======================
app.use(express.urlencoded({extended:false}))
    // "req.body" is UNDEFINED
    // this ADDS body as a KEY and sets it to whatever was SENT in the BODY
// app.use(express.json())
app.use(express.static('public'))

// ROUTES =======================
app.get('/', (req,res)=>{
    res.send('<a href="/budgets">Budgetr App</a>')
})

app.get('/budgets/', (req,res)=>{
    res.render('index.ejs',{budget: budgetData})
})

app.get('/budgets/new', (req,res)=>{
    res.render('new.ejs')
})

app.get('/budgets/:index', (req,res)=>{
    res.render('show.ejs',{budget: budgetData[req.params.index]})
})

app.post('/budgets', (req,res)=>{
    
    let newExpense = {} // in order to make proper key pairs / not have a WHOLE object
    newExpense.date = req.body.date
    newExpense.name = req.body.name
    newExpense.from = req.body.from
    newExpense.amount = req.body.amount
    newExpense.tags = req.body.tags

    budgetData.push(newExpense)

    console.log(budgetData)
    res.redirect('/budgets') // sends user to app.GET fruits route
})

app.listen(port, ()=>{
    console.log('Listening to ' + port)
})