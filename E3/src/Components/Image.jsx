import React from 'react'

const Image = ({src,alt,width,height}) => {
  return (
    <img src={src} alt={alt} width={`${width}px`} height={`${height}px`}/>
  )
}

export default Image