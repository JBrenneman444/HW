const express = require('express')
const app = express()
const port = 3000
const Product = require('./models/products.js');

// DEPENDENCIES + Connects MONGOOSE to MongoDB
const mongoose = require('mongoose');
const methodOverride = require('method-override');

// MONGOOSE -- !! don't forget to >> CHANGE LOCATION << in FILE URL !! --
mongoose.connect('mongodb://localhost:27017/storeDB', { useNewUrlParser: true});
mongoose.connection.once('open', ()=> {
    console.log('MongoDB Connected!');
});

// MIDDLEWARE
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'))


// ======= ROUTES =======
app.get('/',(req,res)=>{
    res.redirect('/store')
})

// NEW
app.get('/store/new', (req, res)=>{
    res.render('new.ejs');
});

// CREATE / POST
app.post('/store',(req,res)=>{
    // if (req.body.shipIsBroken === 'on') { //if checked, req.body.shipIsBroken is set to 'on'
    //     req.body.shipIsBroken = true;
    // } else { //if not checked, req.body.shipIsBroken is undefined
    //     req.body.shipIsBroken = false;
    // }
    Product.create(req.body, (error, createdProduct)=>{
        console.log(createdProduct);
        res.redirect('/store');
    });
});

// INDEX
app.get('/store', (req, res)=>{
    Product.find({}, (error, allProducts)=>{
        res.render('index.ejs', {
            products: allProducts
        });
    });
});

app.get('/store/seed', async (req, res) => {
    const newProducts =
      [
        {
          name: 'Beans',
          description: 'A small pile of beans. Buy more beans for a big pile of beans.',
          img: 'https://cdn3.bigcommerce.com/s-a6pgxdjc7w/products/1075/images/967/416130__50605.1467418920.1280.1280.jpg?c=2',
          price: 5,
          qty: 99
        }, {
          name: 'Bones',
          description: 'It\'s just a bag of bones.',
          img: 'http://bluelips.com/prod_images_large/bones1.jpg',
          price: 25,
          qty: 0
        }, {
          name: 'Bins',
          description: 'A stack of colorful bins for your beans and bones.',
          img: 'http://www.clipartbest.com/cliparts/9cz/rMM/9czrMMBcE.jpeg',
          price: 7000,
          qty: 1
        }
      ]
  
    try {
      const seedItems = await Product.create(newProducts)
      res.send(seedItems)
    } catch (err) {
      res.send(err.message)
    }
  })

// EDIT
app.get('/store/:id/edit', (req, res)=>{
    Product.findById(req.params.id, (err, foundProduct)=>{ //find the log
        res.render(
        'edit.ejs',
        {
          products: foundProduct //pass in found log
        }
      );
    });
  });

// PUT Route
app.put('/store/:id', (req, res)=>{
// if(req.body.shipIsBroken === 'on'){
//     req.body.shipIsBroken = true;
// } else {
//     req.body.shipIsBroken = false;
// }
Product.findByIdAndUpdate(req.params.id, req.body, (err, updatedModel)=>{
    res.redirect('/store');
});
});
  
// SHOW
app.get('/store/:id',(req,res)=>{
    Product.findById(req.params.id, (err, foundProduct) => { // CALLBACK name doesn't matter
        res.render("show.ejs", {
          products: foundProduct // doesn't matter what you call the KEY TITLE
        });
      });
})

// DELETE
app.delete('/store/:id', (req, res)=>{
    Product.findByIdAndRemove(req.params.id, (err, data)=>{
        res.redirect('/store');//redirect back to fruits index
    });
  });  

// ============== Web Server ==============
app.listen(port, (req,res)=>{
    console.log("Listening...")
})