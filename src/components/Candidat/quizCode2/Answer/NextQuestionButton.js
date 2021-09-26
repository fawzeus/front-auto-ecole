import React from 'react'
import '../../../../App.css'

export default NextQuestionButton

function NextQuestionButton ({ children, ...restProps }) {
  return (
    <button className='next-question-button' {...restProps}>
      {children}
    </button>
  )
}
