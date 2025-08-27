import React from 'react'
import WebProjects from '../src/components/WebProjects'
import SoftwareProjects from '../src/components/SoftwareProjects'
import AppProjects from '../src/components/AppProjects'
import UIProjects from '../src/components/UIProjects'
import GameProjects from '../src/components/GameProjects'
import OtherProjects from '../src/components/OtherProjects'

function ProjectsPage() {
  return (
    <>
      <WebProjects />
      <SoftwareProjects />
      <AppProjects/>
      <UIProjects/>
      <GameProjects/>
      <OtherProjects/>
    </>
  )
}

export default ProjectsPage