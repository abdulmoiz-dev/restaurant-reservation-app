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
      
      return res.status(200).json({ message: "Login successful!" }

      );
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

/////////////////////////// get restaurants start /////////////////////////////
app.get("/restaurant", async (req, res) => {
  const query = `
    SELECT restaurant_id, name, location, phone_number, opening_hours, cuisine_type
    FROM restaurant
  `;

  try {
    const connection = await dbConnect();

    const [rows] = await connection.execute(query);

    connection.release();

    return res.status(200).json(rows);
  } catch (err) {
    console.error("Error fetching restaurants:", err.message);
    return res.status(500).json({ message: "Failed to fetch restaurants. Please try again later." });
  }
});

/////////////////////////// get restaurants start /////////////////////////////


/////////////////////////// get brach start ///////////////////////////////////
app.get("/branches/:restaurant_id", async (req, res) => {
  const { restaurant_id } = req.params;

  const query = `
    SELECT branch_id, branch_name, branch_location, branch_phone_number
    FROM branch
    WHERE restaurant_id = ?
  `;

  try {
    const connection = await dbConnect();

    const [rows] = await connection.execute(query, [restaurant_id]);

    connection.release();

    if (rows.length === 0) {
      return res.status(404).json({ message: "No branches found for this restaurant." });
    }

    return res.status(200).json(rows);
  } catch (err) {
    console.error("Error fetching branches:", err.message);
    return res.status(500).json({ message: "Failed to fetch branches. Please try again later." });
  }
});
/////////////////////////// get brach end ///////////////////////////////////


///////////////////////// Menu items start //////////////////////////////////
app.get("/menu/:restaurantId", async (req, res) => {
  const { restaurantId } = req.params;

  const query = `
    SELECT menu_id, item_name, description, price
    FROM menu
    WHERE restaurant_id = ?
  `;

  try {
    const connection = await dbConnect();
    const [rows] = await connection.execute(query, [restaurantId]);

    connection.release();

    if (rows.length > 0) {
      return res.status(200).json(rows);
    } else {
      return res.status(404).json({ message: "Menu not found for this restaurant." });
    }
  } catch (err) {
    console.error("Error fetching menu:", err.message);
    return res.status(500).json({ message: "Failed to fetch menu. Please try again later." });
  }
});
/////////////////////////// menu items end /////////////////////////////////


/////////////////////////// Table Start ////////////////////////////////
app.post("/restauranttable", async (req, res) => {
  const { restaurantId, branchId, price } = req.body;

  // Validate input data
  if (!restaurantId || !branchId || !price) {
    return res.status(400).json({ message: "Missing required fields." });
  }

  try {
    const connection = await dbConnect();

    // Check if restaurantId exists in the restaurant table
    const restaurantQuery = `
      SELECT * FROM restaurant WHERE restaurant_id = ?
    `;
    const [restaurantRows] = await connection.execute(restaurantQuery, [restaurantId]);
    if (restaurantRows.length === 0) {
      return res.status(404).json({ message: "Restaurant not found." });
    }

    // Check if branchId exists in the branch table
    const branchQuery = `
      SELECT * FROM branch WHERE branch_id = ? AND restaurant_id = ?
    `;
    const [branchRows] = await connection.execute(branchQuery, [branchId, restaurantId]);
    if (branchRows.length === 0) {
      return res.status(404).json({ message: "Branch not found for the given restaurant." });
    }

    // Hardcode the default values for capacity, availability, and location_in_restaurant
    const query = `
      INSERT INTO restauranttable (branch_id, capacity, is_available, location_in_restaurant, price)
      VALUES (?, 5, 1, 'not_specified', ?)
    `;

    // Execute the query with the hardcoded values
    const [result] = await connection.execute(query, [
      branchId,
      price
    ]);

    connection.release();

    return res.status(201).json({
      message: "Table added successfully.",
      table_id: result.insertId, // MySQL auto-generated ID for the table
    });
  } catch (err) {
    console.error("Error inserting table:", err.message);
    return res.status(500).json({ message: "Failed to insert table. Please try again later." });
  }
});


//////////////////////////// Table End //////////////////////////////


