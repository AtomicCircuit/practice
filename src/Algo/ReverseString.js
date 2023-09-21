import React, { useState } from "react";

export default function ReverseString() {
  const [stringText, setStringText] = useState("");
  const [revStringText, setRevStringText] = useState("");
  const handleChangeString = (e) => {
    setStringText(e.target.value);
  };
  const handleStringClick = (e) => {
    e.preventDefault();
    let strTrimJoinLower = stringText
      .toLowerCase()
      .split(" ")
      .join("");
    let strSplit = strTrimJoinLower.split("");
    const reversed = [];
    for (let i = strSplit.length - 1; i >= 0; i--) {
      reversed.push(strSplit[i]);
    }
    //let reversed = strSplit.reverse(); // * By using Reverse keyword
    setRevStringText(reversed.join(''));
  };
  return (
    <div>
      <label>Enter String Here to Reverse!</label>
      <input onChange={handleChangeString} />
      {/* // */}
      <button onClick={handleStringClick}>Reverse Text</button>
      <hr></hr>
      <h1>{revStringText}</h1>
    </div>
  );
}
