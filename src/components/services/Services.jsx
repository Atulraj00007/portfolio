import React from "react";
import { useState } from "react";
import './services.css';

const Services = () => {

    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What I Offer </span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">Technical <br/> Skills</h3>
                    </div>

                    <span className="services__button" onClick={()=>
                    toggleTab(1)}>View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState===1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={()=>toggleTab(0)}
                            className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title">Technical Skills</h3>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Programming.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Web Page Development.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Data Analysis.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Troubleshooting.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">Non-Technical <br/> Skills</h3>
                    </div>

                    <span onClick={()=> toggleTab(2)} className="services__button">View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState===2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={()=>toggleTab(0)} className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title">Non-Technical Skills</h3>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Problem-Solving.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Communication.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Project-Management</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-edit services__icon"></i>
                        <h3 className="services__title">Additional <br/> Services</h3>
                    </div>

                    <span onClick={()=> toggleTab(3)} className="services__button">View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState===3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={()=>toggleTab(0)} className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title">Additional Services</h3>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Freelance Works.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Open Source Contributions.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Developing Personal Portfolio.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services