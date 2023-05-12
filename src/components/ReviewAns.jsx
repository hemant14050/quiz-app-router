import React from 'react';

const ReviewAns = ({submittedData, setQuestionIndex}) => {
  return (
    <div className='box '>
        <h3>Review Answers</h3>
        <div className='answers'>
        {
            Object.keys(submittedData).map((questionIndex) => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
                return (
                    <div className='answer' key={questionIndex}>    
                        <p>Q. {parseInt(questionIndex)+1} <button
                        onClick={(e) => {
                            e.preventDefault();
                            setQuestionIndex(parseInt(questionIndex))
                        }}
                         className='review'>{submittedData[questionIndex] || "Not Answered"}</button></p>
                    </div>
                )
            })
        }
        </div>
    </div>
  )
}

export default ReviewAns;