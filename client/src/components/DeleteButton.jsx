import React from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
export default props => {
  const { pet, petId, handleClick } = props;
  const deletePet = e => {
    axios.delete('http://localhost:8000/api/pet/' + petId)
      .then(res => {
        handleClick(petId)
      })
  }
  return (
    <button className="btn" onClick={deletePet}>
      Adopt {pet.name}
    </button>
  )
}
