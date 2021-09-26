import React from 'react'
import '../../../../App.css'

export default AnswerButton

function AnswerButton ({ children, ...restProps }) {
  return (
    <button {...restProps}>
      {children}
    </button>
  )
}
