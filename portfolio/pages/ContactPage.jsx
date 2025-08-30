import React from 'react'
import "../stylesheet/contact.css";
import '../src/App.css';
import Footer from '../src/components/Footer';

function ContactPage() {
    return (
        <>
            <div className="contact-container container-md">
                <h1 className="display-3 fw-semibold text-center mb-5">Contact Me</h1>
                <div className="contact-content p-4 p-lg-5 pb-5" style={{ pointerEvents: "auto" }}>
                    <p className="display-6 fw-medium mt-2">Let’s get in touch! Here’s how you can connect with me.</p>

                    <div className='email mt-4 mt-md-3 mt-lg-5'>
                        <a href="mailto:m.shakin2005@gmail.com"
                            target="_blank"
                            className="d-block text-decoration-none text-dark fs-2 fw-medium d-flex align-items-center"
                            title='Email ID'
                            style={{ wordBreak: "break-word" }}>

                            <i className="bi bi-envelope-fill display-5 me-3 me-md-5 mt-2"></i>
                            m.shakin2005@gmail.com
                        </a>
                    </div>

                    <div className='phone mt-4 mt-md-4'>
                        <a href="tel:+971504385645"
                                target="_blank"
                                className="number d-block text-decoration-none text-dark fs-3 fw-medium d-flex align-items-center"
                                title='Mobile Number'>

                                <i className="bi bi-telephone-fill display-5 me-3 me-md-5 mt-1"></i>
                                +971504385645
                            </a>
                    </div>

                     <div className='linkedin mt-4 mt-md-4'>
                        <a href="https://www.linkedin.com/in/mohamed-shakin/"
                                target="_blank"
                                className=" d-block text-decoration-none text-dark fs-2 fw-medium d-flex"
                                title='LinkedIn Profile'
                                style={{ wordBreak: "break-word" }}>

                                <i className="bi bi-linkedin display-5 me-3 me-md-5 mt-2"></i>
                                https://www.linkedin.com/in/mohamed-shakin/
                            </a>
                    </div>
                </div>

            </div>

            <div className='contact-footer'>
                <Footer />
            </div>
        </>
    )
}

export default ContactPage