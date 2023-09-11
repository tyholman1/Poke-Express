const React = require("react")


class Index extends React.Component {
  render() {
    const { pokemon } = this.props
    return(
      <div>
        <h1> Pokemon Index Page! </h1>
        <nav>
          <a href="/pokemon/new">Create a New Pokemon</a>
        </nav>
        <ul>
          {
            pokemon.map((pokemon, i) => {
              return (
                <li key={i}>
                    <a href={`/pokemon/${pokemon._id}`}>
                      {pokemon.name}
                    </a>
                    {' '}
                    is {pokemon.color}                                      <br />
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

module.exports = Index

// const React = require("react");
// const pokemon = require("../models/pokemon");
// const myStyle = {
//   color: "#ffffff",
//   backgroundColor: "#000000",
// };

// class Index extends React.Component {
//   render() {
//     const { pokemon } = this.props;

//     return (
//       <div>
//         <h1 style={myStyle}>See All The Pokemon</h1>
//         <nav>
//           <a href="/vegetables/new">Create a New Vegetable</a>
//         </nav>
//         <ul>
//           {pokemon.map((pokemons, i) => {
//             return (
//               <li key={i}>
//                 <a href={`/pokemon/${pokemon._id}}`}>
//                   {pokemons.name.charAt(0).toUpperCase() +
//                     pokemons.name.slice(1)}
//                 </a>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     );
//   }
// }

// module.exports = Index;
