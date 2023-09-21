import React from 'react';
import FormWithSeperateState from './Pages/FormWithSeperateState/FormWithSeperateStates';
import FormWithSingleObjectState from './Pages/FormWithSingleObjectState/FormWithSingleObjectState';
import FormWithBool from './Pages/FormWithBool/FormWithBool';
import ParentComponent from './Pages/DataFromChildToParent/ParentComponent';
import ReverseString from './Algo/ReverseString';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import DynamicMenu from './Menu/DynamicMenu';
import { menuData } from './Menu/MenuData';


function App() {
  return (
    <>
    <DynamicMenu menuData={menuData} />
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Forms/FormWithSeperateState' element={<FormWithSeperateState/>}></Route>
      <Route path='/Forms/FormWithSingleObjectState' element={<FormWithSingleObjectState/>}></Route>
      <Route path='/Forms/FormWithBool' element={<FormWithBool/>}></Route>
      <Route path='/ParentComponent' element={<ParentComponent/>}></Route>
      <Route path='/algo/ReverseString' element={<ReverseString/>}></Route>
    </Routes>
    </>
  );
}

export default App;
