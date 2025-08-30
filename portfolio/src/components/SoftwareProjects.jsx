import React, { useState } from 'react';
import '../App.css';
import '/stylesheet/all_projects.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ProjectImg1 from '../assets/projects/Info-Globe.png';
import ProjectImg2 from '../assets/projects/Student-Manager.png';
import ProjectImg3 from '../assets/projects/Alexa-Jokes.png';
import ProjectImg4 from '../assets/projects/Maths-Quiz.png';
import ProjectImg5 from '../assets/projects/Vending-Machine.png';
import GithubLogo from '../assets/logos/github-logo.png';
import YoutubeLogo from '../assets/logos/youtube-logo2.png';

function SoftwareProjects() {
    const [projects] = useState([
        {
            title: 'Info Globe GUI',
            description: "Developed Info Globe, a Python Tkinter GUI app that fetches country data from the RestCountries API, featuring search, random country display, and region/language filters.",
            image: ProjectImg1,
            github: 'https://github.com/Mohamedshakin02/Python-Projects/tree/main/Data%20Driven%20Application',
            youtube: 'https://youtu.be/HDZiiggFHlM?si=NS_cXg5EcYnzWaLF',
        },
        {
            title: 'Student Management GUI',
            description: 'Developed a Python program to manage student records from a text file, featuring a menu to view all or individual records, calculate percentages, and extended options to sort, add, delete, and update records.',
            image: ProjectImg2,
            github: 'https://github.com/Mohamedshakin02/Python-Projects/tree/main/GUI%20Development/Student%20Manager',
            youtube: 'https://youtu.be/deLR6_emePM?si=8L_g7kjnHRp7aTbX',
        },
        {
            title: "Alexa's Jokes GUI",
            description: 'Developed a Python program to display random jokes from a text file, featuring a display of joke question and a button to reveal the answer.',
            image: ProjectImg3,
            github: 'https://github.com/Mohamedshakin02/Python-Projects/tree/main/GUI%20Development/Alexa%20tell%20me%20a%20Joke',
            youtube: 'https://youtu.be/X_-Lwo5W4dY?si=O9o2z0hj1n6Bhybn',
        },
        {
            title: 'Maths Quiz GUI',
            description: 'Developed an Arithmetic Quiz program in Python with selectable difficulty levels, displaying arithmetic questions, and updating scores based on correct attempts.',
            image: ProjectImg4,
            github: 'https://github.com/Mohamedshakin02/Python-Projects/tree/main/GUI%20Development/Maths%20Quiz',
            youtube: 'https://youtu.be/oXyzUx9Pzv0?si=CSJh8oQsFdHGZ6aO',
        },
        {
            title: 'Vending Machine Program',
            description: 'Developed a Python vending machine program featuring a menu, item selection by code, automatic stock and balance updates, and suggestions for additional purchases.',
            image: ProjectImg5,
            github: 'https://github.com/Mohamedshakin02/Python-Projects/tree/main/Vending%20Machine',
            youtube: 'https://youtu.be/Y28euhQEwGA?si=OexagkFXixdsNG5N',
        }

    ]);

    return (
        <>
            <div className="all-projects-container container-md">
                <h1 className="display-3 fw-semibold text-center mb-5">Software Development</h1>

                <div className="all-projects-content p-4 p-lg-5" style={{ pointerEvents: "auto" }}>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={50}
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


export default SoftwareProjects