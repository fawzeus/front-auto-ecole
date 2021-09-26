import React from 'react'
import '../../../../App.css'

export default QuestionSectionWrapper

function QuestionSectionWrapper ({ children, ...restProps }) {
  return (
    <div className='question-section-wrapper' {...restProps}>
      {children}
    </div>
  )
}
