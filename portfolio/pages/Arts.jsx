import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../stylesheet/photos.css";
import Art1 from '../src/assets/arts/lines_3.png';
import Art2 from '../src/assets/arts/dots_4.png';
import Art3 from '../src/assets/arts/shape_1.png';
import Art4 from '../src/assets/arts/dots_1.png';
import Art5 from '../src/assets/arts/shape_2.png';
import Art6 from '../src/assets/arts/lines_2.png';
import Art7 from '../src/assets/arts/shape_4.png';
import Art8 from '../src/assets/arts/lines_4.png';
import Art9 from '../src/assets/arts/dots_3.png';
import Art10 from '../src/assets/arts/shape_3.png';
import Art11 from '../src/assets/arts/lines_1.png';
import Art12 from '../src/assets/arts/dots_2.png';
import Art13 from '../src/assets/arts/lines_5.png';
import Art14 from '../src/assets/arts/shape_5.png';
import Art15 from '../src/assets/arts/dots_5.png';

function Arts() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // go back to the previous page
  };

  const [arts] = useState([
    {
      title: 'Art 1',
      image: Art1,
    },
    {
      title: 'Art 2',
      image: Art2,
    },
    {
      title: 'Art 3',
      image: Art3,
    },
    {
      title: 'Art 4',
      image: Art4,
    },
    {
      title: 'Art 5',
      image: Art5,
    },
    {
      title: 'Art 6',
      image: Art6,
    },
    {
      title: 'Art 7',
      image: Art7,
    },
    {
      title: 'Art 8',
      image: Art8,
    },
    {
      title: 'Art 9',
      image: Art9,
    },
    {
      title: 'Art 10',
      image: Art10,
    },
    {
      title: 'Art 11',
      image: Art11,
    },
    {
      title: 'Art 12',
      image: Art12,
    },
    {
      title: 'Art 13',
      image: Art13,
    },
    {
      title: 'Art 14',
      image: Art14,
    },
    {
      title: 'Art 15',
      image: Art15,
    },

  ]);

  return (
    <>
      <div className="arts-page-background container-fluid" style={{ zIndex: 1, pointerEvents: "auto" }}>
        <div className="page arts-page container-fluid">
          {/* Back Button */}
          <div className="back container-md mt-5">
            <button
              onClick={handleBack}
              className="btn text-decoration-none text-body text-dark fw-medium d-flex justify-content-center py-1 px-3 py-lg-2 px-lg-3 fs-5"
            >
              <i className="bi bi-caret-left-fill" style={{ marginTop: "1.25px" }}></i>
              BACK
            </button>
          </div>

          <div className="arts-container container-lg my-5">
            <h1 className="text-center display-4 fw-bold">Arts</h1>

            <div className="arts mt-4 mt-md-5">
              {arts.map((art, index) => (
                <div className="all-art-card" key={index}>
                  <img
                    src={art.image}
                    alt={art.title}
                    className="img-fluid"
                    style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                  />
                </div>
              ))}
            </div>


          </div>
        </div>
      </div>
    </>
  );
}

export default Arts;
