import React from 'react';
import '../css/Footer.css';
import flagEng from '../images/engflag.png'; // Make sure you have these images in your images folder
import flagRus from '../images/rusflag.png';


function Footer() {
    return (
        <footer className="footer">
            <div className="language-option">
                <img src={flagEng} alt="English" />
                <span>Английский</span>
            </div>
            <div className="language-option">
                <img src={flagRus} alt="Russian" />
                <span>Русский</span>
            </div>
        </footer>
    );
}

export default Footer;
