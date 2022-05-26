const express = require("express");
const app = express();
const port = 4000;
const apiRoutes = require("./src/routes/routes");

app.use(express.json());
app.use("/", apiRoutes);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
