import React from 'react'
import '../../../../App.css'

export default AnswerResult

function AnswerResult ({ children, ...restProps }) {
  return (
    <p className='answer-result' {...restProps}>
      {children}
    </p>
  )
}