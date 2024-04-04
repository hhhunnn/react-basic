import React from 'react'

interface Props {
    label: string;
    type: string;
    placeholder: string;
    button: string;
}

export default function InputBox({ label, type, placeholder, button }: Props) {
  return (
    
    <>
        <div className="input-label label">{label}</div>
        <div className="input-content-box">
            <input className="input" type={type} placeholder={placeholder} />
            <div className="input-disable-button">{button}</div>
        </div>
        <div className="input-message"></div>
        
    </>
    
  )
}
