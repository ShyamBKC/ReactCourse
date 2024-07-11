import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(5);
  const [isOpen, setIsOpen] = useState(false);
  const [fruits,setFruits] = useState(["apple","mango","banana"]);
  
  console.log(fruits);
  //function
  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSubstract = () => {
    if (count == 0) {
      return false;
    }
    setCount(count - 1);
  };

  const handleState = () => setIsOpen(!isOpen);

  const addFruit = (item) => {
    setFruits ([...fruits,item])
  }

  useEffect(() => {
    console.log('you clicked');
  },[count])

  return (
    <div className="container">
      <button onClick={handleAdd}>Add</button>
      <p>{count}</p>
      <button onClick={handleSubstract}>Subtract</button>
      <br /> <br />
      <button onClick={handleState}>toogle</button>
      {isOpen ? <span>Opened</span> : <span>Closed</span>}
      <br /> <br />

    <button onClick={() => addFruit('grapes')}> Add Fruits </button>
   <p>{fruits}</p>
    </div>
  );
};

export default Counter;
