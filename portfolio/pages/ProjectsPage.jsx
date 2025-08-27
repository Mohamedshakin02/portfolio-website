import React from 'react'
import "../stylesheet/all_projects.css";
import WebProjects from '../src/components/WebProjects'
import SoftwareProjects from '../src/components/SoftwareProjects'
import AppProjects from '../src/components/AppProjects'
import UIProjects from '../src/components/UIProjects'
import GameProjects from '../src/components/GameProjects'
import OtherProjects from '../src/components/OtherProjects'
import Footer from '../src/components/Footer';

function ProjectsPage() {
  return (
    <>
      <WebProjects />
      <SoftwareProjects />
      <AppProjects />
      <UIProjects />
      <GameProjects />
      <OtherProjects />
      <div className="project-footer">
        <Footer />
      </div>
    </>
  )
}

export default ProjectsPage