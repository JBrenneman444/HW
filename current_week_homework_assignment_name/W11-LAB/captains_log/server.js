const express = require('express');
const app = express();
const port = 3000



// MIDDLEWARE
app.use(express.urlencoded({extended:true}));

// CREATE / POST
app.post('/logs',(req,res)=>{
    if (req.body.shipIsBroken === 'on') { //if checked, req.body.shipIsBroken is set to 'on'
        req.body.shipIsBroken = true;
    } else { //if not checked, req.body.shipIsBroken is undefined
        req.body.shipIsBroken = false;
    }
    res.send(req.body)
    console.log(req.body)
});

// NEW
app.get('/logs/new', (req, res)=>{
    res.render('new.ejs');
});

// Web Server:
app.listen(port, (req,res)=>{
    console.log("Listening...")
})