import React, { useEffect, useState } from "react";
const arr = [
  "Harry",
  "Ross",
  "Bruce",
  "Cook",
  "Carolyn",
  "Morgan",
  "Albert",
  "Walker",
  "Randy",
  "Reed",
  "Larry",
  "Barnes",
  "Lois",
  "Wilson",
  "Jesse",
  "Campbell",
  "Ernest",
  "Rogers",
  "Theresa",
  "Patterson",
  "Henry",
  "Simmons",
  "Michelle",
  "Perry",
  "Frank",
  "Butler",
  "Shirley",
];
export default function Sets() {
    const [dsSet,setDsSet]=useState([]);
  useEffect(() => {
    let setNew = new Set(arr);
    setDsSet(setNew);
  }, []);
  return <div>{dsSet}</div>;
}
