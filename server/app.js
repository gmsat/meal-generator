require("dotenv").config({path: "./src/config/.env"})

const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const cors = require("cors");
const apiRoutes = require("./src/routes/routes");

app.use(cors());
app.use(express.json());
app.use("/api", apiRoutes);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
