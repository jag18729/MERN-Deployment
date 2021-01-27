import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import DeleteButton from '../components/DeleteButton';
export default props => {
  const [pet, setPet] = useState({})
  useEffect(() => {
    axios.get("http://localhost:8000/api/pet/" + props.id)
      .then(res => setPet(res.data))
  }, [])
  const handleDelete = (petId) => {
    navigate("/");
  }
  return (
    <div>
      <h1>Pet Shelter</h1>
      <DeleteButton pet={pet} petId={pet._id} handleClick={handleDelete} />
      <Link to={"/"}>back to home</Link>
      <h3>Details about: {pet.name}</h3>
      <div> Pet Type: {pet.type}</div>
      <div>Description: {pet.desc}</div>
      <h4>Skills: </h4>
      <h5>{pet.skill1}</h5>
      <h5>{pet.skill2}</h5><h5>{pet.skill3}</h5>
      {/* <DeleteButton petId={pet._id} handleClick={removeFromDom} /> */}
    </div>
  )
}
