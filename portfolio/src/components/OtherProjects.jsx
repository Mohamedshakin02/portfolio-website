import React, { useState } from 'react';
import '../App.css';
import '/stylesheet/all_projects.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ProjectImg1 from '../assets/projects/Garden-Chatbot.png';
import ProjectImg2 from '../assets/projects/Agriculture-Data.png';
import ProjectImg3 from '../assets/projects/p5js-works.png';
import ProjectImg4 from '../assets/projects/Arduino.png';
import WebLogo from '../assets/logos/web-logo.png';
import GithubLogo from '../assets/logos/github-logo.png';
import YoutubeLogo from '../assets/logos/youtube-logo2.png';

function OtherProjects() {
    const [projects] = useState([
        {
            title: 'Garden Chatbot',
            description: 'Developed Garden Chatbot using Google Dialogflow to provide personalized plant recommendations based on the user’s environment, offering simple and engaging gardening guidance.',
            image: ProjectImg1,
            link: 'https://garden-chatbot-project.vercel.app/',
        },
        {
            title: 'Agriculture Data Visualization',
            description: "Agriculture Data Visualization is an interactive project created using Flourish, showing how agriculture has changed over time and across regions, allowing users to explore the data and understand regional and global trends.",
            image: ProjectImg2,
            link: 'https://public.flourish.studio/story/3056211/',
        },
        {
            title: 'Arduino Experiment Portfolio',
            description: "Developed Arduino physical computing experiments using sensors, LEDs, and interactive components. Worked on circuit connections, coding, and hardware integration to create creative and engaging interactive systems.",
            image: ProjectImg4,
            github: 'https://github.com/Mohamedshakin02/arduino-experiment-portfolio.git',
            youtube: 'https://www.youtube.com/playlist?list=PLRb-GveDzYRqrIj2GRFiNw2d2XcCFN_Ab',
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
                                                title='Live Link'
                                            >
                                                <img src={WebLogo} alt="Website Link" className='me-1' style={{ width: '21px' }} />
                                                Live Link
                                            </a>
                                        )}
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-decoration-none text-body text-dark fs-5 fw-medium d-flex align-items-center"
                                                title='Github Link'
                                            >
                                                <img src={GithubLogo} alt="GitHub Link" className='me-1' style={{ width: '21px' }} />
                                                Code Link
                                            </a>
                                        )}
                                        {project.youtube && (
                                            <a
                                                href={project.youtube}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-decoration-none text-body text-dark fs-5 fw-medium d-flex align-items-center"
                                                title='Youtube Link'
                                            >
                                                <img src={YoutubeLogo} alt="Youtube Link" className='me-1' style={{ width: '25px' }} />
                                                YouTube Link
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