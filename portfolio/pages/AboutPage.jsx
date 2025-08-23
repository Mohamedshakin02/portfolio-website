import React from 'react'
import About from '../src/components/About'
import "../stylesheet/about_page.css";
import Education from '../src/components/Education';

function AboutPage() {
    return (
        <div className="about-page-wrapper">
            <About />
            <Education/>
        </div>
    )
}

export default AboutPage