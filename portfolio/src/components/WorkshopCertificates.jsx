import React, { useState } from 'react';
import '../App.css';
import '/stylesheet/all_projects.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

// Certificate images
import CertificateImg1 from '../assets/certificates/GDG Certificate.png';
import CertificateImg2 from '../assets/certificates/Mission Digital Escape.png';

function WorkshopCertificates() {
    const [certificates] = useState([
        { title: "Google's Agent Developemnt Kit Workshop Certificate", image: CertificateImg1 },
        { title: "Mission Digital Escape Workshop Certificate", image: CertificateImg2 },
    ]);

    return (

        <>

            <style>
                {`
  
                      .all-certificates-content .workshop-certificate-card{
                      height: 25rem;}
      
                      @media (max-width: 992px) {
                          .all-certificates-content .workshop-certificate-card{
                          height: 20rem !important;}
  
                      @media (max-width: 768px) {
                          .workshop-certificates-content .swiper-wrapper{
                          justify-content: flex-start;}
                      }
      
                      @media (max-width: 576px) {
                          .all-certificates-content .workshop-certificate-card{
                          height: 15rem !important;}
                  `}

            </style>


            <div className="all-certificates-container container-md">
                <h1 className="display-3 fw-semibold text-center mb-5">Workshop Certificates</h1>

                <div className="all-certificates-content workshop-certificates-content p-0 pb-4 p-md-4 p-lg-5" style={{ pointerEvents: "auto" }}>
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
                                loop: false,
                                centeredSlides: true,
                            },
                            576: {
                                loop: false,
                                centeredSlides: true,
                            },
                            768: {
                                loop: true,
                                centeredSlides: false,
                                spaceBetween: 40,
                            },
                            992: {
                                loop: true,
                                centeredSlides: false,
                                spaceBetween: 40,
                            },
                            1200: {
                                loop: true,
                                centeredSlides: false,
                            },
                        }}
                    >
                        {certificates.map((certificate, index) => (
                            <SwiperSlide key={index} className="certificate-slide">
                                <div className="all-certificate-card workshop-certificate-card mb-2 mb-md-3 mb-lg-0">
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

export default WorkshopCertificates