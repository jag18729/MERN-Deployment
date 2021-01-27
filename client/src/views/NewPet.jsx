import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import Form from '../components/Form';

const NewPet = () => {
  const [errors, setErrors] = useState([]);
  const createPet = pet => {
    axios.post('http://localhost:8000/api/pet', pet)
      .then(response => {
        navigate("/")
      })
      .catch(err => {
        const errorResponse = err.response.data.errors; // Get the errors from err.response.data
        const errorArr = []; // Define a temp error array to push the messages in
        for (const key of Object.keys(errorResponse)) {
          errorArr.push(errorResponse[key].message)
        }
        setErrors(errorArr);
      })
  }
  const cancel = e => {
    navigate("/")
  }
  return (
    <div>
      <h1>Pet Shelter</h1>
      <Link to={"/"}>back to home</Link>
      <h3>Know a pet needing a home?</h3>
      <Form errors={errors} onSubmitProp={createPet} initialName="" initialType="" initialDesc="" initialSkill1="" initialSkill2="" initialSkill3="" />
    </div>
  )
}


export default NewPet;