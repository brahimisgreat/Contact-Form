import React from 'react'
import './CheckBox.css'

export const CheckBox = () => {
  return (
    <div className='checkBox'>
        <input className='check' type="checkbox" name="consent" required />
        <label>I consent to being conteacted by the team <span>*</span></label>
    </div>
  )
}
