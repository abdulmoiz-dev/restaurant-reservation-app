import React from "react";
import Header from "./Components/Header";
import SearchBar from "./Components/Search_bar";
import ShoppingCart from "./Components/shopping_cart";
import Banner from "./Components/Banner";
import MenuSection from "./Components/Our_Menu";
import Testimonials from "./Components/Testimonials";
import OurChefs from "./Components/Chefs";
import Reservation from "./Components/Reservations";
import Services from "./Components/Services";
import OurGallery from "./Components/Gallery";
import OurBlog from "./Components/Blog";


function App() {


  return (
    <div>
    <Header/>
    <SearchBar/>
    <ShoppingCart/>
    <Banner/>
    <Services/>
    <MenuSection/>
    <Testimonials/>
    <OurChefs/>
    <Reservation/>
    <Services/>
    <OurGallery/>
    <OurBlog/>
    </div>
  );
}

export default App
