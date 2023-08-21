import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Form() {
    const Navigate = useNavigate();
  return (
    <button onClick={() => Navigate('/')}>Form</button>
  )
}
