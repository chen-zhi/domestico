import React from 'react';
import './About.css';
import mapUrl from '../../assets/about/bg.jpeg';

const About = () => {
    return (
        <div className="about">
            <div className="bg" style={{ background: `no-repeat url(${mapUrl}) center` }}>
                <div className="bg-text">
                    <h1>We are doing web development</h1>
                    <p>Contact us if you are interested</p>
                </div>
            </div>
            <div className="content">
                <h1>About</h1>
                <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                <h2>Team</h2>
            </div>

        </div>
    )
}

export default About
