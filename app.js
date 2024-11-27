require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./config/db");

// Initialize app
const app = express();
const PORT = process.env.PORT || 5000;

require("dotenv").config();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database connection
connectDB();

// Routes
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/tasks", require("./routes/taskRoutes"));

// Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
