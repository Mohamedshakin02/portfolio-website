import React from 'react'
import "/stylesheet/intro.css"; 
import ShakinImg from '../assets/Shakin.png';

function Intro() {
  return (
    <>
        <div className="intro-container container-lg p-4 h-50" style={{ position: 'relative' }}>
            <div className='hello d-flex align-self-center'>
                <h2 className='display-6 fw-medium mb-0'>Hello, I am</h2>
            </div>

            <div className='name '>
                <h1 className='display-1 fw-bold'>Mohamed Shakin</h1>
            </div>

            <div className='links'>
                <div className='link'>
                    <img src="" alt="" />
                    <a href=""></a>
                </div>
                <div className='link'>
                    <img src="" alt="" />
                    <a href=""></a>
                </div>
                <div className='link'>
                    <img src="" alt="" />
                    <a href=""></a>
                </div>
                <div className='link'>
                    <img src="" alt="" />
                    <a href=""></a>
                </div>
            </div>

            <div className='image'>
                <img src={ShakinImg} alt="Shakin" className='img-fluid' />
            </div>

            <div className='welcome d-flex align-self-end'>
                <h2 className='display-4 fw-medium'>Welcome to my portfolio,</h2>
            </div>

            <div className='description'>
                <p className='fs-5 fw-medium'>Explore my projects, skills, and passion for building creative digital experiences.</p>
            </div>
        </div>
    </>
  )
}

export default Intro