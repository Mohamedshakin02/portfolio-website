import React from 'react'
import WebProjects from '../src/components/WebProjects'
import SoftwareProjects from '../src/components/SoftwareProjects'
import AppProjects from '../src/components/AppProjects'
import UIProjects from '../src/components/UIProjects'

function ProjectsPage() {
  return (
    <>
      <WebProjects />
      <SoftwareProjects />
      <AppProjects/>
      <UIProjects/>
    </>
  )
}

export default ProjectsPage