import React from 'react';
import '../Styles/Services.css'; // Make sure to create this CSS file or adjust the path

function Services() {
  return (
    <section className="services my-5 py-5">
      <div className="container">
        <div className="row gy-4">
          <div className="col-md-3">
            <div className="cards px-4 py-5" data-aos="fade-right">
              <div className="anim-layer"></div>
              <div className="icon"> 
                <i className="fa fa-3x fa-user-tie mb-4"></i>
              </div>
              <div className="heading">
                <h5>Master Chefs</h5>
              </div>
              <div className="para">
                <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="cards px-4 py-5" data-aos="fade-down">
              <div className="anim-layer"></div>
              <div className="icon">
                <i className="fa fa-3x fa-utensils mb-4"></i>
              </div>
              <div className="heading">
                <h5>Quality Food</h5>
              </div>
              <div className="para">
                <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="cards px-4 py-5" data-aos="fade-up">
              <div className="anim-layer"></div>
              <div className="icon">
                <i className="fa fa-3x fa-cart-plus mb-4"></i>
              </div>
              <div className="heading">
                <h5>Online Order</h5>
              </div>
              <div className="para">
                <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="cards px-4 py-5" data-aos="fade-left">
              <div className="anim-layer"></div>
              <div className="icon">
                <i className="fa fa-3x fa-headset mb-4"></i>
              </div>
              <div className="heading">
                <h5>24/7 Service</h5>
              </div>
              <div className="para">
                <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
