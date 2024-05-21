import React from 'react'
import './CheckBox.css'

export const CheckBox = () => {
  return (
    <div className='checkBox'>
        <input type="checkbox" name="consent" />
        <label>I consent to being conteacted by the team</label>
    </div>
  )
}
