import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('Name');
  const [age, setAge] = useState('Age');
  const [email, setEmail] = useState('Email');
  const [display, setDisplay]=useState('');

  const handleChangeName = (e) => {
    setName(e.target.value);
  }
  const handleChangeAge = (e) => {
    setAge(e.target.value);
  }
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplay(name+', '+age+', '+email);
  }
  return (
    <div className="App">
        <h1>Display Info</h1>
        <form onSubmit={handleSubmit}>
          <div>Name: 
            <input type='text' onChange={handleChangeName} />
          </div>
          <div>Age:
            <input type='text' onChange={handleChangeAge} />
          </div>
          <div>Email:
            <input type='text' onChange={handleChangeEmail} />
          </div>
            <br></br>
            <input type='submit' title='Show'/>
            {display}
        </form>
    </div>
  );
}

export default App;
