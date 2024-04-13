// src/components/ReadingContent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ReadingContent() {
    const [questions, setQuestions] = useState([]); // State to hold the questions data
    const [selectedOption, setSelectedOption] = useState('');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // To navigate through questions

    useEffect(() => {
        // Function to fetch questions
        const fetchQuestions = async () => {
            try {
                const response = await axios.get('URL_TO_BACKEND_API');
                setQuestions(response.data);
            } catch (error) {
                console.error('Error fetching questions:', error);
            }
        };

        fetchQuestions();
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (questions[currentQuestionIndex].answer === selectedOption) {
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

    // Conditional rendering if data is not yet loaded
    if (questions.length === 0) {
        return <div>Loading questions...</div>;
    }

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
                        <input type="radio" id={`choice${index}`} name="answer" value={option} checked={selectedOption === option} onChange={(e) => setSelectedOption(e.target.value)} />
                        <label htmlFor={`choice${index}`}>{String.fromCharCode(65 + index)}) {option}</label>
                    </div>
                ))}
                <button type="submit">Submit Answer</button>
            </form>
        </div>
    );
}

export default ReadingContent;
