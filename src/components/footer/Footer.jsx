import React from "react";
import './footer.css';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Atul Raj</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer__link">Porfolio</a>
                    </li>
                    <li>
                        <a href="#skills" className="footer__link">Skills</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.instagram.com/ar_atulraj/" className="home__social-icon" target="_blank">
                        <i className="bx bxl-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/atul-raj-608003221/" className="home__social-icon" target="_blank">
                        <i className="uil uil-link-h"></i>
                    </a>
                    <a href="https://github.com/Atulraj00007 " className="home__social-icon" target="_blank">
                        <i className="uil uil-github-alt"></i>
                    </a>
                </div>

                <span className="footer__copy">&#169; Atul raj. All rights are reserved</span>
            </div>
        </footer>
    )
}

export default Footer