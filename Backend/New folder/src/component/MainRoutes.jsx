import React from 'react'
import{Routes, Route} from "react-router-dom"
import { Login } from './login'
import { Signup } from './signup'
import { Task } from './Task'


export const MainRoutes = () => {
  return (
   
    <Routes>
         <Route path="/" element={<Signup />} />
 
  <Route path="/login" element={<Login />} />
  <Route path='/task' element={<Task/>} />
  <Route path="*" element={<h3>Page Not Found</h3>} />
    </Routes>
  )
}