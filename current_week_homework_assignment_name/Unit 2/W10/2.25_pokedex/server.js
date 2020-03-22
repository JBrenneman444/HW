const express = require("express");
const app = express();
const port = 3000;
const methodOverride = require("method-override");

// DATASET:
const Pokemon = require("./models/pokemon.js");

// MIDDLEWARE:
app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'));

// ROUTES:

// INDEX
app.get("/", (req, res) => {
  res.redirect("/pokemon");
});

app.get("/pokemon", (req, res) => {
  res.render("index.ejs", { data: Pokemon });
});

// NEW
app.get('/pokemon/new',(req,res)=>{
  res.render('new.ejs')
})

// EDIT
app.get('/pokemon/:id/edit', (req, res)=>{
  res.render('edit.ejs', {poke:Pokemon[req.params.id],index:req.params.id}
	);
});

// SHOW
app.get("/pokemon/:id", (req, res) => {
  res.render("show.ejs",{poke:Pokemon[req.params.id] });
});

app.delete('/pokemon/deleteAll', (req, res) => {
  // var crew = scientists.length
  for (i=0;i<Pokemon.length;i++) {
  Pokemon = [] //remove the item from the array
  }
res.redirect('/pokemon');  //redirect back to index route
});

app.delete('/pokemon/:id', (req, res) => {
Pokemon.splice(req.params.id, 1); //remove the item from the array
res.redirect('/pokemon');  //redirect back to index route
});



app.post('/pokemon',(req,res)=>{
  let newPokemon = { // make a proper key pairs / not have a WHOLE object
    name: req.body.name,
    type: req.body.type.split(','),
    img: "https://images-na.ssl-images-amazon.com/images/I/61SpNR2eEZL._AC_SY879_.jpg",
    stats: {
      hp: req.body.hp,
      attack: req.body.attack,
      defense: req.body.defense,
      spattack: req.body.spattack,
      spdefense: req.body.spdefense,
      speed: req.body.speed
    }
  }
  Pokemon.unshift(newPokemon);
  // redirects to the pokedex
  res.redirect('/pokemon' );
})

// 'put' UPDATES existing information with NEW information
app.put('/pokemon/:id', (req, res) => { //:id is the index of our scientists array that we want to change
  let editPokemon = {
    name: req.body.name,
    img: req.body.img,
    type: req.body.type.split(','),
    stats: {
      hp: req.body.hp,
      attack: req.body.attack,
      defense: req.body.defense,
      spattack: req.body.spattack,
      spdefense: req.body.spdefense,
      speed: req.body.speed
    }
  }
	Pokemon[req.params.id] = editPokemon; //in our pokemon array, find the index that is specified in the url (:id). Set that element to the value of req.body (the input data)
	res.redirect('/pokemon'); //redirect to the index page
});

// web server:
app.listen(port, () => {
  console.log(`Pokedex server is listening on port ${port}`);
});

// ================== TO DO LIST ====================== \\
// - have the ability to EDIT existing Pokémon