import React from 'react'

class Show extends React.Component {
  render () {
    return (
      <>
        <div className="details">
         <h3>Shelter Info:</h3>
         <hr/>
         <h4> { this.props.shelter.name } </h4>
         <h6><span>Adopted:</span>   { this.props.shelter.adopted ? 'adopted' : 'not adopted'} </h6>
         <h6><span>Species:</span> {this.props.shelter.species}</h6>
         <p><span>Breed:</span> { this.props.shelter.breed } </p>
       </div>
      </>
    )
  }
 }
export default Show
