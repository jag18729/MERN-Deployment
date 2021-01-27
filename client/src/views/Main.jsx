import React, { useEffect, useState } from 'react'
import '../App.css';
import axios from 'axios';
import List from '../components/List';
import { Link } from '@reach/router';

const Main = (props) => {
  const [pets, setPets] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    axios.get('http://localhost:8000/api/pets')
      .then(res => {
        setPets(res.data);
        setLoaded(true);
      });
  }, []);
  const removeFromDom = petId => {
    setPets(pets.filter(pet => pet._id != petId));
  }

  return (
    <div>
      <h1>Pet Shelter</h1>
      <h2>These pets are looking for a good home</h2>
      <Link to={"/new"}>add a pet to the shelter</Link>
      {loaded && <List pets={pets} removeFromDom={removeFromDom} setPets={setPets} />}
    </div>
  )
}

export default Main;
