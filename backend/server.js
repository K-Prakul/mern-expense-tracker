const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/expenses", require("./routes/expenseRoutes"));
app.get("/", (req, res) => {
  res.send("Backend Running");
});

mongoose.connect("process.env.MONGO_URI")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.listen(5000, () => console.log("Server running on port 5000"));
