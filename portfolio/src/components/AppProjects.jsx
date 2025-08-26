import React, { useState } from 'react';
import '../App.css';
import '/stylesheet/all_projects.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ProjectImg1 from '../assets/projects/Green-Combo.png';
import ProjectImg2 from '../assets/projects/Cloth-Care.png';
import GithubLogo from '../assets/logos/github-logo.png';
import YoutubeLogo from '../assets/logos/youtube-logo2.png';

function AppProjects() {
    const [projects] = useState([
        {
            title: 'Green Combo Mobile Application',
            description: "Developed Green Combo, an Android Studio app that lets users select a soil type and a crop type to see the most suitable plant, helping them understand ideal growing conditions.",
            image: ProjectImg1,
            github: 'https://github.com/DC-BSU-RAK/projects-collection-2025-Mohamedshakin02/tree/main/NaN%20Calculator',
            youtube: 'https://youtu.be/zfJ7ccCcAvg?si=RDlFCTa8ZJXaS2Hf',
        },
        {
            title: 'Cloth Care Mobile Application ',
            description: 'Developed Cloth Care, an Android Studio app that provides washing and ironing instructions based on the selected clothing item and fabric type, helping users take proper care of their clothes.',
            image: ProjectImg2,
            github: 'https://github.com/DC-BSU-RAK/projects-collection-2025-Mohamedshakin02/tree/main/Multi%20Page%20App',
            youtube: 'https://youtu.be/xPLIlYXq1oI?si=a3ysVYTk4v7cOuHU',
        },

    ]);

    return (
        <>

             <style>
                        {`
                .app-project-content .swiper-wrapper{
                justify-content: center;}

                @media (max-width: 1200px) {
                    .app-project-content .swiper-wrapper{
                    justify-content: flex-start;}
            `}
            </style>

            <div className="all-projects-container container-md">
                <h1 className="display-3 fw-semibold text-center mb-5">Mobile Application</h1>

                <div className="all-projects-content app-project-content p-4 p-lg-5" style={{ pointerEvents: "auto" }}>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={50}
                        initialSlide={0}
                        loop={true}
                        pagination={{ clickable: true }}
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

export default AppProjects