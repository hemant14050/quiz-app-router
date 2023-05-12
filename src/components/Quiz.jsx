import {React, useEffect, useState} from 'react';
import {QuestionsData} from '../QuestionsData';
import Question from './Question';
import { useNavigate } from 'react-router-dom';
import ReviewAns from './ReviewAns';

function Quiz() {
  // console.log(QuestionsData);
  const TIME_FOR_ONE_QUESTION = 30;
  const [questionIndex, setQuestionIndex] = useState(0);
  const [time, setTime] = useState(TIME_FOR_ONE_QUESTION*(QuestionsData.length));
  const [submittedData, setSubmittedData] = useState({});//{questionIndex: 0, anwser: 'option1'}
  const navigate = useNavigate();

  const updateAnwsers = (questionIndex, anwser) => {  
    setSubmittedData(
      {
        ...submittedData, 
        [questionIndex]: anwser
      }
    );
  }

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(submittedData);
    const score = calculateScore();
    // console.log(score);
    navigate('/score', {state: {score: score, submittedData: submittedData}});
  }

  const calculateScore = () => {
    let score = 0;
    QuestionsData.forEach((question, index) => {
      if(question.answer === submittedData[index]){
        score++;
      }
    });
    return score;
  }

  useEffect(() => {
    if(time > 0){ 
      setTimeout(() => {
        setTime(time-1);
      }, 1000);
    } else {
      const score = calculateScore();
      navigate('/score', {state: {score: score, submittedData: submittedData}});
    }
  }, [time]);

  return (
    <div className='box'>
      <div className='boxHead'>
        <span>Timer: {time} sec</span>
        <span>Question {questionIndex+1} of {QuestionsData.length}</span>
      </div>
      
      <form onSubmit={submitHandler}>
        <Question 
        questionIndex = {questionIndex}
        updateAnwsers = {updateAnwsers}
        currentQuestion = {QuestionsData[questionIndex]} 
        selectedOption = {submittedData[questionIndex]}
        />

        <div className='btnContainer'>
          <div className='btnContainerInnner'>
            <button className={questionIndex <1 ? 'disabled':'btn'}
            disabled={questionIndex < 1 ? true:false} 
            onClick={(e) => {
              e.preventDefault();
              if(questionIndex > 0){
                setQuestionIndex(questionIndex-1)
              }
            }}>Previous</button>

            
            <button className={questionIndex >= QuestionsData.length-1 || (!submittedData[questionIndex]) ? 'disabled':'btn'} 
            disabled={questionIndex >= QuestionsData.length-1 || (!submittedData[questionIndex])  ? true:false} 
            onClick={(e) => {
              e.preventDefault();
              if(questionIndex < QuestionsData.length-1){
                setQuestionIndex(questionIndex+1)
              }
            }}>Next</button>
          </div>
          
          <button type='submit' className={Object.keys(submittedData).length !== QuestionsData.length ? 'disabled':'btn'}
            disabled={Object.keys(submittedData).length !== QuestionsData.length? true:false}
          >Submit</button>

        </div>
      </form>

      <ReviewAns submittedData={submittedData}/>
    </div>
  )
}

export default Quiz;