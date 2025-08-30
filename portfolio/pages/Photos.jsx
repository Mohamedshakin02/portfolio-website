import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../stylesheet/photos.css";
import Photo1 from '../src/assets/photos/Bulb.jpg';
import Photo2 from '../src/assets/photos/Green Chair.jpg';
import Photo3 from '../src/assets/photos/Tall.jpg';
import Photo4 from '../src/assets/photos/Wood.jpg';
import Photo5 from '../src/assets/photos/Boards.jpg';
import Photo6 from '../src/assets/photos/Me-1.jpg';
import Photo7 from '../src/assets/photos/Me-2.jpg';
import Photo8 from '../src/assets/photos/Me-3.jpg';

function Photos() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // go back to the previous page
  };

  const [photos] = useState([
    {
      title: 'Photo 1',
      image: Photo1,
    },
    {
      title: 'Photo 2',
      image: Photo2,
    },
    {
      title: 'Photo 3',
      image: Photo3,
    },
    {
      title: 'Photo 4',
      image: Photo4,
    },
    {
      title: 'Photo 5',
      image: Photo5,
    },
    {
      title: 'Photo 6',
      image: Photo6,
    },
    {
      title: 'Photo 7',
      image: Photo7,
    },
    {
      title: 'Photo 8',
      image: Photo8,
    },

  ]);

  return (
    <>
      <div className="photos-page-background container-fluid" style={{ zIndex: 1, pointerEvents: "auto" }}>
        <div className="page photos-page container-fluid">
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

          <div className="photos-container container-lg my-5">
            <h1 className="text-center display-4 fw-bold">Photos</h1>

            <div className="photos mt-4 mt-md-5">
              {photos.map((photo, index) => (
                <div className="all-photo-card" key={index}>
                  <img
                    src={photo.image}
                    alt={photo.title}
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

export default Photos;
