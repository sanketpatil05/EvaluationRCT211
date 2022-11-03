import {useState} from 'react'
import { useTodos } from '../hooks/useTodos'

const Todos1 = () => {

  //use the initialData that you are getting from the props to be used, as the initial argument for useTodos hook
  //addData, clearData, removeDataByIndex
    const {data,addData, clearData, removeDataByIndex} = useTodos(["Task1","Task2","Task3"])
    const [inp,setInp] = useState("")
  return (
    <div data-testid='todos1'>
        <h1 data-testid='todos1-label'>Todos-1</h1>
        <input data-testid='todos1-input' value={inp} onChange={(e)=>setInp(e.target.value)}/>
        <button data-testid='todos1-add' onClick={()=>addData(inp)}>Add Task</button>
      <div>
       {/* Loop through the todo data that you are getting from the useTodos hook to render the tasks with their name, and a delete button with each task */}
          {data.map((ele,ind)=>
            <div>
                <div data-testid='todos1-element' key={ind+1*5}>
                  {/* Task name here */}
                  {ele}
                <button data-testid='todos1-delete' onClick={()=>removeDataByIndex(ind)}>Delete</button>
                </div>
            </div>
            )} 
      
        </div>
        <button data-testid='todos1-clear' onClick={clearData}>Clear Todos</button>
    </div>
  )
}

export default Todos1