import React from 'react'
import AcademicCertificates from '../src/components/AcademicCertificates'
import CourseCertificates from '../src/components/CourseCertificates'
import Footer from '../src/components/Footer';
import ProjectCertificates from '../src/components/ProjectCertificates';
import WorkshopCertificates from '../src/components/WorkshopCertificates';

function CertificatesPage() {
  return (
    <>
      <CourseCertificates />
      <AcademicCertificates />
      <ProjectCertificates />
      <WorkshopCertificates />
      <div className="certificates-footer">
        <Footer />
      </div>
    </>
  )
}

export default CertificatesPage