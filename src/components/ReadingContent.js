import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/ReadingContent.css'; 
function ReadingContent() {
    const [questions, setQuestions] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null); // Added to handle errors

    useEffect(() => {
        // Optionally, automatically fetch questions on component mount
        fetchQuestions();
    }, []);

    const fetchQuestions = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await axios.get('https://hacknu24.onrender.com/reading')
            
            //for debug purpose only, show the response data to text
            setQuestions(response.data);
        } catch (error) {
            console.error('Error fetching questions:', error);
            // Capture more detailed error information
            let errorInfo = '';
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                errorInfo = `Server responded with status: ${error.response.status}`;
            } else if (error.request) {
                // The request was made but no response was received
                errorInfo = 'No response received';
            } else {
                // Something happened in setting up the request that triggered an Error
                errorInfo = error.message;
            }
            setError(`Error: ${errorInfo}`);
        } finally {
            setIsLoading(false);
        }
    };




    if (error) {
        return (
            <div className="center-container">
                <div>Error: {error}</div>
                <button onClick={fetchQuestions} disabled={isLoading}>
                    Try Again
                </button>
            </div>
        );
    }

    if (questions.length === 0) {
        return (
            <div className="loading-container">
                <div className="loading-spinner"></div>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className="loading-container">
                <div className="loading-spinner"></div>
            </div>
        );
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (questions[currentQuestionIndex]?.answer === selectedOption) {
            alert("Correct answer!");
        } else {
            alert("Wrong answer, try again!");
        }
        // Move to the next question or handle completion
        const nextIndex = currentQuestionIndex + 1;
        if (nextIndex < questions.length) {
            setCurrentQuestionIndex(nextIndex);
            setSelectedOption(''); // Reset selected option for the next question
        } else {
            alert("You have completed all questions!");
        }
    };



    const currentQuestion = questions[currentQuestionIndex];
    return (
    <div className="reading-content">
        <h2 className="reading-header">Reading Practice</h2>
        <div className="reading-passage">
            <p>{currentQuestion.text}</p>
        </div>

    <form onSubmit={handleSubmit} className="question-form">
        <fieldset>
            <legend className="question-text">{currentQuestion.question}</legend>
            {currentQuestion.options.map((option, index) => (
                <div className="option-container" key={index}>
                    <input 
                      type="radio" 
                      id={`choice${index}`}
                      name="answer"
                      value={option}
                      checked={selectedOption === option}
                      onChange={(e) => setSelectedOption(e.target.value)}
                      className="option-input"
                    />
                    <label htmlFor={`choice${index}`} className="option-label">
                        {String.fromCharCode(65 + index)} {option}
                    </label>
                </div>
            ))}
        </fieldset>
        <button type="submit" className="submit-button">Submit Answer</button>
    </form>
</div>
    );
}

export default ReadingContent;
