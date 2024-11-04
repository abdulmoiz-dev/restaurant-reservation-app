import React from 'react';
import '../Styles/Our_Menu.css'; 
import 'aos/dist/aos.css'; 
import AOS from 'aos'; 

// Import images from assets folder
import dessertImage from '../assets/images/menu-slider-dessert.png';
// Repeat imports for each menu image if necessary

const MenuSection = () => {
  // Initialize AOS
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="our-menu py-5 my-5">
      <div className="container">
        <div className="row" data-aos="fade-right">
          <div className="section-title text-center">
            <h5>Our Menu</h5>
            <h2 className="display-5 fw-bold">Tasty And Good Price</h2>
          </div>
        </div>
        <div className="row position-relative">
          <div data-aos="fade-left" className="slider slider-indicators-wrapper justify-content-center">
            {['Breakfast', 'Lunch', 'Dinner', 'Desserts', 'Drink'].map((item, index) => (
              <div className="slider-indicators" key={index}>
                <div className="indicators-icon text-center">
                  <i className={`fas fa-${item.toLowerCase()} fa-2x`}></i>
                </div>
                <div className="indicators-title text-center">
                  <h5>{item}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div id="our-menus" className="slider" data-aos="fade-up">
          {[
            {
              image: dessertImage,
              name: "The Cracker Barrel's Country Boy Breakfast",
              description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum',
              price: 25.0,
            },
            // Add additional items here
          ].map((menuItem, index) => (
            <div key={index}>
              <div className="row my-5 py-3">
                <div className="col-lg-5">
                  <div className="pb-5 pb-lg-0">
                    <img width="90%" src={menuItem.image} alt={menuItem.name} />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="item-wrapper d-flex justify-content-between">
                    <div className="item-left">
                      <h5>{menuItem.name}</h5>
                      <p>{menuItem.description}</p>
                    </div>
                    <div className="item-right">
                      <span className="item-price">
                        <span className="price-symbol">$</span>
                        {menuItem.price}
                      </span>
                      <div className="item-btn">
                        <a href="#">Order</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
