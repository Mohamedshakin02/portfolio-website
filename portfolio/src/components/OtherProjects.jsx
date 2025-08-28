import React, { useState } from 'react';
import '../App.css';
import '/stylesheet/all_projects.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ProjectImg1 from '../assets/projects/Agriculture-Data.png';
import ProjectImg2 from '../assets/projects/Garden-Chatbot.png';
import ProjectImg3 from '../assets/projects/p5js-works.png';
import WebLogo from '../assets/logos/web-logo.png';

function OtherProjects() {
    const [projects] = useState([
        {
            title: 'Agriculture Data Visualization',
            description: "Agriculture Data Visualization is an interactive project created using Flourish, showing how agriculture has changed over time and across regions, allowing users to explore the data and understand regional and global trends.",
            image: ProjectImg1,
            link: 'https://public.flourish.studio/story/3056211/',
        },
        {
            title: 'Garden Chatbot',
            description: 'Developed Garden Chatbot using Google Dialogflow to provide personalized plant recommendations based on the user’s environment, offering simple and engaging gardening guidance.',
            image: ProjectImg2,
            link: 'https://garden-chatbot-project.vercel.app/',
        },
        {
            title: 'p5.js Works',
            description: "Developed multiple p5.js projects that featured dynamic digital art with interactive and unique experiences. Explored coding techniques to produce engaging and creative digital artwork.",
            image: ProjectImg3,
            link: 'https://editor.p5js.org/m.shakin2005/sketches',
        }

    ]);

    return (
        <>

            <div className="all-projects-container container-md">
                <h1 className="display-3 fw-semibold text-center mb-5">Other Projects</h1>

                <div className="all-projects-content p-4 p-lg-5" style={{ pointerEvents: "auto" }}>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={50}
                        initialSlide={0}
                        loop={true}
                        pagination={{ clickable: true, dynamicBullets: true, }}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1200: { slidesPerView: 3 },
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {projects.map((project, index) => (
                            <SwiperSlide key={index}>
                                <div className="all-project-card p-4 h-100 d-flex flex-column">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="img-fluid mb-3"
                                        style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                                    />
                                    <div className="top-container">
                                        <h3 className="fs-4 fw-semibold m-0">{project.title}</h3>
                                    </div>
                                    <p className="flex-grow-1 h5 fw-medium h-50">{project.description}</p>
                                    <div className="d-flex justify-content-between mt-4">
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-decoration-none text-body text-dark fs-5 fw-medium d-flex align-items-center"
                                                style={{ pointerEvents: "auto" }}
                                            >
                                                <img src={WebLogo} alt="Website Link" className='me-1' style={{ width: '21px' }} />
                                                Live Link
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    );
}

export default OtherProjects