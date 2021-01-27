import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router';
import axios from 'axios';
import DeleteButton from './DeleteButton';
export default props => {
  const { removeFromDom } = props;
  // const removeFromDom = (petId) => {
  //   axios.delete('http://localhost:8000/api/pet/' + petId)
  //     .then(res => {
  //       removeFromDom(petId)
  //     })
  // }
  return (
    <div>
      {props.pets.map((pet, idx) => {
        return (
          <table key={idx}>
            <tr>Name<td>{pet.name}</td></tr>
            <tr>Type
              <td>{pet.type}</td>
            </tr>
            <tr>Actions
            <td><Link to={"/pet/" + pet._id}>
                details
            </Link>
                <Link to={"/pet/" + pet._id + "/edit"}>
                  edit
            </Link>
              </td>
            </tr>
          </table>
        )
      })}
    </div>
  )
}
