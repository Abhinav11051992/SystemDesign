import React from 'react'
import './Banner.scss'; 
const Banner = ({ ...props }) => {
  return (
    <div className="banner">
  <div className="banner__text">
    <h1>{props.text}</h1>
    <p>test</p>
  </div>
</div>
  )
}

export default Banner