import React from "react";
import { useState } from "react";
import './qualification.css'

const Qualification = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };


    return (
        <section className="section qualification" id="portfolio">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My Personal Journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState===1 ?
                    "qualification__button qualification__active button--flex"
                    :   "qualification__button button--flex"}
                    onClick={()=>toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>
                    <div className={toggleState===2 ?
                        "qualification__button qualification__active button--flex"
                        :   "qualification__button button--flex"}
                        onClick={()=>toggleTab(2)}
                        >
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Projects
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState===1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Chitkara University</h3>
                                <span className="qulaification__subtitle">Rajpura, Punjab</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                    2021-2025
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Central Public School</h3>
                                <span className="qulaification__subtitle">Adityapur, Jamshedpur</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                    2018-2020
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Chinmaya Vidyalaya, South Park</h3>
                                <span className="qulaification__subtitle">Bistupur, Jamshedpur</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                    2018-2020
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                            </div>
                        </div>
                    </div>

                    <div className={toggleState===2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data ">
                            <div>
                                <h3 className="qualification__title">Study Notion</h3>
                                <span className="qulaification__subtitle">MERN-based EdTech Platform</span>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Weather App</h3>
                                <span className="qulaification__subtitle">Integrated real-time weather data </span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Dev Detective</h3>
                                <span className="qulaification__subtitle">GitHub account detector</span>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification