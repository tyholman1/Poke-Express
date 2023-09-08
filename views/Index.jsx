const React = require("react")
const pokemon = require("../models/pokemon")
 const myStyle = {
            color: '#ffffff',
            backgroundColor: '#000000',
            }
            
class Index extends React.Component {

    render(){
        const {pokemon} = this.props
        
        return(
            <div>
                <h1 style={myStyle}>
                    See All The Pokemon
                </h1>
                <ul>
                    {pokemon.map((pokemons, i) =>{
                        return(
                          <li key={i}>
                           <a href={`/pokemon/${i}`}>
                            {pokemons.name.charAt(0).toUpperCase() + pokemons.name.slice(1)}
                            </a>
                        </li>  
                        )
                    })}
                    
                </ul>
            </div>
        )
    }

}

module.exports = Index;