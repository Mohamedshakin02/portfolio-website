import React from 'react'
import WebProjects from '../src/components/WebProjects'
import SoftwareProjects from '../src/components/SoftwareProjects'
import AppProjects from '../src/components/AppProjects'

function ProjectsPage() {
  return (
    <>
      <WebProjects />
      <SoftwareProjects />
      <AppProjects/>
    </>
  )
}

export default ProjectsPage