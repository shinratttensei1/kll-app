// src/components/ReadingContent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ReadingContent.css'; 
function ReadingContent() {
    const [questions, setQuestions] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null); // Added to handle errors

    useEffect(() => {
        // Optionally, automatically fetch questions on component mount
        // fetchQuestions();
    }, []);

    const fetchQuestions = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await axios.get('https://hacknu24.onrender.com/reading');

            //for debug purpose only, show the response data to text
            setQuestions(response.data);
        } catch (error) {
            console.error('Error fetching questions:', error);
            setError(error.toString());
        } finally {
            setIsLoading(false);
        }
    };



    if (isLoading) {
        return <div className="center-container">Loading...</div>;
    }

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
            <div className="center-container">
                <div>No questions found.</div>
                <button onClick={fetchQuestions} disabled={isLoading}>
                    {isLoading ? 'Fetching...' : 'Fetch Questions'}
                </button>
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

    // Show loading spinner while fetching questions
    // if (isLoading) {
    //     return (
    //         <div className="loading-container">
    //             <div className="loading-spinner"></div>
    //         </div>
    //     );
    // }

    const currentQuestion = questions[currentQuestionIndex];
    return (
        <div className="reading-content">
            <h2>Reading Practice</h2>
            <div className="reading-passage">
                <p>{currentQuestion.text}</p>
            </div>

            <form onSubmit={handleSubmit}>
                <p>{currentQuestion.questions}</p>
                {currentQuestion.options.map((option, index) => (
                    <div key={index}>
                        <input 
                          type="radio" 
                          id={`choice${index}`} 
                          name="answer" 
                          value={option} 
                          checked={selectedOption === option} 
                          onChange={(e) => setSelectedOption(e.target.value)} 
                        />
                        <label htmlFor={`choice${index}`}>{String.fromCharCode(65 + index)} {option}</label>
                    </div>
                ))}
                <button type="submit">Submit Answer</button>
            </form>
        </div>
    );
}

export default ReadingContent;
