const express = require("express");
const mysql = require("mysql2/promise");
const cors = require("cors");
const session = require("express-session");
const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(cors());
app.use(express.json());

// Database configuration
const dbConfig = {
  host: "localhost",
  user: "root",
  password: "",
  database: "foodBuddy",
};

// Create a connection pool
const dbPool = mysql.createPool(dbConfig);

// Universal function to get database connection
async function dbConnect() {
  try {
    return await dbPool.getConnection();
  } catch (error) {
    console.error("Database connection failed:", error.message);
    throw new Error("Database connection failed");
  }
}
app.use(
  session({
    secret: "my-localhost-secret-key-1234", // Use a strong secret key
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }, // Set `secure: true` if you're using HTTPS
  })
);

///////////////////////////// Current user call start/////////////////////////////////////
app.get("/current-user", (req, res) => {
  if (req.session.customerId && req.session.customerName) {
    return res.status(200).json({
      message: "User is logged in.",
      customerName: req.session.customerName,
      customerId: req.session.customerId,
    });
  } else {
    return res.status(401).json({ message: "Not logged in." });
  }
});
///////////////////////////// Current user call end/////////////////////////////////////


///////////////////////////// Login call start //////////////////////////////////////
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Please provide both email and password." });
  }

  try {
    const connection = await dbConnect();

    const [rows] = await connection.execute("SELECT * FROM customer WHERE email = ?", [email]);

    connection.release(); // Release the connection back to the pool

    if (rows.length === 0) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    const customer = rows[0];
    if (customer.password === password) {
      return res.status(200).json({ message: "Login successful!" });
    } else {
      return res.status(401).json({ message: "Invalid email or password." });
    }
  } catch (err) {
    console.error("Login error:", err.message);
    return res.status(500).json({ message: "Server error. Please try again later." });
  }
});
///////////////////////////// Login call end //////////////////////////////////////

//////////////////////////// SignUp call start /////////////////////////////////////
app.post("/signup", async (req, res) => {
  const { name, email, password, phone_number } = req.body;

  // Validation
  if (!name || !email || !password || !phone_number) {
    return res.status(400).json({ message: "All fields are required." });
  }

  if (!email.includes("@")) {
    return res.status(400).json({ message: "Invalid email address." });
  }

  if (password.length < 6) {
    return res.status(400).json({ message: "Password must be at least 6 characters long." });
  }

  // Create unique customer_id
  const customer_id = uuidv4();

  const query = `
    INSERT INTO customer (customer_id, name, email, password, phone_number, loyalty_points)
    VALUES (?, ?, ?, ?, ?, 0)
  `;

  try {
    const connection = await dbConnect();

    const [result] = await connection.execute(query, [customer_id, name, email, password, phone_number]);

    connection.release(); 

    return res.status(201).json({ message: "Account created successfully!" });
  } catch (err) {
    

    return res.status(500).json({ message: "Failed to create account. Please try again later." });
  }
});
//////////////////////////// SignUp call end /////////////////////////////////////

/////////////////////////// Logout call start ///////////////////////////////////
app.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to logout' });
    }
    res.clearCookie('connect.sid'); // Clear the session cookie
    res.status(200).json({ message: 'Logged out successfully' });
  });
});
/////////////////////////// Logout call end ///////////////////////////////////




const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
