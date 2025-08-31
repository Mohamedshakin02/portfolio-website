import React,  { useState } from 'react';
import '../App.css';
import '/stylesheet/all_projects.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ProjectImg1 from '../assets/projects/G-Shock.png';
import ProjectImg2 from '../assets/projects/CML.png';
import ProjectImg3 from '../assets/projects/Zoo-Website.png';
import ProjectImg4 from '../assets/projects/Choco.png';
import ProjectImg5 from '../assets/projects/Soundboard.png';
import ProjectImg6 from '../assets/projects/Petrol.png';
import GithubLogo from '../assets/logos/github-logo.png';
import WebLogo from '../assets/logos/web-logo.png';

function WebProjects() {
    const [projects] = useState([
        {
            title: 'G-Shock Responsive Website',
            description: 'Developed a responsive G-Shock website using React.js, integrated with a Node.js/MongoDB backend for user login, featuring watch details and fully responsive design across desktop, tablet, and mobile devices.',
            image: ProjectImg1,
            github: 'https://github.com/Mohamedshakin02/G-SHOCK-Watch.git',
            link: 'https://g-shock.vercel.app/',
        },
        {
            title: 'CML Company Website',
            description: 'Developed a responsive website for CML Company as part of a university assessment, highlighting musical events, consulting, and products. My role included responsive development, UI design, and contributing ideas.',
            image: ProjectImg2,
            github: 'https://github.com/Zeko54/CML.git',
            link: 'https://cml-henna.vercel.app/',
        },
        {
            title: 'The Zoo Wildlife Park Website',
            description: 'Recreated the non-responsive Zoo Wildlife Park website using HTML, CSS, and JavaScript, designed some sections to improve visual layout and user engagement, while preserving the original content and core functionality.',
            image: ProjectImg3,
            github: 'https://github.com/Mohamedshakin1/The-Zoo-Wildlife-Park',
            link: 'https://mohamedshakin1.github.io/The-Zoo-Wildlife-Park/',
        },
        {
            title: 'Chocolate Box Website',
            description: 'Developed a responsive chocolate company website featuring a custom chocolate box builder, company overview, product promotions, and user signup, optimized for desktop and mobile.',
            image: ProjectImg4,
            github: 'https://github.com/Mohamedshakin02/Chocolate-Company-Website',
            link: 'https://chocolate-company-website.vercel.app/',
        },
        {
            title: 'Interactive Soundboard',
            description: 'Developed an interactive audio soundboard web application using HTML, CSS, and JavaScript, featuring a grid of audio samples with clickable playback and a text-to-speech feature.',
            image: ProjectImg5,
            github: 'https://github.com/Mohamedshakin02/Javascript-Projects/tree/main/Soundboard',
            link: 'https://soundboard-activity.vercel.app/',
        },
        {
            title: 'Petrol Calculator',
            description: 'Developed a simple petrol calculator web application using HTML, CSS, and JavaScript, featuring inputs for petrol cost per liter and liters purchased, with a calculation button to display the total cost.',
            image: ProjectImg6,
            github: 'https://github.com/Mohamedshakin02/Javascript-Projects/tree/main/Petrol%20Calculator',
            link: 'https://petrol-calculator-activity.vercel.app/',
        }

    ]);

    return (
        <>
        <style>
{`
  .all-project-card a {
    pointer-events: auto;
  }
`}
</style>
            <div className="all-projects-container container-md">
                <h1 className="display-3 fw-semibold text-center mb-5">Web Development</h1>

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

export default WebProjects