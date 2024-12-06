import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [customers, setCustomers] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState('');

  // Fetch customers and restaurants data on component mount
  useEffect(() => {
    // Fetch customers
    const fetchCustomers = async () => {
      try {
        const response = await fetch('http://localhost:3001/admin/customers');
        const data = await response.json();
        if (response.ok) {
          setCustomers(data);
        } else {
          setError('Failed to fetch customers');
        }
      } catch (err) {
        setError('Unable to connect to the server');
      }
    };

    // Fetch restaurants
    const fetchRestaurants = async () => {
      try {
        const response = await fetch('http://localhost:3001/admin/restaurants');
        const data = await response.json();
        if (response.ok) {
          setRestaurants(data);
        } else {
          setError('Failed to fetch restaurants');
        }
      } catch (err) {
        setError('Unable to connect to the server');
      }
    };

    fetchCustomers();
    fetchRestaurants();
  }, []);

  // Handle deleting customer
  const handleDeleteCustomer = async (customerId) => {
    try {
      const response = await fetch(`http://localhost:3001/admin/customers/${customerId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setCustomers((prev) => prev.filter((customer) => customer.customer_id !== customerId));
      } else {
        setError('Failed to delete customer');
      }
    } catch (err) {
      setError('Unable to connect to the server');
    }
  };

  // Handle deleting restaurant
  const handleDeleteRestaurant = async (restaurantId) => {
    try {
      const response = await fetch(`http://localhost:3001/admin/restaurants/${restaurantId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setRestaurants((prev) => prev.filter((restaurant) => restaurant.restaurant_id !== restaurantId));
      } else {
        setError('Failed to delete restaurant');
      }
    } catch (err) {
      setError('Unable to connect to the server');
    }
  };

  return (
    <div className="container">
      <h2 className="text-center mb-4">Admin Dashboard</h2>
      
      {error && <div className="alert alert-danger">{error}</div>}

      {/* Customers Table */}
      <h4 className="mb-3">Customers</h4>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Customer ID</th>
            <th scope="col">Email</th>
            <th scope="col">Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {customers.length > 0 ? (
            customers.map((customer) => (
              <tr key={customer.customer_id}>
                <td>{customer.customer_id}</td>
                <td>{customer.email}</td>
                <td>{customer.name}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteCustomer(customer.customer_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No customers found</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Restaurants Table */}
      <h4 className="mb-3">Restaurants</h4>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Restaurant ID</th>
            <th scope="col">Name</th>
            <th scope="col">Location</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {restaurants.length > 0 ? (
            restaurants.map((restaurant) => (
              <tr key={restaurant.restaurant_id}>
                <td>{restaurant.restaurant_id}</td>
                <td>{restaurant.name}</td>
                <td>{restaurant.location}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteRestaurant(restaurant.restaurant_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No restaurants found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
