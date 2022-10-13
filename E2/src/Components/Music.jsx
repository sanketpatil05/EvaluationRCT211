import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { get_data } from '../Redux/action'
import '../App.css';

export const Music = () => {

    const dispatch= useDispatch();

    const MusicRecords= useSelector((state)=>state.musicRecords)
  
   // console.log(MusicRecords);
    useEffect(()=>{
        dispatch(get_data)
    },[])

  return (
    <div className='box'> {MusicRecords.length>0 && 
    MusicRecords.map((ele)=>{
     return (

        <div>

            <div>{ele.name}</div>
            <div>
                <img src={ele.img} alt="" />
            </div>
            <div>{ele.genre}</div>
            <div>{ele.year}</div>

        </div>
     )

    })
    
    }


    </div>
  )
}
