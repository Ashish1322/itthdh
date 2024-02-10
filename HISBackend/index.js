const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth");
const dotenv = require("dotenv");

const app = express();
const PORT = 3001;

// middlewares
app.use(bodyParser.json());

// configure routes
app.use("/auth", authRoutes);
dotenv.config();

// connection to database
mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(`Databse Connection Faield : ${err.message} `));

app.listen(PORT, () => console.log(`Server is running on port ${PORT} `));
