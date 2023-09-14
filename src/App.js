import React from 'react';
import './App.css';
import FormWithSeperateState from './Pages/FormWithSeperateState/FormWithSeperateStates';
import FormWithSingleObjectState from './Pages/FormWithSingleObjectState/FormWithSingleObjectState';
import FormWithBool from './Pages/FormWithBool/FormWithBool';
import ParentComponent from './Pages/DataFromChildToParent/ParentComponent';


function App() {
  return (
    <div>
      {/* <FormWithSeperateState/> */}
      {/* <FormWithSingleObjectState/> */}
      {/* <FormWithBool/> */}
      <ParentComponent/>
    </div>
  );
}

export default App;
