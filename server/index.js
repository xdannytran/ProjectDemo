const express = require("express");

const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors());

let {getLunch, getDinner, getBreakfast } = require("./controller")

app.get("/api/breakfast",getBreakfast)
app.get("/api/lunch",getLunch)
app.get("/api/dinner",getDinner)



app.listen(5050, () => console.log("Server running on port 5050"));