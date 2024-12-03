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

  if (!email || !password) {
    return res.status(400).json({ message: 'Please provide both email and password.' });
  }

  try {
  
    const connection = await mysql.createConnection(db);

    const [rows] = await connection.execute('SELECT * FROM customer WHERE email = ?', [email]);
    if (rows.length === 0) {
      await connection.end();
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    const customer = rows[0];
    if (customer.password === password) {
    
      await connection.end();
      return res.status(200).json({ message: 'Login successful!' });
    } else {
    
      await connection.end();
      return res.status(401).json({ message: 'Invalid email or password.' });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});
///////////////////////////// Login call //////////////////////////////////////




const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);

  
});
