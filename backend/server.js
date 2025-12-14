const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/expenses", require("./routes/expenseRoutes"));

mongoose.connect("mongodb+srv://prakulkollipara_db_user:xQWxEzBDyjJdNqis@cluster0.imujgkk.mongodb.net/?appName=Cluster0")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.listen(5000, () => console.log("Server running on port 5000"));
