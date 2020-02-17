//  User Stories
    // When user clicks on the name, they will be taken to that pokemon's SHOW page, and will see the pokemon's name and image.

//=================================================
// PREREQUISITES ==================================
//=================================================
const express = require('express')
const app = express()
const port = 3000

//=================================================
// EVERYTHING ELSE ================================
//=================================================


//=================================================
// ROUTES (MOST specific to LEAST) ================
//=================================================
app.get('/pokemon',(req,res)=>{
    res.render('index.ejs')
})

// When user goes to /pokemon route they see index of pokemon - names of each pokemon


app.get('/',(req,res)=>{
    res.send('<h1>Welcome to the Pokemon App!</h1><a href="/pokemon">Go to Pokedex</a>')
})

//=================================================
// LISTENERS ======================================
//=================================================
app.listen(3000, ()=>{
    console.log('Server is LISTENING on port 3000')
})