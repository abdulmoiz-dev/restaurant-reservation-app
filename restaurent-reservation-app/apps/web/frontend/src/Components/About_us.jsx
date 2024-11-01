import React from 'react';
import '../Styles/About_us.css'; // Ensure to create this CSS file or adjust the path

function AboutUs() {
  return (
    <section className="about-us py-5 my-5">
      <div className="container">
        <div className="row gy-5 g-lg-5 align-items-center">
          <div className="col-lg-6 about-img-box">
            <div className="row g-3">
              <div className="col-6" data-aos="fade-right">
                <img className="img-fluid rounded w-100" src="./assets/images/about-1.jpg" alt="About Us 1" />
              </div>
              <div className="col-6 text-right" data-aos="fade-down">
                <img className="img-fluid rounded w-75" src="./assets/images/about-2.jpg" alt="About Us 2" />
              </div>
              <div className="col-6 text-end" data-aos="fade-right">
                <img className="img-fluid rounded w-75" src="./assets/images/about-3.jpg" alt="About Us 3" />
              </div>
              <div className="col-6 text-end" data-aos="fade-up">
                <img className="img-fluid rounded w-100" src="./assets/images/about-4.jpg" alt="About Us 4" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 about-content" data-aos="fade-left">
            <h5 className="section-title">About Us</h5>
            <h2 className="mb-4 dis">Welcome to <i className="fa fa-utensils me-2"></i>Restoran</h2>
            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.</p>
            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
            <div className="row g-4 mb-4 about-extra">
              <div className="col-sm-6">
                <div className="d-flex align-items-center px-3 about-experience">
                  <h1 className="flex-shrink-0 mb-0">15</h1>
                  <div className="ps-4">
                    <p className="mb-0">Years of</p>
                    <h6 className="text-uppercase mb-0">Experience</h6>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="d-flex align-items-center px-3 about-popular">
                  <h1 className="flex-shrink-0 mb-0">50</h1>
                  <div className="ps-4">
                    <p className="mb-0">Popular</p>
                    <h6 className="text-uppercase mb-0">Master Chefs</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="book-a-table">
              <div className="anim-layer"></div>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
