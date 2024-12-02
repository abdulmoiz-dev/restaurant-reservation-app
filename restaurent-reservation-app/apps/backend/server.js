const express = require("express");
const mysql = require("mysql2/promise");
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json()); 


const db = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'foodBuddy',
  
};


///////////////////////////// Login call //////////////////////////////////////
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Validate inputs
  if (!email || !password) {
    return res.status(400).json({ message: 'Please provide both email and password.' });
  }

  try {
    // Create a connection to the database
    const connection = await mysql.createConnection(db);

    // Query the database to find the customer by email
    const [rows] = await connection.execute('SELECT * FROM customer WHERE email = ?', [email]);

    // If no customer found
    if (rows.length === 0) {
      await connection.end();
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    const customer = rows[0];

    // Compare the password directly (no hashing)
    if (customer.password === password) {
      // Password is correct, login success
      await connection.end();
      return res.status(200).json({ message: 'Login successful!' });
    } else {
      // Invalid password
      await connection.end();
      return res.status(401).json({ message: 'Invalid email or password.' });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

///////////////////////////// Login call //////////////////////////////////////


app.get("/customers", async (req, res) => {
  try {
    // Create a connection to the database
    const connection = await mysql.createConnection(db);
    
    // Query to fetch 5 customers from the customer table
    const [rows] = await connection.execute('SELECT * FROM customer LIMIT 5');
    
    // Send the result as a JSON response
    res.json(rows);
    
    // Close the connection
    await connection.end();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "An error occurred while fetching customers." });
  }
});







const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);

  
});
