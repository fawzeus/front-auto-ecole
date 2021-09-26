import React, {Fragment, useContext } from 'react'
import '../../../../App.css'
import QuestionsData from '../../../../Data/questions.json'
import { CurrentQuestionContext } from '../../../../Context/CurrentQuestionContext'

export default QuestionNumber

function QuestionNumber ({ children, ...restProps }) {
  const [currentQuestion] = useContext(CurrentQuestionContext)
  const totalQuestions = QuestionsData.length

  return (<Fragment>
    <p className='question-number ' {...restProps}>
     Q:{currentQuestion}/{totalQuestions}
  
      {children} 
    </p>
    </Fragment>
  )
}
