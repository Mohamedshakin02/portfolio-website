import React from 'react'
import Intro from '../src/components/Intro'
import About from '../src/components/About'
import Skills from '../src/components/Skills'
import Projects from '../src/components/Projects'
import Footer from '../src/components/Footer'
import '../stylesheet/about.css';

function Home() {
  return (
    <>
      <Intro />
      <div className="about-homepage-wrapper">
        {/* Different wrapper for home */}
        <About />
      </div>
      <Skills />
      <Projects />
      <Footer />
    </>
  )
}

export default Home