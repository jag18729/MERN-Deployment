import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default props => {
  const { initialName, initialDesc, initialType, initialSkill1, initialSkill2, initialSkill3, onSubmitProp, errors } = props;
  const [name, setName] = useState(initialName);
  const [type, setType] = useState(initialType);
  const [desc, setDesc] = useState(initialDesc);
  const [skill1, setSkill1] = useState(initialSkill1);
  const [skill2, setSkill2] = useState(initialSkill2);
  const [skill3, setSkill3] = useState(initialSkill3)
  const onSubmitHandler = e => {
    e.preventDefault();
    onSubmitProp({ name, type, desc, skill1, skill2, skill3 });
  }

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        {errors.map((err, index) => <h2 key={index}>{err}</h2>)}
        <p>
          <label>Name</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </p>
        <p>
          <label>Type</label>
          <input type="text" value={type} onChange={e => setType(e.target.value)} />
        </p>
        <p>
          <label>Description</label>
          <input type="text" value={desc} onChange={e => setDesc(e.target.value)} />
        </p>
        <p>
          <label>Skill 1</label>
          <input type="text" value={skill1} onChange={e => setSkill1(e.target.value)} />
        </p>
        <p>
          <label>Skill 2:</label>
          <input type="text" value={skill2} onChange={e => setSkill2(e.target.value)} />
        </p>
        <p>
          <label>Skill 3</label>
          <input type="text" value={skill3} onChange={e => setSkill3(e.target.value)} />
        </p>
        {/* <input type="submit" /> */}
        <button className="addpet">Add Pet</button>
      </form>
    </div>
  )
}
