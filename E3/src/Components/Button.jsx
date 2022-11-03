import React from 'react'
import btnstyle from "./Button.module.css"

const Button = ({colorScheme,size,variant}) => {
  return (
    <button className={` ${colorScheme || btnstyle.white} ${size || btnstyle.md} ${variant}`}>Button</button>
  )
}


export default Button