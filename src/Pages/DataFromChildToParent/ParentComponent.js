import React, { useState } from "react";
import ChildComponent from "./ChildComponent";
export default function ParentComponent() {
  const [userData, setUserData] = useState('');
  const getDataFromChild = (data) => {
    setUserData(data);
  };
  return (
    <div className="App">
      <ChildComponent getDataFromChildComponent={getDataFromChild} />
      {userData}
    </div>
  );
}
