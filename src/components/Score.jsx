import React from 'react';
import {useNavigate, useLocation } from 'react-router-dom';
import {QuestionsData} from '../QuestionsData';

function Score() {
  const {state} = useLocation();
  const navigate =   useNavigate();
  // console.log(location.state.score);
  return (
    <div className='box textcenter'>
      <h1>Congratulations!</h1>
      <p>You have completed the quiz.</p>
      <p>Your score is: <span className='scoreCnt'>{state.score}</span> </p>

      <div className='answers'>
      {
        QuestionsData.map((question, index) => {  
          return (
            <div className='answer' key={index}>
              <p>Q. {index+1} {question.question}</p>
              <p>Correct answer: {question.answer}</p>
              <p
              className={question.answer === state.submittedData[index] ? 'correct' : 'incorrect'}
              >Your answer: {state.submittedData[index] || "Not Answered"}</p>
            </div>
          )
        })
      }
      </div>

      <div className='restart'>
        <p>Want to try again?</p>
        <button className='btn' 
        onClick={() => navigate('/')}
        >Restart</button>
      </div>
    </div>
  )
}

export default Score;