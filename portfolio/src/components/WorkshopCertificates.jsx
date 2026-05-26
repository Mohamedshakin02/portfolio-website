import React, { useState, useRef, useEffect } from 'react';
import '../App.css';
import '/stylesheet/all_projects.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

// Certificate images
import CertificateImg1 from '../assets/certificates/GDG Certificate.png';
import CertificateImg2 from '../assets/certificates/Vibe Coding Challenge.png';
import CertificateImg3 from '../assets/certificates/Mission Digital Escape.png';

function WorkshopCertificates() {
    const [certificates] = useState([
        { title: "Google's Agent Developemnt Kit Workshop Certificate", image: CertificateImg1 },
        { title: "Vibe Coding Challenge Workshop Certificate", image: CertificateImg2 },
        { title: "Mission Digital Escape Workshop Certificate", image: CertificateImg3 },
    ]);

    const swiperRef = useRef(null);

    const slidePrev = () => swiperRef.current?.slidePrev();
    const slideNext = () => swiperRef.current?.slideNext();

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    // stores current slide in React state
    const [currentSlide, setCurrentSlide] = useState(0);

    // keeps latest slide index (used during resize recovery)
    const currentSlideRef = useRef(0);

    // used to stop updates while screen is resizing
    const isResizingRef = useRef(false);

    useEffect(() => {
        let resizeTimer;

        const handleResize = () => {

            // lock index tracking immediately so Swiper cannot overwrite it
            isResizingRef.current = true;
            setIsMobile(window.innerWidth < 768);

            // clear out any previous timers
            clearTimeout(resizeTimer);

            // unlock after resize finishes
            resizeTimer = setTimeout(() => {
                
                isResizingRef.current = false;

                // force Swiper back to the correct slide after resize
                if (swiperRef.current && !swiperRef.current.destroyed) {
                    const swiper = swiperRef.current;
                    if (swiper.params.loop) {
                        swiper.slideToLoop(currentSlideRef.current, 0, false);
                    } else {
                        swiper.slideTo(currentSlideRef.current, 0, false);
                    }
                }
            }, 150);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(resizeTimer);
        };
    }, []);


    return (

        <>

            <style>
                {`
  
                      .all-certificates-content .workshop-certificate-card{
                      height: 25rem;}

                    .workshop-certificates-content .slider-arrows{
                    padding: 0 2rem !important;
                    }

                      
                    @media (max-width: 1400px){
                        .workshop-certificates-content{
                        padding-bottom: 2rem !important;}
                    }
      
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

                    <div className="swiper-wrapper-container position-relative">
                        <Swiper
                            key={isMobile ? 'mobile' : 'desktop'}
                            slidesPerView={"auto"}
                            centeredSlides={true}
                            spaceBetween={50}
                            initialSlide={currentSlide}
                            onRealIndexChange={(swiper) => {
                                // only update slide tracking if the screen is NOT actively rotating
                                if (!isResizingRef.current) {
                                    setCurrentSlide(swiper.realIndex);
                                    currentSlideRef.current = swiper.realIndex;
                                }
                            }}

                            loop={!isMobile}
                            observer={true}
                            observeParents={true}
                            pagination={{ clickable: true, dynamicBullets: true, }}
                            modules={[Pagination]}
                            className="mySwiper"

                            onSwiper={(swiper) => {
                                swiperRef.current = swiper;

                                // ensure it starts on the correct slide
                                setTimeout(() => {
                                    if (swiper && !swiper.destroyed) {
                                        if (swiper.params.loop) {
                                            swiper.slideToLoop(currentSlideRef.current, 0, false);
                                        } else {
                                            swiper.slideTo(currentSlideRef.current, 0, false);
                                        }
                                    }
                                }, 0);
                            }}

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
                                    <div className="all-certificate-card workshop-certificate-card mb-md-3 mb-lg-0">
                                        <img
                                            src={certificate.image}
                                            alt={certificate.title}
                                            className="certificate-img"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {certificates.length > 2 && (
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

export default WorkshopCertificates