import React from 'react';
import '../Styles/Search_bar.css'; // Make sure to create this CSS file or adjust the path

function SearchBar() {
  const handleClose = () => {
    // Logic to handle closing the search bar
    const searchContainer = document.getElementById('search-container');
    if (searchContainer) {
      searchContainer.classList.add('d-none'); // Add the 'd-none' class to hide the search bar
    }
  };

  return (
    <div className="search-bar d-none" id="search-container">
      <div className="close-btn" id="search-close-btn" onClick={handleClose}>
        <i className="fa fa-close"></i>
      </div>
      <div className="search-bar-wrapper">
        <input type="search" placeholder="Enter any text here..." />
        <div className="search-button">
          <a href="#">
            <i className="fa fa-search"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
