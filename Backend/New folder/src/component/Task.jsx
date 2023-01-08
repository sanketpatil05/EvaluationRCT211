import React, { useEffect, useState } from 'react'
import axios from "axios";

export const Task = () => {

 const user_data=JSON.parse(localStorage.getItem("user"))
 const [da, setDa]=useState([]);

  const [user, setUser]=useState(user_data)

    const [data, setData] =useState({});
  
  
   // console.log(user.id)

  const handleChange=(e)=>{
  
    const {id, value}=e.target;
    // console.log(id, value)
    setData({ ...data,
      [id]:value
    })
    
  }
  //console.log(da);
  const handlesubmit=(e)=>{
    e.preventDefault()
   
   if(da.length==0){

    axios.post("https://backend-iujc.onrender.com/task",{
      name:user.user_name,
      tasks:[data]
    }).then(get)


   }





   if(da.length<5){

    let arr=[...da, data]
    axios.patch(`https://backend-iujc.onrender.com/task/${user.id}`, {
        name:user.user_name,
        tasks:arr
    }).then((res)=>{
        get()
    })

   }
   else{
    alert("limit exceeed")
   }


   
}

 function get(){
    axios.get(`https://backend-iujc.onrender.com/task/${user.id}`).then((res)=>{
        // console.log("alsdnf",res.data);
     
     setDa(res.data.tasks)
 
   
 })
 }
 const handleDelete=(id)=>{
  console.log(id)
   
    let a=da.filter((el)=>el.name!==id);

    console.log(a)
   // setDa(a);

    axios.patch(`https://backend-iujc.onrender.com/task/${user.id}`, {
        name:user.user_name,
        tasks:a
    }).then((res)=>{
        get()
    })


 }
useEffect(()=>{
  get()


 },[])

  return (
    <div>
      <h2>Hello</h2>
      <h1>{user.user_name}</h1>
      <h4>Glad to see you here</h4>
      <h4>You have to  {da.length} task</h4>
      <div>

        {
            da.map((el,i)=>(
            <div key={el.name+el.id}>
                <p>Task No:{i+1}</p>
            <h2>{el.name}</h2>
             <h4>{el.date}</h4>
             <button onClick={()=>{
                handleDelete(el.name);
             }}>Delete</button>
            </div>
                
            ))
        }
      </div>





<form>
        <label>Task Name</label>
        <input id='name' onChange={handleChange}/>
        <label>Usernmae</label>
        < input id='date'  type="date" onChange={handleChange} />
       
    


    <input type="submit" onClick={handlesubmit} />
      </form>


    </div>
  )
}
