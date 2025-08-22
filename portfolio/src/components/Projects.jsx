import React, { useState } from 'react';
import '/stylesheet/projects.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import ProjectImg1 from '../assets/projects/G-Shock.png';
import ProjectImg2 from '../assets/projects/Info-Globe.png';
import ProjectImg3 from '../assets/projects/CML.png';
import ProjectImg4 from '../assets/projects/Pixel-Football.png';
import GithubLogo from '../assets/logos/github-logo.png';
import GameLogo from '../assets/logos/game-logo.png';
import YoutubeLogo from '../assets/logos/youtube-logo2.png';
import WebLogo from '../assets/logos/web-logo.png';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Projects() {
    const [projects] = useState([
        {
            title: 'G-Shock Responsive Website',
            description: 'Developed a responsive G-Shock website using React.js, integrated with a Node.js/MongoDB backend for user login, featuring watch details and fully responsive design across desktop, tablet, and mobile devices.',
            image: ProjectImg1,
            github: 'https://github.com/Mohamedshakin02/G-SHOCK-Watch.git',
            link: 'https://g-shock.vercel.app/',
            type: "Web Development",
        },
        {
            title: ' Info Globe GUI',
            description: "Developed Info Globe, a Python Tkinter GUI app that fetches country data from the RestCountries API, featuring search, random country display, and region/language filters.",
            image: ProjectImg2,
            github: 'https://github.com/Mohamedshakin02/Python-Projects/tree/main/Data%20Driven%20Application',
            youtube: 'https://youtu.be/HDZiiggFHlM?si=NS_cXg5EcYnzWaLF',
            type: "Software Development",
        },
        {
            title: 'CML Company Website',
            description: 'Developed a responsive website for CML Company as part of a university assessment, highlighting musical events, consulting, and products. My role included responsive development, UI design, and contributing ideas.',
            image: ProjectImg3,
            github: 'https://github.com/Zeko54/CML.git',
            link: 'https://cml-henna.vercel.app/',
            type: "Web Development",
        },
        {
            title: 'Pixel Football 2D Game',
            description: 'Developed a 2D pixel art football game in Unity with simple controls and fast-paced, engaging gameplay. Designed a side-view match with 2–5 minute durations, focusing on scoring goals and an engaging gameplay experience.',
            image: ProjectImg4,
            game: 'https://mohamed-shakin.itch.io/pixel-football',
            type: "Game Development",
        }
    ]);

    return (
        <>
            <div className="projects-container container-md">
                <h1 className="display-1 fw-semibold text-center mb-5">Projects</h1>

                <div className="projects-content p-4 pt-1 p-lg-5 pt-lg-6" style={{ pointerEvents: "auto" }}>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={50}
                        loop={true}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 2500, disableOnInteraction: false }}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1200: { slidesPerView: 3 },
                        }}
                        modules={[Autoplay, Pagination]}
                        className="mySwiper"
                    >
                        {projects.map((project, index) => (
                            <SwiperSlide key={index}>
                                <div className="project-card p-4 h-100 d-flex flex-column">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="img-fluid mb-3"
                                        style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                                    />
                                    <div class="top-container">
                                        <h3 className="fs-4 fw-semibold">{project.title}</h3>
                                        <p className="fs-6 fw-medium">{project.type}</p>
                                    </div>
                                    <p className="flex-grow-1 h5 fw-medium h-50">{project.description}</p>
                                    <div className="d-flex justify-content-between mt-4">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-decoration-none text-body text-dark fs-5 fw-medium d-flex align-items-center"
                                            >
                                                <img src={GithubLogo} alt="GitHub Link" className='me-1' style={{ width: '21px' }} />
                                                Code Link
                                            </a>
                                        )}
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-decoration-none text-body text-dark fs-5 fw-medium d-flex align-items-center"
                                            >
                                                <img src={WebLogo} alt="Website Link" className='me-1' style={{ width: '21px' }} />
                                                Live Link
                                            </a>
                                        )}
                                        {project.youtube && (
                                            <a
                                                href={project.youtube}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-decoration-none text-body text-dark fs-5 fw-medium d-flex align-items-center"
                                            >
                                                <img src={YoutubeLogo} alt="Youtube Link" className='me-1' style={{ width: '25px' }} />
                                                YouTube Link
                                            </a>
                                        )}
                                        {project.game && (
                                            <a
                                                href={project.game}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-decoration-none text-body text-dark fs-5 fw-medium d-flex align-items-center"
                                            >
                                                <img src={GameLogo} alt="Game Link" className='me-2' style={{ width: '21px' }} />
                                                Game Link
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div class="explore d-flex justify-content-center">
                        <Link to="/" className="btn text-decoration-none text-body text-dark fw-medium d-flex justify-content-center mt-4 mb-4 mb-lg-3 py-2 px-3 py-lg-3 px-lg-4 fs-5">EXPLORE MORE</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;
