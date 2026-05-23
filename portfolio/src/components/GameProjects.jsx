import React, { useState, useRef } from 'react';
import '../App.css';
import '/stylesheet/all_projects.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ProjectImg1 from '../assets/projects/Pixel-Football.png';
import ProjectImg2 from '../assets/projects/Driving-Test.png';
import ProjectImg3 from '../assets/projects/Third-Level.png';
import ProjectImg4 from '../assets/projects/Highway.png';
import GameLogo from '../assets/logos/game-logo.png';
import YoutubeLogo from '../assets/logos/youtube-logo2.png';

function GameProjects() {
    const [projects] = useState([
        {
            title: 'Pixel Football 2D Game',
            description: "Developed a 2D pixel art football game in Unity with simple controls and fast-paced, engaging gameplay. Designed a side-view match with 2–5 minute durations, focusing on scoring goals and an engaging gameplay experience.",
            image: ProjectImg1,
            game: 'https://mohamed-shakin.itch.io/pixel-football',
            youtube: 'https://youtu.be/oTZ9FPcg7qc?si=hrdhWLaOjhm5PDFd',
        },
        {
            title: 'Driving Test Bitsy Game',
            description: 'Developed a driving test game in Bitsy with multiple levels, featuring interactive environments with cars, roads, and obstacles, focusing on realistic driving procedures and engaging gameplay.',
            image: ProjectImg2,
            game: 'https://mohamed-shakin.itch.io/driving-test',
            youtube: 'https://youtu.be/mRUvgyTLIN8?si=0mJi8zVfeE0k1a-E',
        },
        {
            title: 'The Third Level Story Game',
            description: "Developed an interactive story game in Twine adapted from The Third Level by Jack Finney, following Charley’s perspective as he tries to escape a world full of fear and worry. Explore if he succeeds or not.",
            image: ProjectImg3,
            game: 'https://mohamed-shakin.itch.io/the-third-level',
            youtube: 'https://youtu.be/W4YHnwWZosw?si=LTxChWTgJj9p_QGw',
        },
        {
            title: 'Highway 2D Game',
            description: 'Developed HIGHWAY, a driving game where players avoid hitting oncoming cars on a highway. Designed the game with cars gradually increasing the speed to make it more challenging and fun.',
            image: ProjectImg4,
            game: 'https://editor.p5js.org/m.shakin2005/full/m8bfD2RkI',
            youtube: 'https://youtu.be/DP3GMKy46pg?si=XugTFQXmeXupW1va',
        }

    ]);

    const swiperRef = useRef(null);

    const slidePrev = () => swiperRef.current?.slidePrev();
    const slideNext = () => swiperRef.current?.slideNext();

    return (
        <>
            <style>
                {`
  .game-project-content {
    padding-bottom: 2rem !important;
    }
`}
            </style>

            <div className="all-projects-container container-md">
                <h1 className="display-3 fw-semibold text-center mb-5">Game Development</h1>

                <div className="all-projects-content game-project-content p-4 p-lg-5" style={{ pointerEvents: "auto" }}>

                    <div className="swiper-wrapper-container position-relative">
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
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
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
                                            {project.game && (
                                                <a
                                                    href={project.game}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="text-decoration-none text-body text-dark fs-5 fw-medium d-flex align-items-center"
                                                    title='Game Link'
                                                >
                                                    <img src={GameLogo} alt="Game Link" className='me-2' style={{ width: '21px' }} />
                                                    Game Link
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
                        {projects.length > 3 && (
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

export default GameProjects