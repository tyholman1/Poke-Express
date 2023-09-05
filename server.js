const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
const pokemon = require('./models/pokemon')
const jsxViewEngine = require('jsx-view-engine')

app.set('view engine', 'jsx')
app.set("views", "./views")
app.engine('jsx', jsxViewEngine())


app.get('/pokemon', (request, response) =>{
    response.render('Index', {pokemon})
})


app.listen(PORT, ()=>{
    console.log("Pokemon!")
})