import React from 'react'
import '../../../../App.css'

export default AnswerSectionWrapper

function AnswerSectionWrapper ({ children, ...restProps }) {
  return (
    <div className='answer-section-wrapper' {...restProps}>
      {children}
    </div>
  )
}
