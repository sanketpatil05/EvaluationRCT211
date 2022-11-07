
import React, { useState } from 'react'

export const useCounter = (initialData=0) => {
 
    let [count, setCount]= useState(initialData);

  const add=(value)=>{
    setCount(count+value)
    return count; 
  }

 const reduce =(value)=>{
    setCount(count-value);
    return count; 
 }



  return (
   {
    count, 
    add, 
    reduce
   }
  )
}
