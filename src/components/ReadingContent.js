// src/components/ReadingContent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ReadingContent() {
    const [questions, setQuestions] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true); // Added loading state

    useEffect(() => {
        const fetchQuestions = async () => {
            setIsLoading(true); // Begin loading
            try {
                const response = await axios.get('https://hacknu24.onrender.com/reading');
                setQuestions(response.data);
                setIsLoading(false); // Stop loading after fetching data
            } catch (error) {
                console.error('Error fetching questions:', error);
                setIsLoading(false); // Stop loading if an error occurs
            }
        };

        fetchQuestions();
    }, []);

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
    if (isLoading) {
        return (
            <div className="loading-container">
                <div className="loading-spinner"></div>
            </div>
        );
    }

    // Show content if not loading and questions are available
    const currentQuestion = questions[currentQuestionIndex];
    if (!currentQuestion) {
        return <div>No questions found.</div>;
    }

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
                        <label htmlFor={`choice${index}`}>{String.fromCharCode(65 + index)}) {option}</label>
                    </div>
                ))}
                <button type="submit">Submit Answer</button>
            </form>
        </div>
    );
}

export default ReadingContent;
