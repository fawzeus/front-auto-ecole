import React, { useContext } from 'react'
import QuestionsData from '../Data/questions.json'
import ScoreBarData from '../Components/ScoreBar/ScoreBarData'
import UserScore from '../Components/ScoreBar/UserScore'

import { CorrectAnswersContext } from '../Context/CorrectAnswersContext'

export default ScoreBarCompound

function ScoreBarCompound ({ children, score, setScore}) {

  const [correctAnswersNumber] = useContext(CorrectAnswersContext)
  const totalQuestions = QuestionsData.length
  
  setScore(`${Math.round((correctAnswersNumber / totalQuestions) * 100)}`);
 
  return (
    <div>
      
        <ScoreBarData>
          <UserScore>
            <div className="row" id ="score-bar-compound">
              <div  className ="col-xs-6 col-md-6"id="score-image">
                <img className="scoreimag" src="https://inss.net/wp-content/uploads/2021/08/score.jpg"></img>
              </div> 
              <div id="text-score" className ="col-xs-6 col-md-6"> {score}%</div>
            </div>
            
          </UserScore>
        </ScoreBarData>
      {children}
    </div>
  )
}
