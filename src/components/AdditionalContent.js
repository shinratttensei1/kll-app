import React from 'react';
import '../css/AdditionalContent.css';
import readingImg from '../images/fe99fdd3e5cfe5580144445eeb262980.png'; // Adjust path accordingly
import grammarImg from '../images/108672661-grammar-vector-icon-isolated-on-transparent-background-grammar-logo-concept.jpg';
import speakingImg from '../images/png-transparent-computer-icons-speech-speaking-miscellaneous-text-logo.png';

function AdditionalContent() {
    return (
        <div className="additional-content">
            <div className="module">
                <div className="module-text">
                    <h2>Reading Module</h2>
                    <p>Improve your reading skills with structured lessons and interactive exercises designed to enhance comprehension and vocabulary.</p>
                    <button>Explore Reading</button>
                </div>
                <div className="module-image">
                    <img src={readingImg} alt="Reading" />
                </div>
            </div>
            <div className="module module-reversed">
                {/* add additional css for the text to have left margin */}
                <div className="module-text" style={{ marginLeft: '100px' }}>
                    <h2>Grammar Module</h2>
                    <p>Master Kazakh grammar with detailed explanations and practical applications in everyday contexts.</p>
                    <button>Explore Grammar</button>
                </div>
                <div className="module-image">
                    <img src={grammarImg} alt="Grammar" />
                </div>
            </div>
            <div className="module">
                <div className="module-text">
                    <h2>Speaking Module</h2>
                    <p>Enhance your speaking abilities through guided lessons that focus on pronunciation, fluency, and interaction.</p>
                    <button>Explore Speaking</button>
                </div>
                <div className="module-image">
                    <img src={speakingImg} alt="Speaking" />
                </div>
            </div>
        </div>
    );
}

export default AdditionalContent;
