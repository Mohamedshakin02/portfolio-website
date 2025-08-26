import React from 'react'
import WebProjects from '../src/components/WebProjects'
import SoftwareProjects from '../src/components/SoftwareProjects'
import AppProjects from '../src/components/AppProjects'
import UIProjects from '../src/components/UIProjects'
import GameProjects from '../src/components/GameProjects'

function ProjectsPage() {
  return (
    <>
      <WebProjects />
      <SoftwareProjects />
      <AppProjects/>
      <UIProjects/>
      <GameProjects/>
    </>
  )
}

export default ProjectsPage