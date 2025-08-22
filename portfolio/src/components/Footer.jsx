import React from 'react'
import '../App.css';
import '/stylesheet/footer.css';

function Footer() {
    return (
        <>
            <div className='footer-container container-fluid' style={{ pointerEvents: "auto" }}>
                <div className='footer-content container-md p-4 pt-5 pb-0 p-lg-5 pb-lg-0'>
                    <div className='top-container gap-5 gap-lg-8'>
                        <div className='name'>
                            <h3 className='h1'>Designed and Developed by </h3>
                            <h1 className='display-1 fw-bold'>Mohamed Shakin</h1>
                        </div>

                        <div className='links'>
                            <h3 className='h1'>Links</h3>
                            <div className='link'>
                                <a href="https://github.com/Mohamedshakin02" target="_blank" className='text-decoration-none text-body text-dark fs-4 fw-medium'>LinkedIn</a>
                            </div>

                            <div className='link'>
                                <a href="https://github.com/Mohamedshakin02" target="_blank" className='text-decoration-none text-body text-dark fs-4 fw-medium'>Github</a>
                            </div>

                            <div className='link'>
                                <a href="https://github.com/Mohamedshakin02" target="_blank" className='text-decoration-none text-body text-dark fs-4 fw-medium'>Itch.io</a>
                            </div>

                            <div className='link'>
                                <a href="https://github.com/Mohamedshakin02" target="_blank" className='text-decoration-none text-body text-dark fs-4 fw-medium'>Youtube</a>
                            </div>
                        </div>

                        <div className='contact'>
                            <h3 className='h1'>Contact</h3>
                            <div className='link'>
                                <a href="mailto:m.shakin2005@gmail.com" target="_blank" className='text-decoration-none text-body text-dark fs-4 fw-medium'>m.shakin<span className='number fs-5'>2005</span>@gmail.com</a>
                            </div>
                            <div className='link mt-1'>
                                <a href="tel:+4733378901" target="_blank" className='number text-decoration-none text-body text-dark fs-5 fw-medium'>+971504385645</a>
                            </div>
                        </div>

                    </div>

                    <div className='bottom-container mt-5 pb-1'>
                        <p className='fs-5'>Copyright © <span className='number fs-6'>2025</span> Mohamed Shakin </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer