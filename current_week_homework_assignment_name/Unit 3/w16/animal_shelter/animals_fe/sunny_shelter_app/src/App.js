import React from 'react'
import './css/normalize.css'
import './css/skeleton.css'
import './css/index.css'
import NewForm from './components/NewForm.js'
import Show from './components/Show.js'
import UpdateForm from './components/UpdateForm'

let baseURL = process.env.REACT_APP_BASEURL

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003'
} else {
  baseURL = 'https://fathomless-sierra-68956.herokuapp.com'
}

console.log('current base URL:', baseURL)

fetch(baseURL+ '/shelters')
  .then(data => {
    return data.json()},
    err => console.log(err))
  .then(parsedData => console.log(parsedData),
   err => console.log(err))

class App extends React.Component {
  state = {
    shelters: [],
    shelter: {}
  }

  getShelter = (shelter) => {
    this.setState({shelter}) // if the key matches a variable, it creates both key+value
  }

  getShelters = () => {
    fetch(baseURL + '/shelters')
    .then(data => data.json(), err => console.log('data',err))
    .then(parsedData =>
      this.setState({shelters:parsedData}), err => console.log('parsedData', err))
  }



  handleAddShelter = (shelter) => { // shelter is whatevers being ADDED in the form
    const copyShelters = [...this.state.shelters]
    copyShelters.push(shelter)
    this.setState({
      shelters: copyShelters,
      name: ''
    })
  }

  handleUpdateShelter = (shelter) => { // shelter is whatevers being ADDED in the form
    const copyShelters = [...this.state.shelters]
    this.setState({
      shelters: copyShelters,
      name: ''
    })
  }

  onChange = (e) => this.setState({ [e.target.id]: e.target.value })

  toggleAdopted = (shelter) => {
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

  toggleModal = e => {
    this.setState({
      show: true
    });
  };

  deleteShelter = (id) => {
    fetch(baseURL + '/shelters/' + id, {
      method: 'DELETE'
    }).then( response => {
      const findIndex = this.state.shelters.findIndex(shelter => shelter._id === id)
      const copyShelters = [...this.state.shelters]
      copyShelters.splice(findIndex, 1)
      this.setState({shelters: copyShelters})
    })
  }

  render () {

  return (
    <div className="container">
        <h1>
         Animal Shelters
        </h1>
        <NewForm
          baseURL={baseURL}
          handleAddShelter={this.handleAddShelter}
        />
      <div className="flex-container">
        <UpdateForm 
          show={this.state.show} 
          shelter={this.state.shelter}
          onChange={this.onChange}  
        />
        <table>
          <tbody>
          { this.state.shelters.map(shelter => (
            <tr 
              key={shelter._id}
              onMouseOver={() => this.getShelter(shelter)}
            >
              <td
                className={shelter.adopted ? 'adopted' : null}
              >
                {shelter.name}
              </td>
              <td 
                className="editButton"
                // onClick={() => this.toggleModal(shelter)}
              >
                <button  onClick={e => {this.toggleModal()}}>EDIT</button>
              </td>
              <td
                onClick={() => this.toggleAdopted(shelter)}
                className={shelter.adopted ? 'adopted' : null}
              >
                Fund this Shelter?
              </td>
              <td
                onClick={()=>this.deleteShelter(shelter._id)}
              >
                Officially Funded
              </td>
            </tr>
            ))}
          </tbody>
        </table>
        { this.state.shelter ? <Show shelter={this.state.shelter}/> : null }
      </div>
    </div>
  );
}

 // compDidMount is a react LifeCycle method (reserved method)
 // this runs ONLY ONCE
 componentDidMount() {
  this.getShelters()
}
}

export default App;