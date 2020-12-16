// serving static files in express
const path = require("path");
const express = require("express");
const app = express();

const staticpath = path.join(__dirname, "../public");

 

// build in middleware
app.use(express.static(staticpath));

app.get("/" , (req,res) => {
    res.send("my name is aman");
});
app.get("/about" , (req,res) => {
    res.send("my name is aman about");
});

app.listen(3000, () => {
    console.log("port is working");
});



 