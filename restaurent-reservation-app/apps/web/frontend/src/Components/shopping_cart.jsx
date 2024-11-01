import React from 'react';
import '../Styles/shopping_cart.css'; // Make sure to create this CSS file or adjust the path

function ShoppingCart() {
  const items = [
    {
      id: 1,
      name: "The Cracker Barrel's Country Boy Breakfast",
      image: './assets/images/product-2a.jpg',
      price: 25.0,
      quantity: 1,
    },
    {
      id: 2,
      name: "Old Timer's Meat Breakfast",
      image: './assets/images/product-2b.jpg',
      price: 12.0,
      quantity: 1,
    },
    {
      id: 3,
      name: "Uncle Herschel's Favorite",
      image: './assets/images/product-2c.jpg',
      price: 25.0,
      quantity: 1,
    },
    {
      id: 4,
      name: "Grandpa's Country Fried Breakfast",
      image: './assets/images/product-2d.jpg',
      price: 30.0,
      quantity: 1,
    },
  ];

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="shopping-cart">
      <div className="shopping-cart-header d-flex justify-content-between">
        <h2>Review your Cart</h2>
        <i className="fa fa-close"></i>
      </div>
      <div className="shopping-cart-body">
        {items.map(item => (
          <div className="row shopping-cart-item d-flex justify-content-between" key={item.id}>
            <div className="col-2 d-flex align-items-center">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="col-8">
              <h3>{item.name}</h3>
              <div className="shopping-cart-counter">
                <i className="fa fa-minus"></i>
                <span>{item.quantity}</span>
                <i className="fa fa-plus"></i>
              </div>
            </div>
            <div className="col-2 item-price d-flex align-items-end">
              <p className="mb-0 text-center">${item.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="shopping-cart-footer">
        <div className="d-flex justify-content-between px-3 py-2">
          <div>
            <h2 className="mb-0">Subtotal</h2>
            <p className="mb-0">Shipping & taxes calculated at checkout</p>
          </div>
          <div className="d-flex align-items-end">
            <p className="footer-total-price mb-0">${subtotal.toFixed(2)}</p>
          </div>
        </div>
        <div className="d-flex justify-content-between px-2">
          <div className="footer-checkout">
            <div className="anim-layer"></div>
            <a href="#">Checkout</a>
          </div>
          <div className="footer-shopping">
            <div className="anim-layer"></div>
            <a href="#">Continue Shopping</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
