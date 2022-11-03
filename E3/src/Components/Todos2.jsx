import {useState} from 'react'
import { useTodos } from '../hooks/useTodos'

const Todos2 = () => {
  //use the initialData that you are getting from the props to be used, as the initial argument for useTodos hook
  const { data,addData, clearData, removeDataByIndex } = useTodos(["Task1","Task2","Task3"])
  const [inp, setInp] = useState("")
  return (
    <div data-testid='todos2'>
      <h1 data-testid='todos2-label'>Todos-2</h1>
      <input data-testid='todos2-input' value={inp} onChange={(e)=>setInp(e.target.value)}/>
      <button data-testid='todos2-add' onClick={()=>addData(inp)}>Add Task</button>
      <div>
        {/* Loop through the todo data that you are getting from the useTodos hook to render the tasks with their name, and a delete button with each task */}

        {data.map((ele,ind)=> 
        <div >
          <div data-testid='todos2-element' key={ind+1}>
            {/* task name here */}
            {ele}
          <button data-testid='todos2-delete' onClick={()=>removeDataByIndex(ind)}>Delete</button>
          </div>
          
        </div>
        )}
        

      </div>
      <button data-testid='todos2-clear' onClick={clearData}>Clear Todos</button>
    </div>
  )
}

export default Todos2