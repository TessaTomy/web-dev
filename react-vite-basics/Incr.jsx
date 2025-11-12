import React, { useEffect, useInsertionEffect, useState } from 'react'

function Incr() {
  const [count,setCount]=useState(0);

  function update(n)
  {
    setCount(a=>a+n);
  }

  useEffect(
    function sample()
    {
      document.title="Count :"+count;
    },[count]
  );
  return (
    <div >
      <h1 style={{padding:"0 0 10% 0 ",color:"lightblue",fontFamily:"Chilanka"}}>Increment/Decrement</h1>
      <input type="text" readonly value={count} style={{margin:'10px'}}/>

      <div style={{margin:'20px'}}>

      </div>
      <div>
        <button style={{margin:'10px'}} onClick={()=>update(1)}>+</button>
        <button style={{margin:'10px'}} onClick={()=>update(-1)}>--</button>
        <button onClick={()=>{setCount(0)}}>
        Reset
      </button>
      </div>
    </div>
  )
}

export default Incr
