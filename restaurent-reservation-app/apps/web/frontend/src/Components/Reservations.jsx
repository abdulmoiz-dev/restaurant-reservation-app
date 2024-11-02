import React from 'react';
import '../Styles/Reservations.css'; // Adjust the path as necessary for your CSS

const Reservation = () => {
  return (
    <section className="reservation">
      <img className="d-md-none d-lg-block" src="./assets/images/find-a-table.png" alt="" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 py-5 reservation-content px-5" data-aos="fade-right">
            <div className="reservation-column py-5 px-3">
              <h2 className="text-center text-white display-6 fw-bold">Make A Reservation</h2>
              <p className="text-center text-white">You can call us directly at <span>225-88888</span></p>
              <div className="row mt-5 pt-3">
                <div className="col-12 col-lg-6">
                  <div className="input d-flex align-items-center">
                    <i className="fa fa-phone py-2 px-3"></i>
                    <input className="form-control bg-transparent border-0 px-3" type="text" placeholder="Number" />
                  </div>
                </div>
                <div className="col-12 col-lg-6 mt-4 mt-lg-0">
                  <div className="input d-flex align-items-center">
                    <i className="fa fa-person py-2 px-3"></i>
                    <select className="form-select bg-transparent border-0">
                      <option value="">1 Person</option>
                      <option value="">2 Person</option>
                      <option value="">3 Person</option>
                      <option value="">4 Person</option>
                      <option value="">5 Person</option>
                      <option value="">6 Person</option>
                      <option value="">7 Person</option>
                      <option value="">8 Person</option>
                      <option value="">9 Person</option>
                      <option value="">10 Person</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-12 col-lg-6">
                  <div className="input d-flex align-items-center">
                    <i className="fa fa-calendar py-2 px-3"></i>
                    <input className="form-control datepicker bg-transparent border-0 px-3" type="date" />
                  </div>
                </div>
                <div className="col-12 col-lg-6 mt-4 mt-lg-0">
                  <div className="input d-flex align-items-center">
                    <i className="fa fa-clock py-2 px-3"></i>
                    <select className="form-select bg-transparent border-0">
                      <option>7:00 AM</option>
                      <option>8:00 AM</option>
                      <option>9:00 AM</option>
                      <option>10:00 AM</option>
                      <option>11:00 AM</option>
                      <option>12:00 AM</option>
                      <option>1:00 PM</option>
                      <option>2:00 PM</option>
                      <option>3:00 PM</option>
                      <option>4:00 PM</option>
                      <option>5:00 PM</option>
                      <option>6:00 PM</option>
                      <option>7:00 PM</option>
                      <option>8:00 PM</option>
                      <option>9:00 PM</option>
                      <option>10:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center mt-5 pt-3">
                <div className="book-a-table">
                  <div className="anim-layer"></div>
                  <a href="#">Find Table</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-none d-md-block reservation-bg" data-aos="fade-left"></div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
