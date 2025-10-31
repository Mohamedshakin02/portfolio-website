import React from 'react'
import AcademicCerificates from '../src/components/AcademicCerificates'
import CourseCertificates from '../src/components/CourseCertificates'
import Footer from '../src/components/Footer';
import ProjectCertificates from '../src/components/ProjectCertificates';

function CertificatesPage() {
  return (
    <>
      <CourseCertificates />
      <AcademicCerificates />
      <ProjectCertificates />
      <div className="certificates-footer">
        <Footer />
      </div>
    </>
  )
}

export default CertificatesPage