// require("dotenv").config({path: "./src/config/.env"})
const path = require("path");

const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const cors = require("cors");
const apiRoutes = require("./src/routes/routes");

app.use(cors());
app.use(express.json());
app.use("/api", apiRoutes);

__dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client/build")))
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    })
}

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
