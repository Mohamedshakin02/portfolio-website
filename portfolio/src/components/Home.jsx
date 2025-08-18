import React from 'react'
import Background from './background'
import Intro from './Intro'

function Home() {
  return (
    <>
        <Background/>
        <main className='position-absolute top-0 start-0 w-100 my-4 d-flex justify-content-center'>
            <Intro/>
        </main>
    </>
  )
}

export default Home