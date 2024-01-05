import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Timer  from "./components/Timer";
import ToDo from './ToDo';

function App() {
  
  const myArr = ["harshvi","heet","harshilSir","narendraSir","ace"]
  const[clicked,setClicked] = useState(true)
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(myArr);

  function toggle(e:any) {
    setClicked(!clicked)
  } 
  const handleInputChange = (event:any) => {
    const inputValue = event.target.value;
    console.log("inputValue : "+inputValue);
    setSearchTerm(inputValue);

    const filteredResults = myArr.filter((item) =>
      item.toLowerCase().includes(inputValue.toLowerCase())
    );

    setFilteredData(filteredResults);
  };
  return (
    <>
      <div>
      <h4>React Timer App</h4>
      <Timer />
      <h4>Toggle</h4>
      <button onClick={toggle}>{clicked?"click me" :"u clicked me" }</button>
      <h4>ToDo</h4>
      <ToDo/>
      <h4>Search</h4>
      {/* <label>Enter search data</label> */}
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      {

      }
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
    </>
  );
}

export default App;
