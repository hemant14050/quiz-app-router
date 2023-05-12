import React from 'react';

const Question = ({questionIndex, updateAnwsers ,currentQuestion, selectedOption}) => {
    // console.log(currentQuestion);
    return (
        <div className='question'>
            <h3>{currentQuestion.question}</h3>
            <div className='options'>
                {
                    currentQuestion.options.map((option, index) => {
                        return (
                            <label key={index}>
                                <input 
                                    type='radio' 
                                    name={currentQuestion.question} 
                                    value={option} 
                                    onChange={() => updateAnwsers(questionIndex, option) }    
                                    checked={option === selectedOption}
                                />
                                {option}
                            </label>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Question;