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

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
