import React from 'react'

let baseURL = process.env.REACT_APP_BASEURL

class UpdateForm extends React.Component {
  state = {
    show: false,
    name: this.props.shelter.name,
    adopted: '',
    species: '',
    breed: '',
  };

  
  handleSubmit = (event,shelter) => {
    event.preventDefault()
    fetch(baseURL + '/shelters/' + shelter._id, {
      method: 'PUT',
      body: JSON.stringify({adopted: !shelter.adopted}),
      headers: {
        'Content-Type' : 'application/json'
      }
    }).then(res => res.json())
    .then(resJson => {
         const copyShelters = [...this.state.shelters]
          const findIndex = this.state.shelters.findIndex(shelter => shelter._id === resJson._id)
          copyShelters[findIndex].adopted = resJson.adopted
          this.setState({shelters: copyShelters})
    })
  }

handleChange = event => {
  // console.log('<-- tried to type new value this many times')
  console.log('its trying')
  this.setState({ [event.target.id]: event.target.value})
  }

  render() {
    if(!this.props.show){
        return null;
    }
      return (
      <div className="editDiv">
      <h3>Edit { this.props.shelter.name } Info:</h3>
      <hr/>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder={ this.props.shelter.name }
              onChange={this.handleChange} 
            />
            <label htmlFor="adopted">Adopted</label>
            <input
              type="text"
              id="adopted"
              placeholder={ this.props.shelter.adopted ? 'adopted' : 'not adopted'}
              onChange={this.handleChange} 
            />
            <label htmlFor="species">Species</label>
            <input
              type="text"
              id="species"
              placeholder={this.props.shelter.species ? this.props.shelter.species : "none listed"}
              onChange={this.handleChange} 
            />
            <label htmlFor="breed">Breed</label>
            <input
              type="text"
              id="breed"
              placeholder={this.props.shelter.breed ? this.props.shelter.breed : "none listed"}
              onChange={this.handleChange} 
            />
            <input type="submit" value="Update Shelter"/>
            <button className="button-red"> Don't Update </button>
          </div>
        </form>
      </div>
    )
  }
}

export default UpdateForm
