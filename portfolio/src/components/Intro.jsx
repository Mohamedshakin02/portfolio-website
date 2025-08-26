import React from 'react'
import '../App.css';
import "/stylesheet/intro.css";
import ShakinImg from '../assets/Shakin.png';
import YoutubeLogo from '../assets/logos/youtube-logo.png';
import LinkedInLogo from '../assets/logos/linkedin-logo.png';
import ItchLogo from '../assets/logos/itch-logo.png';
import GithubLogo from '../assets/logos/github-logo.png';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';

function Intro() {
    return (
        <>
            <div className="intro-section">
                <div className="top-layer position-absolute container-fluid p-0 " style={{ pointerEvents: "none" }}>
                    <div className='image d-flex justify-content-center align-items-center position-relative end-3 z-3' style={{ pointerEvents: "none" }}>
                        <img src={ShakinImg} alt="Shakin" className='img-fluid' style={{ pointerEvents: "auto" }}/>
                    </div>
                    <div className="scroll-container container-fluid bg-body-tertiary z-3" style={{ pointerEvents: "auto" }}>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            loop={true}
                            speed={2000}
                            autoplay={{
                                delay: 1500,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay]}
                            breakpoints={{
                                0: {             
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                                768: {           
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                1440: {          
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }}
                            className="mySwiper container-md display-6 fw-medium py-3"
                        >
                            <SwiperSlide>
                                <div className=" text-center bg-light rounded">Web Development</div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className=" text-center bg-light rounded">Software Development</div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className=" text-center bg-light rounded">Game Development</div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className=" text-center bg-light rounded">UI/UX Design</div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className=" text-center bg-light rounded">Web Development</div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className=" text-center bg-light rounded">Software Development</div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className=" text-center bg-light rounded">Game Development</div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className=" text-center bg-light rounded">UI/UX Design</div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>

                <div className="intro-container container-md mt-0 mt-lg-6" style={{ position: 'relative', pointerEvents: "auto" }}>
                    <div className="intro-content p-4">
                        <div className='hello d-flex align-self-center'>
                            <h2 className='display-6 fw-medium mb-0'>Hello, I am</h2>
                        </div>

                        <div className='name '>
                            <h1 className='display-1 fw-bold'>Mohamed Shakin</h1>
                        </div>

                        <div className='links d-flex flex-wrap align-items-center gap-3'>
                            <div className='link'>
                                <a href="https://github.com/Mohamedshakin02" target="_blank"><img src={GithubLogo} alt="githib.com" className='img-fluid p-2' /></a>
                            </div>
                            <div className='link'>
                                <a href="https://mohamed-shakin.itch.io/" target="_blank"><img src={ItchLogo} alt="itch.io" className='img-fluid p-2' /></a>
                            </div>
                            <div className='link'>
                                <a href="https://www.linkedin.com/in/mohamed-shakin/" target="_blank"><img src={LinkedInLogo} alt="linkedin.com" className='img-fluid p-2' /></a>
                            </div>
                            <div className='link'>
                                <a href="https://www.youtube.com/@mohamedshakin5397" target="_blank"><img src={YoutubeLogo} alt="youtube.com" className='img-fluid p-2' /></a>
                            </div>
                        </div>

                        <div className='image-holder'>

                        </div>

                        <div className='welcome d-flex align-self-end'>
                            <h2 className='display-5 fw-medium'>Welcome to my portfolio,</h2>
                        </div>

                        <div className='description'>
                            <p className='fs-4 fw-medium'>Explore my projects, skills, and passion for building creative digital experiences.</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Intro