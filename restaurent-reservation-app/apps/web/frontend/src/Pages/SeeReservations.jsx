import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
const SeeReservations = () => {
  const [reservations, setReservations] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        // Hardcoded customer_id = 1
        const response = await fetch(`http://localhost:3001/see?customer_id=1`);
        const data = await response.json();

        if (response.ok) {
          setReservations(data);
        } else {
          setError(data.message || 'Failed to fetch reservations.');
        }
      } catch (err) {
        setError('Unable to connect to the server. Please try again later.');
      }
    };

    fetchReservations();
  }, []);

  return (<>
    <Header/>
    <div className="container">
      <h2 className="my-4">Your Reservations</h2>

      {error && <div className="alert alert-danger">{error}</div>}

      {reservations.length === 0 ? (
        <div className="alert alert-info">You have no reservations made.</div>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Reservation ID</th>
              <th scope="col">Reservation Time</th>
              <th scope="col">Status</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation) => (
              <tr key={reservation.reservation_id}>
                <td>{reservation.reservation_id}</td>
                <td>{new Date(reservation.reservation_time).toLocaleString()}</td>
                <td>{reservation.status}</td>
                <td>${reservation.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
    </>
  );
};

export default SeeReservations;
