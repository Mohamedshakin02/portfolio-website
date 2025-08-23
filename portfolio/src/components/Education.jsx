import React from 'react'
import '../App.css';
import '/stylesheet/education.css';

function Education() {
    return (
        <>
            <div className="education-container container-md">
                <h1 className="display-1 fw-semibold text-center">Education</h1>
                <div className="education-content p-4 p-lg-5 d-flex flex-column gap-5" style={{ pointerEvents: "auto" }}>
                    <div className="school border  mb-2 p-3 p-md-4">
                            <div className='level'>
                                <p className='fs-2 fw-medium m-1'>School Education</p>
                            </div>
                            <div className='year'>
                                <p className='number fs-5 fw-medium m-md-1 py-0 py-sm-2 py-lg-0'>2009-2021</p>
                            </div>

                            <div className="name ">
                                <p className='responsive-text fs-2 fw-medium m-1'>The Central School, Dubai</p>
                            </div>

                            <div className="board ">
                                <p className='responsive-text fs-5 fw-medium m-1'>CBSE Board</p>
                            </div>

                    </div>

                    <div className="high-school border mb-2 p-3 p-md-4">
                            <div className='level '>
                                <p className='fs-2 fw-medium m-1'>High School, Science</p>
                            </div>
                            <div className='year '>
                                <p className='number fs-5 fw-medium m-md-1 py-0 py-sm-2 pt-lg-0'>2021-2023 </p>
                            </div>


                            <div className="name ">
                                <p className='responsive-text fs-2 fw-medium m-1'>The Central School, Dubai</p>
                            </div>

                            <div className="board ">
                                <p className='responsive-text fs-5 fw-medium m-1'>CBSE Board</p>
                            </div>


                    </div>

                    <div className="bachelor border mb-3 p-3 p-md-4">
                            <div className='level '>
                                <p className='fs-2 fw-medium m-1'>BSc (Hons) Creative Computing</p>
                            </div>
                            <div className='year '>
                                <p className='number fs-5 fw-medium m-md-1 py-0 py-sm-2 pt-lg-0'>2023-present </p>
                            </div>


                            <div className="name ">
                                <p className='responsive-text fs-2 fw-medium m-1'>Bath Spa Univeristy, RAK</p>
                            </div>

                            <div className="board ">
                                <p className='responsive-text fs-5 fw-medium m-1'>UK Curriculum</p>
                            </div>

                    </div>


                </div>
            </div>
            
        </>
    )
}

export default Education