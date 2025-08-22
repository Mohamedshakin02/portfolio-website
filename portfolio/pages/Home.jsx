import React from 'react'
import Intro from '../src/components/Intro'
import About from '../src/components/About'
import Skills from '../src/components/Skills'
import Projects from '../src/components/Projects'
import Footer from '../src/components/Footer'

function Home() {
  return (
    <>
            <Intro/>
            <About/>
            <Skills/>
            <Projects/>
            <Footer/>
    </>
  )
}

export default Home