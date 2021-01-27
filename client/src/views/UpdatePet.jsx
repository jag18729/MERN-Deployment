import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import Form from '../components/Form';
import DeleteButton from '../components/DeleteButton';
export default props => {
  const { id } = props;
  const [errors, setErrors] = useState([]);
  const [pet, setPet] = useState();
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    axios.get('http://localhost:8000/api/pet/' + id)
      .then(res => {
        setPet(res.data);
        setLoaded(true);
      })
      .catch(err => console.log(err))
  }, [])
  const updatePet = pet => {
    axios.put('http://localhost:8000/api/pet/' + id, pet)
      .then(res => {
        if (res.data) { navigate("/") }
        else { console.log(res.data) }
      })
      .catch(err => {
        const errorResponse = err.response.data.errors; // Get the errors from err.response.data
        const errorArr = []; // Define a temp error array to push the messages in
        for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
          errorArr.push(errorResponse[key].message)
        }
        // Set Errors
        setErrors(errorArr);
      })
  }
  return (
    <div>
      <h1>Pet Shelter</h1>
      <Link to={"/"}>back to home</Link>
      <h1> Update pet</h1>
      {loaded && (
        <>
          <Form
            onSubmitProp={updatePet}
            initialName={pet.name}
            initialType={pet.type}
            initialDesc={pet.desc}
            initialSkill1={pet.skill1}
            initialSkill2={pet.skill2}
            initialSkill3={pet.skill3}
            errors={errors}
          />

        </>
      )
      }
    </div >
  )
}