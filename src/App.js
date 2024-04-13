import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import AdditionalContent from './components/AdditionalContent';
import DataFetcher from './components/DataFetcher';  // Make sure this is imported
import ReadingContent from './components/ReadingContent';  // Make sure this is imported
import './App.css';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={
                      <>
                        <Hero />
                        <Footer />
                        <AdditionalContent /> 
                      </>
                    } />
                    <Route path="/reading" element={<ReadingContent />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