//////////////////////// Reservation Start //////////////////////////
app.post("/reservation", async (req, res) => {
  const { customer_id, table_id, reservation_time, status, notification_sent, price } = req.body;

  const query = `
    INSERT INTO reservation (customer_id, table_id, reservation_time, status, notification_sent, price)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  try {
    const connection = await dbConnect(); // Ensure dbConnect establishes a valid connection

    const [result] = await connection.execute(query, [
      customer_id,
      table_id,
      reservation_time,
      status,
      notification_sent,
      price,
    ]);

    connection.release(); // Release connection back to the pool

    return res.status(201).json({
      message: "Reservation added successfully.",
      reservation_id: result.insertId, // Returning the inserted ID for reference
    });
  } catch (err) {
    console.error("Error adding reservation:", err.message);
    return res.status(500).json({ message: "Failed to add reservation. Please try again later." });
  }
});
///////////////////////// Reservation End //////////////////////////////

///////////////////////// Payment Start ///////////////////////////////
app.post("/payment", async (req, res) => {
  const { reservation_id, amount, payment_status } = req.body;

  const query = `
    INSERT INTO payment (reservation_id, amount, payment_status)
    VALUES (?, ?, ?)
  `;

  try {
    const connection = await dbConnect(); // Establish a database connection

    const [result] = await connection.execute(query, [
      reservation_id,
      amount,
      payment_status,
    ]);

    connection.release(); // Release the connection back to the pool

    return res.status(201).json({
      message: "Payment recorded successfully.",
      payment_id: result.insertId, // Returning the inserted ID for reference
    });
  } catch (err) {
    console.error("Error adding payment:", err.message);
    return res.status(500).json({ message: "Failed to record payment. Please try again later." });
  }
});
///////////////////// Payment end /////////////////////////////////

/////////////////// see /////////////////////////////////
app.get("/see", async (req, res) => {
  const customerId = 1;  // Hardcoded customer_id = 1

  try {
    const connection = await dbConnect();

    const [rows] = await connection.execute(
      `SELECT reservation_id, reservation_time, status, price
       FROM foodBuddy.reservation
       WHERE customer_id = ?`,
      [1] // Hardcoded for customer_id = 1
    );
    connection.release();  // Release the connection

    if (rows.length === 0) {
      return res.status(200).json({ message: "You have no reservations." });
    }

    return res.status(200).json(rows);  // Return all reservations for the customer
  } catch (err) {
    console.error("Error fetching reservations:", err.message);
    return res.status(500).json({ message: "Server error. Please try again later." });
  }
});

////////////////////////// see /////////////////////////


//////////////////////  admin ////////////////////////
app.post("/admin/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Please provide both email and password." });
  }

  try {
    const connection = await dbConnect();

    // Query the admin table (assuming there's an `admin` table)
    const [rows] = await connection.execute("SELECT * FROM admin WHERE email = ?", [email]);

    connection.release(); // Release the connection back to the pool

    if (rows.length === 0) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    const admin = rows[0];
    if (admin.password === password) {
      return res.status(200).json({ message: "Login successful!" });
    } else {
      return res.status(401).json({ message: "Invalid email or password." });
    }
  } catch (err) {
    console.error("Login error:", err.message);
    return res.status(500).json({ message: "Server error. Please try again later." });
  }
});
//////////////////// admin ////////////////////////////////


app.get("/admin/customers", async (req, res) => {
  try {
    const connection = await dbConnect();
    const [rows] = await connection.execute('SELECT customer_id, email, name FROM customer');
    connection.release();
    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json({ message: 'Unable to fetch customers' });
  }
});



app.get("/admin/restaurants", async (req, res) => {
  try {
    const connection = await dbConnect();
    const [rows] = await connection.execute('SELECT restaurant_id, name, location FROM restaurant');
    connection.release();
    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json({ message: 'Unable to fetch restaurants' });
  }
});


app.delete("/admin/customers/:customerId", async (req, res) => {
  const { customerId } = req.params;
  try {
    const connection = await dbConnect();
    await connection.execute('DELETE FROM customer WHERE customer_id = ?', [customerId]);
    connection.release();
    res.status(200).json({ message: 'Customer deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete customer' });
  }
});






const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
