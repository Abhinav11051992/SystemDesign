import React from 'react'
const Card = ({ ...props }) => {
  return (
    <div className="card">
          <img src={props.imgPath}alt="Avatar" />
          <h4>
            <b>{props.Name}</b>
          </h4>
          <p>{props.Designation}</p>
        </div>
  )
}

export default Card