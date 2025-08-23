import React from 'react'
import '../App.css';
import '/stylesheet/education.css';

function Education() {
    return (
        <>
            <div className="education-container container-md">
                <h1 className="display-1 fw-semibold text-center">Education</h1>
                <div className="education-content p-4 p-lg-5 d-flex flex-column gap-5" style={{ pointerEvents: "auto" }}>
                    <div className="school border  p-4 mb-2 d-flex flex-column flex-lg-row">
                        <div className="left-container d-flex flex-row flex-lg-column ">
                            <div className='level d-flex align-items-center'>
                                <p className='fs-2 fw-medium m-1'>School Education</p>
                            </div>
                            <div className='year d-flex align-items-center'>
                                <p className='number fs-5 fw-medium m-1'>2009-2021</p>
                            </div>
                        </div>

                        <div className='right-container d-flex flex-row flex-lg-column'>
                            <div className="name d-flex align-items-center">
                                <p className='responsive-text fs-2 fw-medium m-1'>The Central School, Dubai</p>
                            </div>

                            <div className="board d-flex align-items-center">
                                <p className='responsive-text fs-5 fw-medium m-1'>CBSE Board</p>
                            </div>
                        </div>

                    </div>

                    <div className="high-school border mb-2 p-4 d-flex flex-column flex-lg-row">
                        <div className="left-container d-flex flex-row flex-lg-column">
                            <div className='level d-flex align-items-center'>
                                <p className='fs-2 fw-medium m-1'>High School, Science</p>
                            </div>
                            <div className='year d-flex align-items-center'>
                                <p className='number fs-5 fw-medium m-1'>2021-2023 </p>
                            </div>
                        </div>

                        <div className='right-container d-flex flex-row flex-lg-column'>
                            <div className="name d-flex align-items-center">
                                <p className='responsive-text fs-2 fw-medium m-1'>The Central School, Dubai</p>
                            </div>

                            <div className="board d-flex align-items-center">
                                <p className='responsive-text fs-5 fw-medium m-1'>CBSE Board</p>
                            </div>
                        </div>

                    </div>

                    <div className="bachelor border mb-3 p-4 d-flex flex-column flex-lg-row">
                        <div className="left-container d-flex flex-row flex-lg-column">
                            <div className='level d-flex align-items-center'>
                                <p className='fs-2 fw-medium m-1'>BSc (Hons) Creative Computing</p>
                            </div>
                            <div className='year d-flex align-items-center'>
                                <p className='number fs-5 fw-medium m-1'>2023-present </p>
                            </div>
                        </div>

                        <div className='right-container d-flex flex-row flex-lg-column'>
                            <div className="name d-flex align-items-center">
                                <p className='responsive-text fs-2 fw-medium m-1'>Bath Spa Univeristy, RAK</p>
                            </div>

                            <div className="board d-flex align-items-center">
                                <p className='responsive-text fs-5 fw-medium m-1'>UK Curriculum</p>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </>
    )
}

export default Education