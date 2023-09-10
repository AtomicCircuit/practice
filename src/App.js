import React from 'react';
import './App.css';
import FormWithSeperateState from './Pages/FormWithSeperateState/FormWithSeperateStates';
import FormWithSingleObjectState from './Pages/FormWithSingleObjectState/FormWithSingleObjectState';



function App() {
  return (
    <div>
      <FormWithSeperateState/>
      <FormWithSingleObjectState/>
    </div>
  );
}

export default App;
