import React, { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function CustomerProfile() {
  const [customerName, setCustomerName] = useState('');
  const [customerId, setCustomerId] = useState('');

  // Fetch the current user's name from the backend
  const fetchCurrentUser = async () => {
    try {
      const response = await fetch('http://localhost:3001/current-user', {
        method: 'GET',
        credentials: 'include', // This sends the cookies along with the request
      });
      const data = await response.json();
      if (response.ok) {
        setCustomerName(data.customerName);  // Set the customer name
        setCustomerId(data.customerId);      // Set the customer ID
      } else {
        console.log('User is not logged in or session expired.');
      }
    } catch (err) {
      console.error('Error fetching user data:', err);
    }
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  // Handle logout
  const handleLogout = () => {
    fetch('http://localhost:3001/logout', { method: 'POST', credentials: 'include' })
      .then((response) => {
        if (response.ok) {
          window.location.reload();  // Reload the page to simulate logging out
        }
      })
      .catch((error) => {
        console.error('Logout failed:', error);
      });
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {customerName || 'Loading...'}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.ItemText>
          <strong>{customerName || 'No user logged in'}</strong>
        </Dropdown.ItemText>
        <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default CustomerProfile;
