import React, { useState, useRef } from 'react';
import '../App.css';
import '/stylesheet/all_certificates.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

// Certificate images
import CertificateImg1 from '../assets/certificates/Certificate-1.png';
import CertificateImg2 from '../assets/certificates/Certificate-2.png';
import CertificateImg3 from '../assets/certificates/Certificate-3.png';
import CertificateImg4 from '../assets/certificates/Certificate-4.png';

function AcademicCertificates() {
    const [certificates] = useState([
        { title: 'Academic Excellence Award Semester 1', image: CertificateImg1 },
        { title: 'Academic Excellence Award Semester 2', image: CertificateImg2 },
        { title: 'Academic Excellence Award Semester 3', image: CertificateImg3 },
        { title: 'Academic Excellence Award Semester 4', image: CertificateImg4 }
    ]);

    const swiperRef = useRef(null);

    const slidePrev = () => swiperRef.current?.slidePrev();
    const slideNext = () => swiperRef.current?.slideNext();

    return (
        <>
            <style>
                {`
    .academic-certificates-content {
        padding-bottom: 2rem !important;
    }

    .academic-certificates-content .slider-arrows{
            padding: 0 2rem !important;
    }
`}
            </style>

            <div className="all-certificates-container container-md">
                <h1 className="display-3 fw-semibold text-center mb-5">Academic Certificates</h1>

                <div className="all-certificates-content academic-certificates-content p-0 pb-3 p-md-4 p-lg-5" style={{ pointerEvents: "auto" }}>

                    <div className="swiper-wrapper-container position-relative">
                        <Swiper
                            slidesPerView={"auto"}
                            centeredSlides={true}
                            spaceBetween={50}
                            initialSlide={0}
                            observer={true}        
                            observeParents={true}
                            pagination={{ clickable: true, dynamicBullets: true, }}
                            modules={[Pagination]}
                            className="mySwiper"
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
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
                                <SwiperSlide key={index} className={`certificate-slide slide-${index + 1}`}>
                                    <div className="all-certificate-card">
                                        <img
                                            src={certificate.image}
                                            alt={certificate.title}
                                            className="certificate-img"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {certificates.length > 3 && (
                            <div className="slider-arrows">
                                <button onClick={slidePrev}>
                                    <i className="bi bi-caret-left-fill"></i>
                                </button>

                                <button onClick={slideNext}>
                                    <i className="bi bi-caret-right-fill"></i>
                                </button>
                            </div>
                        )}
                    </div>

                </div>
            </div>

        </>
    );
}

export default AcademicCertificates;
