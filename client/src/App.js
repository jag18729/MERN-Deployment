import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import ShowPet from './views/ShowPet';
import UpdatePet from './views/UpdatePet';
import NewPet from './views/NewPet';
function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <ShowPet path="/pet/:id" />
        <UpdatePet path="/pet/:id/edit" />
        <NewPet path="/new" />
      </Router>
    </div>
  );
}
export default App;