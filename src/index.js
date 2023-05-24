const express = require("express");
const app = express();

const cors = require("cors")
const dotenv = require("dotenv")
dotenv.config();
const jsondata = require("./JsonData.json");


app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
const PORT = process.env.PORT || 8000;
app.get("/", (req, res) => {
    res.send("server running...");
});
app.get("/jsondata", (req, res) => {
    res.json(jsondata);
})

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
})