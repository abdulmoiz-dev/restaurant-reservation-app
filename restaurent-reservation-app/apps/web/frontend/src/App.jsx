import React from "react";
import Header from "./Components/Header";
import SearchBar from "./Components/Search_bar";
import ShoppingCart from "./Components/shopping_cart";
import Banner from "./Components/Banner";
import Services from "./Components/Services";
import MenuSection from "./Components/Our_Menu";
function App() {

  return (
    <div>
    <Header/>
    <SearchBar/>
    <ShoppingCart/>
    <Banner/>
    <Services/>
    <MenuSection/>
    </div>
  );
}

export default App
