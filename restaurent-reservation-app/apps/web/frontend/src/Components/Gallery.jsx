import React from 'react';
import '../Styles/Gallery.css'; // Adjust the path as necessary for your CSS

const OurGallery = () => {
  return (
    <section className="our-gallery pt-5">
      <div className="container-fluid pt-5">
        <div className="row">
          <div className="section-title text-center" data-aos="fade-right">
            <h5>Our Gallery</h5>
            <h2 className="text-white display-6 fw-bold">Fooday Hot Dishes</h2>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-md-3 p-0">
            <div data-aos="fade-down-right" className="gallery-image gallery-image-one"></div>
          </div>
          <div className="col-md-6 p-0">
            <div className="row m-0">
              <div className="col-md-8 p-0">
                <div data-aos="fade-down" className="gallery-image-two"></div>
              </div>
              <div className="col-md-4 p-0">
                <div data-aos="fade-down" className="gallery-image-three"></div>
              </div>
            </div>
            <div className="row m-0">
              <div className="col-md-4 p-0">
                <div data-aos="fade-up" className="gallery-image-five"></div>
              </div>
              <div className="col-md-8 p-0">
                <div data-aos="fade-up" className="gallery-image-six"></div>
              </div>
            </div>
          </div>
          <div className="col-md-3 p-0">
            <div data-aos="fade-up-left" className="gallery-image gallery-image-four"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurGallery;
