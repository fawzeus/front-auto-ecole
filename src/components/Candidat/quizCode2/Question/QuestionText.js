import React, { useContext } from 'react'
import '../../../../App.css'
import QuestionsData from '../../../../Data/questions2.json'
import { CurrentQuestionContext } from '../../../../Context/CurrentQuestionContext'

export default QuestionText

function QuestionText ({ children, ...restProps }) {
  const [currentQuestion] = useContext(CurrentQuestionContext)

  return (
    
    <p className='question-text' {...restProps}>
      {decodeURIComponent(QuestionsData[currentQuestion - 1].question)}
      {children}
    </p>

  )
}
