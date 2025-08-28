import React, { useState } from 'react';
import '../App.css';
import '/stylesheet/all_projects.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ProjectImg1 from '../assets/projects/Tick-Events.png';
import ProjectImg2 from '../assets/projects/Bath Spa-1.png';
import ProjectImg3 from '../assets/projects/Bath Spa-2.png';
import ProjectImg4 from '../assets/projects/Bath Spa-3.png';
import FigmaLogo from '../assets/logos/figma-logo.png';
import CanvaLogo from '../assets/logos/canva-logo.png';

function UIProjects() {
  const [projects] = useState([
          {
              title: 'Tick Events Application Prototype',
              description: "Developed Tick Events, a Figma prototype app that displays upcoming events, allowing users to filter by location, category, and date, providing an easy-to-use and informative experience.",
              image: ProjectImg1,
              figma: 'https://www.figma.com/proto/8ei59o3Siq5zbrHLCuS2r7/HiFi-Interactive-Prototype?node-id=103-2&t=FAqJabHuBirGSvqx-1&scaling=contain&page-id=0%3A1&starting-point-node-id=103%3A2',
          },
          {
              title: 'Bath Spa University Website Redesign-1',
              description: 'Redesigned Bath Spa University website in Canva, using the original website content, and created layouts with ready-made Canva templates to achieve a clean and user-friendly design.',
              image: ProjectImg2,
              canva: 'https://shakin.my.canva.site/homepage',
          },
          {
              title: 'Bath Spa University Website Redesign-2',
              description: 'Redesigned Bath Spa University webpages in Figma, using the original website content to design layouts with clean structure, organized content, and user-friendly design.',
              image: ProjectImg3,
              figma: 'https://www.figma.com/proto/biXb4Zz1gOMpeuEBFVfvnb/Untitled?node-id=1-3&p=f&t=Yf08lf6RYa4tc9M9-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3',
          },
          {
              title: 'Bath Spa University Website Redesign-3',
              description: 'Redesigned Bath Spa University homepage in Figma as a group project, created the website with content, layout, and design choices based on our research and user needs.',
              image: ProjectImg4,
              figma: 'https://www.figma.com/proto/Gm9GElvypU5OuGcbl42m46/HomePage?node-id=4-2&t=Z9CQSbkpm3nWz9uB-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
          },
  
      ]);
  
      return (
          <>

                <style>
                                {`
                        .ui-title{
                         min-height: 65px !important;}
                    `}
                </style>
  
              <div className="all-projects-container container-md">
                  <h1 className="display-3 fw-semibold text-center mb-5">UI/UX Design</h1>
  
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
                                      <div className="top-container ui-title">
                                          <h3 className="fs-4 fw-semibold m-0">{project.title}</h3>
                                      </div>
                                      <p className="flex-grow-1 h5 fw-medium h-50">{project.description}</p>
                                      <div className="d-flex justify-content-between mt-4">
                                          {project.figma && (
                                              <a
                                                  href={project.figma}
                                                  target="_blank"
                                                  rel="noreferrer"
                                                  className="text-decoration-none text-body text-dark fs-5 fw-medium d-flex align-items-center"
                                              >
                                                  <img src={FigmaLogo} alt="GitHub Link" className='me-1' style={{ width: '21px' }} />
                                                  Figma Link
                                              </a>
                                          )}
                                          {project.canva && (
                                              <a
                                                  href={project.canva}
                                                  target="_blank"
                                                  rel="noreferrer"
                                                  className="text-decoration-none text-body text-dark fs-5 fw-medium d-flex align-items-center"
                                              >
                                                  <img src={CanvaLogo} alt="Youtube Link" className='me-2' style={{ width: '25px' }} />
                                                  Canva Link
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

export default UIProjects