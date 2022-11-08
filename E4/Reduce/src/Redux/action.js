import { INCREMENT, DECREMENT } from "./actionTypes";
// export const handleIncrement = () => {
//   return { type: INCREMENT, payload: 1 };
// };
// export const handleDecrement = () => {
//   return { type: DECREMENT, payload: 1 };
// };




import * as types from "./actionTypes"


export const handleDecrement=()=>{

  return {type:types.DECREMENT, payload:2}
}

export const handleIncrement=()=>{
  return{type:types.INCREMENT, payload:3}
}