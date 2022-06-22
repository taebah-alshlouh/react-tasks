import React,{useState} from "react";
import './App.css';


function App(){
  const [isRed,setRed]=useState(false);
  const [count,setCount]=useState(0);
  const Increment=()=>{
setCount(count+1);
setRed(!isRed);
  };
  return(
<div className="taeba">

<h1 className={isRed?"red":""} >Change my color</h1>
<button onClick={Increment}>Increment</button>
<h1 className={count >0 && count<=5?"red":""}>{count}</h1>
</div>
  );
};
export default App;