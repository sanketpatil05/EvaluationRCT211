import React from 'react'
import { useCounter } from '../hooks/useCounter'

export const Count = () => {

    const {count, add, reduce}= useCounter(100)
    const handleclick1=(value)=>{
        add(value);
      }
    
      const substrack=(value)=>{
       reduce(value)
    
      }
  return (
    <div>Counter second Component


<h2>Count : {count}</h2>
       <button onClick={()=>handleclick1(1)}>Add</button>
       <button onClick={()=>substrack(3)}>Reduce</button>

    </div>
  )
}
