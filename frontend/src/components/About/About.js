import React from 'react';
import './About.css';
import girl from '../../assets/about/girl.svg';

const About = () => {
    return (
        <div className="about">
            <div className="bg">
                <div className="bg-text">
                    <h1>We are doing web development</h1>
                    <p>Contact us if you are interested</p>
                </div>
            </div>
            <div className="content">
                <h1>About</h1>
                <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                <h2>Team</h2>
                <div className="team">
                    <div className="member">
                        <div className="profile">
                            <img src={girl} className="profile-img" alt="" />
                            <p className="name">Zhi Chen</p>
                            <p>Frontend Developer</p>
                            <button type="button" className="btn btn-outline-info">Hire me</button>
                            <div className="social">
                                <i className="fab fa-linkedin"></i>
                                <i className="fab fa-github"></i>
                                <i className="far fa-envelope"></i>
                            </div>
                        </div>
                        <div className="description">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        </div>
                    </div>
                    <div className="member">
                        <div className="profile">
                            <img src={girl} className="profile-img" alt="" />
                            <p className="name">Zhi Chen</p>
                            <p>Frontend Developer</p>
                            <button type="button" className="btn btn-outline-info">Hire me</button>
                            <div className="social">
                                <i className="fab fa-linkedin"></i>
                                <i className="fab fa-github"></i>
                                <i className="far fa-envelope"></i>
                            </div>
                        </div>
                        <div className="description">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About
