import React, { useState } from 'react';
import '../App.css';
import '/stylesheet/all_projects.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

// Certificate images
import CertificateImg1 from '../assets/certificates/GDG Certificate.png';;

function WorkshopCertificates() {
    const [certificates] = useState([
        { title: "Google's Agent Developemnt Kit Workshop Certificate", image: CertificateImg1 },
    ]);

    return (

        <>

            <style>
                {`
  
                      .project-certificates-content .swiper-wrapper{
                      display: flex;
                      justify-content: center;}
  
                      .all-certificates-content .project-certificate-card{
                      height: 25rem;}
      
                      @media (max-width: 992px) {
                          .all-certificates-content .project-certificate-card{
                          height: 20rem !important;}
  
                      @media (max-width: 768px) {
                          .project-certificates-content .swiper-wrapper{
                          justify-content: flex-start;}
                      }
      
                      @media (max-width: 576px) {
                          .all-certificates-content .project-certificate-card{
                          height: 15rem !important;}
                  `}

            </style>


            <div className="all-certificates-container container-md">
                <h1 className="display-3 fw-semibold text-center mb-5">Workshop Certificate</h1>

                <div className="all-certificates-content project-certificates-content p-0 pb-4 p-md-4 p-lg-5" style={{ pointerEvents: "auto" }}>
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
                                <div className="all-certificate-card project-certificate-card mb-2 mb-md-3 mb-lg-0">
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