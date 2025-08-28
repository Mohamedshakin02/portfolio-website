import React, { useState } from 'react';
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

    return (
        <div className="all-certificates-container container-md">
            <h1 className="display-3 fw-semibold text-center mb-5">Academic Certificates</h1>

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
                            spaceBetween:40,
                        },
                        992: {
                            centeredSlides: false,
                            spaceBetween:40,
                        },
                        1200: {
                            centeredSlides: false,
                        },
                    }}
                >
                    {certificates.map((certificate, index) => (
                        <SwiperSlide key={index} className="certificate-slide">
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
            </div>
        </div>
    );
}

export default AcademicCertificates;
