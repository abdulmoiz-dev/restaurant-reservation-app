import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'; // Your existing Home page component
import Login from './Pages/Login'; // New Login page component
import PageNotFound from './Pages/PageNotFound'; // New 404 page component
import AuthPage from './Pages/Auth';
import Signup from './Pages/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/Signup" element={<Signup />} /> */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>

    
  );
}

export default App;
// import React, { useEffect, useState } from 'react';

// const CustomerList = () => {
//   const [customers, setCustomers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Fetch data from the API when the component mounts
//     const fetchCustomers = async () => {
//       try {
//         const response = await fetch('http://localhost:3001/customers');
        
//         if (!response.ok) {
//           throw new Error('Failed to fetch customers');
//         }

//         const data = await response.json();
//         setCustomers(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCustomers();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       <h1>Customer List</h1>
//       <ul>
//         {customers.map((customer) => (
//           <li key={customer.id}>
//             {customer.name} - {customer.email}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CustomerList;
