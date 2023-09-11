import React from 'react';
import './App.css';
import FormWithSeperateState from './Pages/FormWithSeperateState/FormWithSeperateStates';
import FormWithSingleObjectState from './Pages/FormWithSingleObjectState/FormWithSingleObjectState';
import FormWithBool from './Pages/FormWithBool/FormWithBool';


function App() {
  return (
    <div>
      {/* <FormWithSeperateState/> */}
      {/* <FormWithSingleObjectState/> */}
      <FormWithBool/>
    </div>
  );
}

export default App;
