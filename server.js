require('dotenv').config();
const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
const Pokemon = require('./models/pokemon')
const jsxViewEngine = require('jsx-view-engine')
const mongoose = require("mongoose");
// const pokemon = require('./models/pokemon');

//Database connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
  console.log('connected to mongo');
});

app.set('view engine', 'jsx')
app.set("views", "./views")
app.engine('jsx', jsxViewEngine())

//Middleware
app.use(express.urlencoded({ extended: false }));


// app.get('/', (req, res) =>{
//     res.send("Welcome to the Pokemon App!")
// })

//INDEX
app.get('/pokemon', async (request, response) =>{
    // //.render to display the Index.jsx file
    // response.render('Index', {pokemon})
    try {
      const foundPokemon = await Pokemon.find({});
      console.log(foundPokemon);
      response.status(200).render('Index', {
        pokemon: foundPokemon,
      });
    } catch (err) {
      response.status(400).send(err);
    } 
})
//New
app.get('/pokemon/new', (req, res) => {
  res.render('New');
});

//delete
//update
//create
app.post('/pokemon', async (req, res) => {
  try {
    // req.body.readyToEat = req.body.readyToEat === 'on';

    const createdPokemon = await Pokemon.create(req.body);

    res.status(201).redirect('/pokemon');
  } catch (err) {
    res.status(400).send(err);
  }
});

//show

app.get('/pokemon/:id', async(req, res) => {
  try {
    const foundPokemon = await Pokemon.findById(req.params.id);

    //second param of the render method must be an object
    res.render('Show', {
      //there will be a variable available inside the jsx file called fruit, its value is fruits[req.params.indexOfFruitsArray]
      pokemon: foundPokemon,
    });
  } catch (err) {
    res.status(400).send(err);
  }
});
  
  //   res.render('Show', {
  //     pokemon: pokemon[req.params.id],
  //   });
  // });

app.listen(PORT, ()=>{
    console.log("Gotta Catch 'Em All!")
})