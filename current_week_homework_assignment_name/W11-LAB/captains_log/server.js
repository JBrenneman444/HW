const express = require('express');
const app = express();
const port = 3000

// DEPENDENCIES + Connects MONGOOSE to MongoDB
const mongoose = require('mongoose');
const seedData = require('./models/seed_logs.js');
const Logs = require('./models/logs.js');

//... and then farther down the file
mongoose.connect('mongodb://localhost:27017/captainsLogDB', { useNewUrlParser: true});
mongoose.connection.once('open', ()=> {
    console.log('MongoDB Connected!');
});


//include the method-override package
const methodOverride = require('method-override');

//use methodOverride.  We'll be adding a query parameter to our delete form named _method
app.use(methodOverride('_method'));

// MIDDLEWARE
app.use(express.urlencoded({extended:true}));

const Log = require('./models/logs.js');

// NEW
app.get('/logs/new', (req, res)=>{
    res.render('new.ejs');
});

// CREATE / POST
app.post('/logs',(req,res)=>{
    if (req.body.shipIsBroken === 'on') { //if checked, req.body.shipIsBroken is set to 'on'
        req.body.shipIsBroken = true;
    } else { //if not checked, req.body.shipIsBroken is undefined
        req.body.shipIsBroken = false;
    }
    Log.create(req.body, (error, createdLog)=>{
        console.log(createdLog);
        res.redirect('/logs');
    });
});

// INDEX
app.get('/', (req, res)=>{
    res.redirect('/logs');
})

app.get('/logs', (req, res)=>{
    Log.find({}, (error, allLogs)=>{
        res.render('index.ejs', {
            logs: allLogs
        });
    });
});

// EDIT
app.get('/logs/:id/edit', (req, res)=>{
    Log.findById(req.params.id, (err, foundLog)=>{ //find the log
        res.render(
        'edit.ejs',
        {
          logs: foundLog //pass in found log
        }
      );
    });
  });

// PUT Route
app.put('/logs/:id', (req, res)=>{
if(req.body.shipIsBroken === 'on'){
    req.body.shipIsBroken = true;
} else {
    req.body.shipIsBroken = false;
}
Log.findByIdAndUpdate(req.params.id, req.body, (err, updatedModel)=>{
    res.redirect('/logs');
});
});
  
//
// SHOW
app.get('/logs/:id',(req,res)=>{
    Log.findById(req.params.id, (err, foundLog) => { // CALLBACK name doesn't matter
        res.render("show.ejs", {
          logs: foundLog // doesn't matter what you call the KEY TITLE
        });
      });
})


// DELETE
app.delete('/logs/:id', (req, res)=>{
    Log.findByIdAndRemove(req.params.id, (err, data)=>{
        res.redirect('/logs');//redirect back to fruits index
    });
  });  

// Web Server:
app.listen(port, (req,res)=>{
    console.log("Listening...")
})