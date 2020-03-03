const express = require('express');
const router = express.Router();
const Product = require("../models/products.js");

///////////////////////////////////////////////
// Routes:

// NEW
router.get('/new', (req, res)=>{
    res.render('new.ejs');
});

// CREATE / POST
router.post('/',(req,res)=>{
    if(req.body.img == ''){
      req.body.img = "https://image.shutterstock.com/image-vector/no-image-available-sign-absence-260nw-373243873.jpg";
    } else {
    // do nothing
    }
    Product.create(req.body, (error, createdProduct)=>{
        console.log(createdProduct);
        res.redirect('/store');
    });
});

// INDEX
router.get('/', (req, res)=>{
    Product.find({}, (error, allProducts)=>{
        res.render('index.ejs', {
            products: allProducts
        });
    });
});

router.get('/seed', async (req, res) => {
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
router.get('/:id/edit', (req, res)=>{
    Product.findById(req.params.id, (err, foundProduct)=>{ //find the log
        res.render(
        'edit.ejs',
        {
          products: foundProduct //pass in found log
        }
      );
    });
  });

// PUT Route for BUY BUTTON
router.put('/:id/bought', (req, res) => {
  Product.findByIdAndUpdate(
    req.params.id,
    { $inc: { qty: -1}},
    (err, updatedModel)=>{
      console.log(err)
    res.redirect(`/store/${req.params.id}`)
  });
});


// UPDATE / PUT Route
router.put('/:id', (req, res)=>{
if(req.body.img == ''){
    req.body.img = "https://image.shutterstock.com/image-vector/no-image-available-sign-absence-260nw-373243873.jpg";
} else {
// do nothing
}
    Product.findByIdAndUpdate(req.params.id, req.body, (err, updatedModel)=>{
      res.redirect(`/store/${req.params.id}`)
    });
});
  
// SHOW
router.get('/:id',(req,res)=>{
    Product.findById(req.params.id, (err, foundProduct) => { // CALLBACK name doesn't matter
        res.render("show.ejs", {
          products: foundProduct // doesn't matter what you call the KEY TITLE
        });
      });
})

// DELETE
router.delete('/:id', (req, res)=>{
    Product.findByIdAndRemove(req.params.id, (err, data)=>{
        res.redirect('/store');//redirect back to store
    });
  });  


///////////////////////////////////////////////
// ROUTES
module.exports = router;