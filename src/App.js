import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ReadingContent from './components/ReadingContent';  // Make sure this is imported
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Hero />} />
                    <Route path="/reading" element={<ReadingContent />} />  // Ensure this line is correct
                </Routes>
            </div>
        </Router>
    );
}

export default App;
