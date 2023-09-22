import './App.css';
import React,{useState} from 'react';
function App() {
  const [one,setone]=useState("")
  const handleone=(event)=>{
        setone(parseInt(event.target.value))
  }

  const [two,settwo]=useState("")
  const handletwo=(event)=>{
        settwo(parseInt(event.target.value))
  }

  const [add,setadd]=useState(0)
  const handleadd=()=>{
        setadd(one+two)
  }

  
  const handlereset=()=>{
        setone(0)
        settwo(0)
        setadd(0)
  }
  return (
    <>
      <h1>Sum of 2 Numbers</h1>
      <div className='container'>
        <label>Number1:</label> <br/>
        <input type='number' value={one} onChange={handleone} ></input> <br/><br/>
        <label>Number2:</label> <br/>
        <input type='number' value={two} onChange={handletwo} ></input> <br/><br/>
        <label>Sum:</label> <br></br>
        <input type='number' value={add}></input> <br/><br/>
        <div className='button'><button onClick={handleadd}>Add</button><button onClick={handlereset}>Reset</button></div>
      </div>
      
    </>
  );
}


export default App;