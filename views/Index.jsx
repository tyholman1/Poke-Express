const React = require("react")
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
                           <a href={`/pokemon/${i}`}><br/>
                            {pokemons.name.toUpperCase()}
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