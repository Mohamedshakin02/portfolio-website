import React from 'react';
import '../App.css';
import '/stylesheet/about.css';   // corrected path

function About() {
    return (
        <>
            <div className="about-container container-md">
                <h1 className="display-1 fw-semibold text-center">About Me</h1>

                <div className="about-content p-4 pt-1 p-lg-5 pt-lg-5" style={{ pointerEvents: "auto" }}>

                    <div className="nationality pt-3 pt-lg-5">
                        <p className="m-0 fs-5 fw-normal">Nationality:</p>
                        <p className="m-0 display-6 fw-medium pt-1">Indian</p>
                    </div>

                    <div className="languages pb-3 pt-4 pt-lg-0 d-flex flex-column align-self-end">
                        <p className="m-0 fs-5 fw-normal">Languages:</p>
                        <p className="m-0  display-6 fw-medium pt-1">English, <br />Tamil</p>
                    </div>

                    <div className="age pt-3 pt-lg-5">
                        <p className="m-0 fs-5  fw-normal">Age:</p>
                        <p className="m-0 display-6 fw-medium pt-1">19</p>
                    </div>

                    <div className="location pb-3 pt-4 pt-lg-0 d-flex flex-column align-self-end">
                        <p className="m-0 fs-5  fw-normal">Location:</p>
                        <p className="m-0 display-6 fw-medium pt-1">Dubai, <br />UAE</p>
                    </div>

                    <div className="description py-3 pt-5">
                        <p className="m-0 h4 fw-medium">
                            I’m Mohamed Shakin, passionate about building creative and practical digital solutions that solve real-world problems.
                            With a background in Creative Computing, I’ve developed a solid foundation in front-end development and programming using HTML, CSS, JavaScript, and Python. <br /><br />
                            I enjoy exploring how design and technology intersect to create meaningful user experiences. Whether it’s developing a website, prototyping an app, or automating a task, I approach every project with a problem-solving mindset and an eye for detail. <br /><br />
                            I’m always looking for new challenges and opportunities to grow, especially those that allow me to collaborate, learn, and make a real impact through technology.
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default About;
