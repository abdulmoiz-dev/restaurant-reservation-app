import React from "react";
import Header from "./Components/Header";
import SearchBar from "./Components/Search_bar";
import ShoppingCart from "./Components/shopping_cart";
import Banner from "./Components/Banner";
import Services from "./Components/Services";
import MenuSection from "./Components/Our_Menu";
import Testimonials from "./Components/Testimonials";
import OurChefs from "./Components/Chefs";
import Reservation from "./Components/Reservations";
import OurServices from "./Components/OurServices";
import AboutUs from "./Components/About_us";
import OurGallery from "./Components/Gallery";
import OurBlog from "./Components/Blog";
import Footer from "./Components/Footer";

function App() {


  return (
    <div>
    <Header/>
    <SearchBar/>
    <ShoppingCart/>
    <Banner/>
    <Services/>
    <AboutUs/>
    <MenuSection/>
    <Testimonials/>
    <OurChefs/>
    <Reservation/>
    <OurServices/>
    <OurGallery/>
    <OurBlog/>
    <Footer/>
    </div>
  );
}

export default App
