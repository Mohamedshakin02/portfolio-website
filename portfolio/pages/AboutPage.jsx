import React from 'react'
import About from '../src/components/About'
import "../stylesheet/about_page.css";
import Education from '../src/components/Education';
import Skills from '../src/components/Skills'
import Footer from '../src/components/Footer';

function AboutPage() {
    return (
        <>
            <div className="about-section">
                <About />
            </div>
            <Education />
            <div className="skills-section">
                <Skills/>
            </div>
            <div className="footer-section">
                <Footer/>
            </div>    
            
        </>

    )
}

export default AboutPage