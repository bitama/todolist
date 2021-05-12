import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"




function App() {
  const [inputval, setInputVal] = useState("");
  const [list, setList] = useState([])
  
  const OnAddHandler = e => {
    e.preventDefault();
    if (inputval === "") return;
    setList([...list, {
      name: inputval,
      completed:false
    }])
    setInputVal("")
  }
  const OnClickHandler = (index) => {
    const objChanged = {
      ...list[index]
    }
    objChanged.completed = !objChanged.completed.completed
    setList([...list.slice(0,index),objChanged,...list.slice(index+1)])
  }
  const removeIndex = (index) => {
    setList([...list.filter((listObj,i)=> i !== index)])
  }
  return (
    <div className="col-4 mx-auto card mt-4 text-light bg-dark">
      <div className="card_header">
        <h3 className="container w-50">What is the plan for today?</h3>
        <form className="form-group" onSubmit={OnAddHandler}>
          <input className="form-control" type="text" name="todo" onChange={e=>setInputVal(e.target.value)} value={inputval}/>
        <div><button className="btn btn-outline-primary btn-sm m-2 p-2">Add</button></div>
        </form>
      {
          list.map((item, i) => (<div key={i}><h3>{item.name}</h3><input type="checkbox" checked={item.completed} onClick={() => OnClickHandler(i)} />
            <button className="btn btn-outline-danger btn-lg" onClick={()=>removeIndex(i)}></button>
          </div>))
    }
    
      </div>
      
    </div>
  )
    
}

export default App;
