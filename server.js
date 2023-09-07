const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
const pokemon = require('./models/pokemon')
const jsxViewEngine = require('jsx-view-engine')

app.set('view engine', 'jsx')
app.set("views", "./views")
app.engine('jsx', jsxViewEngine())


app.get('/', (req, res) =>{
    res.send("Welcome to the Pokemon App!")
})

app.get('/pokemon', (request, response) =>{
    //.render to display the Index.jsx file
 
    response.render('Index', {pokemon})
})

app.get('/pokemon/:id', (req, res) => {
    res.render('Show', {
      pokemon: pokemon[req.params.id],
    });
  });

app.listen(PORT, ()=>{
    console.log("Gotta Catch 'Em All!")
})