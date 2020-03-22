const express = require('express')
const app = express()
const port = 3000
const methodOverride = require('method-override');

// DEPENDENCIES + Connects MONGOOSE to MongoDB
const mongoose = require('mongoose');

// MONGOOSE -- !! don't forget to >> CHANGE LOCATION << in FILE URL !! --
mongoose.connect('mongodb://localhost:27017/storeDB', { useNewUrlParser: true});
mongoose.connection.once('open', ()=> {
    console.log('MongoDB Connected!');
});

// MIDDLEWARE
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'))


const productsController = require('./controllers/products.js')
app.use('/store',productsController) // <--- now any reference in CONTROLLER file to /store doesn't need '/store' in the URL

// ======= ROUTES =======
app.get('/',(req,res)=>{
    res.redirect('/store')
})

// ============== Web Server ==============
app.listen(port, (req,res)=>{
    console.log("Listening...")
})