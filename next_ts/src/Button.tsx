import React from 'react'

interface ButtonProps {
    text: string;
    action : () => void;
}

const Button:React.FC<ButtonProps> = ({text, action})=> {
  return (
    <button onClick={action}>{text}</button>
  )
}

export default Button;