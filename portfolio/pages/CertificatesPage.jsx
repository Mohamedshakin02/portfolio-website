import React from 'react'
import AcademicCerificates from '../src/components/AcademicCerificates'
import CourseCertificates from '../src/components/CourseCertificates'
import Footer from '../src/components/Footer';

function CertificatesPage() {
  return (
    <>
      <CourseCertificates />
      <AcademicCerificates />
      <div className="certificates-footer">
        <Footer />
      </div>
    </>
  )
}

export default CertificatesPage