import React from 'react';
import '../Styles/Banner.css'; // Make sure to create this CSS file or adjust the path

function Banner() {
  return (
    <section className="banner py-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 banner-content pe-5" data-aos="fade-right" data-aos-delay="3000">
            <h1 className="display-2">Enjoy Our <br /> Delicious Meal</h1>
            <p>
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
            </p>
            <div className="book-a-table">
              <div className="anim-layer"></div>
              <a href="#">Book a table</a>
            </div>
          </div>
          <div className="col-md-6 banner-img" data-aos="fade-left" data-aos-delay="3000">
            <img className="img img-fluid mt-5 mt-lg-0" src="./assets/images/banner-img.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
