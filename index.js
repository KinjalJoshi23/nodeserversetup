console.log("Hello Node");

const express = require("express")
const app = express();

app.get("/", (req, res) => {
    res.send("Hello Backend")
});

app.listen(6080, () => {
    console.log("Sever running on port 6080");
});
