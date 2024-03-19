const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "25mb" }));

const port = 3001;

app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
let conn;

async function getConnection() {
  const connection = await mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER_DB,
    password: process.env.PASS,
    database: process.env.DATABASE,
  });

  await connection.connect();
  console.log(
    `Conexión establecida con la base de datos (identificador=${connection.threadId})`
  );
  return connection;
}

app.get("/api/KillBill", async (req, res) => {
  try {
    const conn = await getConnection();
    const queryAll = "SELECT * FROM characters;";
    const [results, fields] = await conn.query(queryAll);

    console.log(fields);
    console.log(results);

    res.json(results);
  } catch (error) {
    console.error("Error executing query:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    if (conn) {
      conn.end();
    }
  }
});

const staticServerPath = "./public-html";
app.use(express.static(staticServerPath));

const staticStylesPath = "./public-css";
app.use(express.static(staticStylesPath));

const staticImagePath = "./images";
app.use(express.static(staticImagePath));
