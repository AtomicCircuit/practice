import React from "react";
export default function ChildComponent({getDataFromChildComponent}) {
  const childToParentHandler = () => {
    const data = "Hello from the child!";

    // Call the callback function from the parent component
    getDataFromChildComponent(data);
  };

  return (
    <div className="App">
      <button onClick={childToParentHandler}>Child to Parent</button>
    </div>
  );
}
