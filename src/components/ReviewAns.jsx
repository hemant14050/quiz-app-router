import React from 'react';

const ReviewAns = ({submittedData}) => {
  return (
    <div className='box '>
        <h3>Review Answers</h3>
        <div className='answers'>
        {
            Object.keys(submittedData).map((questionIndex) => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
                return (
                    <div className='answer' key={questionIndex}>    
                        <p>Q. {parseInt(questionIndex)+1} <span>{submittedData[questionIndex] || "Not Answered"}</span></p>
                    </div>
                )
            })
        }
        </div>
    </div>
  )
}

export default ReviewAns;