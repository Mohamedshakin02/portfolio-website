import React, { useState } from 'react';
import '../App.css';
import '/stylesheet/all_certificates.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

// Certificate images
import CertificateImg1 from '../assets/certificates/HTML.jpg';
import CertificateImg2 from '../assets/certificates/CSS.jpg';
import CertificateImg3 from '../assets/certificates/JavaScript.jpg';
import CertificateImg4 from '../assets/certificates/Responsive.png';
import CertificateImg5 from '../assets/certificates/Bootstrap.png';
import CertificateImg6 from '../assets/certificates/Figma.png';
import CertificateImg7 from '../assets/certificates/Python.png';
import CertificateImg8 from '../assets/certificates/Python-2.jpg';
import CertificateImg9 from '../assets/certificates/Tkinder.jpg';
import CertificateImg10 from '../assets/certificates/Dialogflow.jpeg';
import CertificateImg11 from '../assets/certificates/Data Visualization.jpeg';
import CertificateImg12 from '../assets/certificates/Machine-Learning.png';
import CertificateImg13 from '../assets/certificates/Intro to Machine Learning.png';
import CertificateImg14 from '../assets/certificates/React.png';
import CertificateImg15 from '../assets/certificates/RESTful.png';
import CertificateImg16 from '../assets/certificates/GDG Certificate.png';
import CertificateImg17 from '../assets/certificates/Gradio.png';

function CourseCertificates() {
    const [certificates] = useState([
        { title: 'Introduction to HTML Certificate', image: CertificateImg1 },
        { title: 'Introduction to CSS Certificate', image: CertificateImg2 },
        { title: 'Introduction to JavaScript Certificate', image: CertificateImg3 },
        { title: 'Responsive Layout Certificate', image: CertificateImg4 },
        { title: 'Bootstrap Certificate', image: CertificateImg5 },
        { title: 'Figma Certificate', image: CertificateImg6 },
        { title: 'Introduction to Python Certificate', image: CertificateImg7 },
        { title: 'Python Intermediate Certificate', image: CertificateImg8 },
        { title: 'Python Tkinter Certificate', image: CertificateImg9 },
        { title: 'Dialogflow Certificate', image: CertificateImg10 },
        { title: 'Data Visualization Certificate', image: CertificateImg11 },
        { title: 'Machine Learning Certificate', image: CertificateImg12 },
        { title: 'Into to Machine Learning Certificate', image: CertificateImg13 },
        { title: 'React Certificate', image: CertificateImg14 },
        { title: 'RESTful APIs with Node.js and Express Certificate', image: CertificateImg15 },
        { title: "Google's Agent Developemnt Kit Workshop Certificate", image: CertificateImg16 },
        { title: "Gradio Interface Certificate", image: CertificateImg17 },
    ]);

    return (

        <>

            <style>
                        {`
                .all-certificates-content .course-certificate-card{
                height: 25rem;}

                @media (max-width: 992px) {
                    .all-certificates-content .course-certificate-card{
                    height: 20rem !important;}

                @media (max-width: 576px) {
                    .all-certificates-content .course-certificate-card{
                    height: 15rem !important;}
            `}

            </style>


            <div className="all-certificates-container container-md">
                <h1 className="display-3 fw-semibold text-center mb-5">Course Certificates</h1>

                <div className="all-certificates-content p-0 pb-3 p-md-4 p-lg-5" style={{ pointerEvents: "auto" }}>
                    <Swiper
                        slidesPerView={"auto"}
                        centeredSlides={true}
                        spaceBetween={50}
                        initialSlide={0}
                        loop={true}
                        pagination={{ clickable: true, dynamicBullets: true, }}
                        modules={[Pagination]}
                        className="mySwiper"
                        breakpoints={{
                            0: {
                                centeredSlides: true,
                            },
                            576: {
                                centeredSlides: true,
                            },
                            768: {
                                centeredSlides: false,
                                spaceBetween: 40,
                            },
                            992: {
                                centeredSlides: false,
                                spaceBetween: 40,
                            },
                            1200: {
                                centeredSlides: false,
                            },
                        }}
                    >
                        {certificates.map((certificate, index) => (
                            <SwiperSlide key={index} className="certificate-slide">
                                <div className="all-certificate-card course-certificate-card">
                                    <img
                                        src={certificate.image}
                                        alt={certificate.title}
                                        className="certificate-img"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

        </>
    );
}

export default CourseCertificates