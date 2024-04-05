const express = require("express");
const cors = require("cors");
const fs = require("fs");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "25mb" }));

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});

app.get("/api/KillBill", async (req, res) => {
  try {
    const data = fs.readFileSync("data.json", "utf8");
    const jsonData = JSON.parse(data);
    res.json(jsonData);
  } catch (error) {
    console.error("Internal error: ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const staticServerPath = "./public-html";
app.use(express.static(staticServerPath));

const staticStylesPath = "./public-css";
app.use(express.static(staticStylesPath));

const staticImagePath = "./images";
app.use(express.static(staticImagePath));
