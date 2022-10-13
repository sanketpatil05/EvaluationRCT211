import React from 'react'
import styled from "styled-components";
import { Filter } from '../Components/Filter';
import { Music } from '../Components/Music';
export const MusicRecords = () => {
  return (
    <Wrapper>
        <WrapperFilter>
        <Filter/>
        </WrapperFilter>
        
<WrapperMusic>
<Music/>

</WrapperMusic>
        

    </Wrapper>
  )
}

const Wrapper=styled.div`
border: 1px solid red; 
display:flex; 
height : 100vh; 

`

const WrapperFilter=styled.div`
width:200px;
border:1px solid blue; 
`
const WrapperMusic=styled.div`
width:100%; 
border:1px solid black; 
`