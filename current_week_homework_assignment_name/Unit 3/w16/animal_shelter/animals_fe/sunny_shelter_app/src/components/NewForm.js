import React from 'react'

class NewForm extends React.Component {
    state = {
        name: ''
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch(this.props.baseURL + '/shelters', {
          method: 'POST',
          body: JSON.stringify({name: this.state.name}),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then (res => res.json())
          .then (resJson => {
            this.props.handleAddShelter(resJson)
            // add the received data to state in App
            this.setState({
              name: ''
            })
        }).catch (error => console.error({'Error': error}))
      }

    handleChange = event => {
        this.setState({ [event.target.id]: event.target.value})
    }
    render() {
        return (

            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name"></label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    onChange={this.handleChange} 
                    value={this.state.name} 
                    placeholder="add a shelter"
                />
                <input type="submit" value="Add a Shelter"/>
            </form>
        )
    }
}

export default NewForm