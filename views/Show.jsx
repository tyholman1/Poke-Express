const React = require('react')

class Show extends React.Component {
  render () {
    const { name, img} = this.props.pokemon

    return (
      <div>
        <h1> Show Page </h1>
        <div>
        {name}
        </div> 
        <img src={img} alt="" />
      </div>
    );
  }
}

module.exports = Show;