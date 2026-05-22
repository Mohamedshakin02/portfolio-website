import React, { useState, useRef, useEffect } from 'react';
import '../App.css';
import '/stylesheet/all_projects.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ProjectImg from '../assets/projects/Kaggle.png';
import WebLogo from '../assets/logos/web-logo.png';

function MLProjects() {
    const [projects] = useState([
        {
            title: 'Vehicle Price Prediction Model',
            description: 'Developed a machine learning model using Linear Regression to predict vehicle selling prices based on features such as year, mileage, fuel type, transmission, and ownership. The model included data cleaning, outlier removal, feature encoding, and scaling, and achieved an R² score of around 0.72, showing good prediction accuracy.',
            image: ProjectImg,
            link: 'https://www.kaggle.com/code/mohamedshakin/01-vehicle-price-prediction',
        },
        {
            title: 'Tour & Travels Customer Churn Prediction',
            description: "Developed a machine learning model using Logistic Regression to predict customer churn for a tour and travel company based on features such as age, income class, services opted, frequent flyer status, and social media linkage. The model included class imbalance handling, feature encoding, and scaling, and achieved an accuracy of 87.2%, showing strong predictive performance.",
            image: ProjectImg,
            link: 'https://www.kaggle.com/code/mohamedshakin/02-tour-travels-customer-churn-prediction',
        },
        {
            title: 'AI & Data Science Salary Prediction Model',
            description: "Developed a machine learning model using Linear Regression to predict AI and Data Science salaries based on experience, skills, tools, country, education, work mode, and company size. The model included data cleaning, currency conversion, feature encoding, scaling, and evaluation, achieving about 90% accuracy. A Gradio interface integrated to allow users to enter details and receive predicted salaries.",
            image: ProjectImg,
            link: 'https://www.kaggle.com/code/mohamedshakin/ai-data-science-job-salaries-prediction',
        }

    ]);

    const swiperRef = useRef(null);

    const slidePrev = () => swiperRef.current?.slidePrev();
    const slideNext = () => swiperRef.current?.slideNext();

    const [showArrows, setShowArrows] = useState(window.innerWidth <= 1200);

    useEffect(() => {
            const handleResize = () => {
                setShowArrows(window.innerWidth <= 1200);
            };
    
            window.addEventListener('resize', handleResize);
            handleResize();
    
            return () => window.removeEventListener('resize', handleResize);
        }, []);

    return (
        <>
            <style>
                {`

                @media (max-width: 1200px){
                    .ml-project-content {
                        padding-bottom: 2rem !important;
                    }
                }
            `}
            </style>

            <div className="all-projects-container container-md">
                <h1 className="display-3 fw-semibold text-center mb-5">Machine Learning</h1>

                <div className="all-projects-content ml-project-content p-4 p-lg-5" style={{ pointerEvents: "auto" }}>

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
                                        <div className="top-container mb-3">
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
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {showArrows && (
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

export default MLProjects