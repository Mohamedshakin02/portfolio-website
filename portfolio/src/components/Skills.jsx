import React from 'react'
import '../App.css';
import '/stylesheet/skills.css';
import WebLogo from '../assets/logos/web-logo.png';
import SoftwareLogo from '../assets/logos/software-logo.png';
import DesignLogo from '../assets/logos/design-logo.png';
import GameLogo from '../assets/logos/game-logo.png';

function Skills() {
    return (
        <>
            <div className="skills-container container-md">
                <h1 className="display-1 fw-semibold text-center">Skills</h1>

                <div className="skills-content p-4 pt-5 p-lg-5 pt-lg-6" style={{ pointerEvents: "auto" }}>
                    <div className='skill web p-4 d-flex flex-column justify-content-between'>
                        <div className='top-container d-flex align-items-center h-25'>
                            <div className="image">
                                <img src={WebLogo} alt="Web development" className='img-fluid' />
                            </div>
                            <div className='name'>
                                <p className='m-0 fs-2 fw-semibold'>Web Development</p>
                            </div>
                        </div>
                        <div className='bottom-container mt-4 d-flex flex-column justify-content-between'>
                            <div className="description">
                                <p className='h5 fw-normal'>Building responsive and modern websites with clean layouts and smooth functionality. From simple projects to full-featured sites, delivering engaging and user-friendly web experiences.</p>
                            </div>
                            <div className='tools mt-3 h-25'>
                                <p className='m-0 fs-5 fw-medium'>Tools: HTML, CSS, JavaScript, React</p>
                            </div>
                        </div>
                    </div>

                    <div className='skill software p-4 d-flex flex-column justify-content-between'>
                        <div className='top-container d-flex align-items-center h-25'>
                            <div className="image">
                                <img src={SoftwareLogo} alt="Software development" className='img-fluid' />
                            </div>
                            <div className='name'>
                                <p className='m-0 fs-2 fw-semibold'>Software Development</p>
                            </div>
                        </div>
                        <div className='bottom-container mt-4 d-flex flex-column justify-content-between'>
                            <div className="description">
                                <p className='h5 fw-normal'>Developing practical and efficient software solutions, from API-based programs to Android applications, with a focus on functionality and usability.</p>
                            </div>
                            <div className='tools mt-3 h-25'>
                                <p className='m-0 fs-5 fw-medium'>Tools: Python, Tkinter, JavaScript, Android Studio</p>
                            </div>
                        </div>
                    </div>

                    <div className='skill design p-4 d-flex flex-column justify-content-between'>
                        <div className='top-container d-flex align-items-center h-25'>
                            <div className="image">
                                <img src={DesignLogo} alt="UI/UX Design" className='img-fluid' />
                            </div>
                            <div className='name'>
                                <p className='m-0 fs-2 fw-semibold'>UI/UX Design</p>
                            </div>
                        </div>
                        <div className='bottom-container mt-4 d-flex flex-column justify-content-between'>
                            <div className="description">
                                <p className='h5 fw-normal'>Creating intuitive and user-friendly interfaces through wireframes and prototypes, ensuring designs balance aesthetics and functionality.</p>
                            </div>
                            <div className='tools mt-3 h-25'>
                                <p className='m-0 fs-5 fw-medium'>Tools: Figma, Canva</p>
                            </div>

                        </div>
                    </div>

                    <div className='skill game p-4 d-flex flex-column justify-content-between'>
                        <div className='top-container d-flex align-items-center h-25'>
                            <div className="image">
                                <img src={GameLogo} alt="game development" className='img-fluid' />
                            </div>
                            <div className='name'>
                                <p className='m-0 fs-2 fw-semibold'>Game Development</p>
                            </div>
                        </div>
                        <div className='bottom-container mt-4 d-flex flex-column justify-content-between'>
                            <div className="description">
                                <p className='h5 fw-normal'>Designing fun and interactive games that combine creativity with engaging mechanics, suitable for storytelling and entertainment.</p>
                            </div>
                            <div className='tools mt-3 h-25'>
                                <p className='m-0 fs-5 fw-medium'>Tools: Unity, Twine, Bitsy, p5.js</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Skills