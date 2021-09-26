import React from 'react'
import '../../../../App.css'

export default AnswerButtonsWrapper

function AnswerButtonsWrapper ({ children, ...restProps }) {
  return (
    <div className='answer-buttons-wrapper' {...restProps}>
      {children}
    </div>
  )
}
