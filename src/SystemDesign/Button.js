import React from 'react'
import './Button.scss'
const FormButton = ({ ...props }) => {
  return (
    <div className='form_btn' style={props.style}>
      <button type='submit'>{props.btnText}</button>
    </div>
  )
}

export default FormButton