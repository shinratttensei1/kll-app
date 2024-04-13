import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import AdditionalContent from './components/AdditionalContent';
import ReadingContent from './components/ReadingContent';  // Make sure this is imported
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={
                      <>
                        <Hero />
                        <AdditionalContent /> {/* Now included in your main page */}
                      </>
                    } />
                    <Route path="/reading" element={<ReadingContent />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
