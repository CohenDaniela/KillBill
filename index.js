///importar
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
require("dotenv").config();



///crear servidor
const app = express();

///configurar el servidor
app.use(cors());
app.use(express.json({ limit: "25mb" }));

///iniciar el servidor

const port = 3001

app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
let conn
///conexion DB
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



///endpoint api
app.get("/api/KillBill", async (req, res) => {
  try {
    const conn = await getConnection();
    const queryAll = "SELECT * FROM KillBill.characters";
    const [results, fields] = await conn.query(queryAll);

    console.log(fields);
    console.log(results);

    res.json(results);
  } catch (error) {
    console.error("Error executing query:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    if (conn) {
      conn.end(); // Cierra la conexión a la base de datos ∫
    }
  }
});


app.get("/api/fivelist", async (req, res) => {
  try {
    const conn = await getConnection();
    const querylistFive = "SELECT * FROM KillBill.characters WHERE category = 'five list'";
    const [results, fields] = await conn.query(querylistFive);

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




app.get('/api/:id', async (req, res) => {
  ///get id by params
  const id = req.params.id;
  //Query
  const queryCharacter = "SELECT * FROM death_list_five WHERE id_character = ?";
  //getConnection
  const conn = await getConnection();
  //Execute query
  const [result] = await conn.query(queryCharacter, id);
  //End connection
  conn.end();
  //response when the id doesn´t exist in the DB
  const numOfElements = result.length;
  if (numOfElements === 0) {
    res.json({
      success: true,
      message: "Ooops...",
    });
    return;
  }
  //response
  res.json(result);
})


const staticServerPath = './public-html';
app.use(express.static(staticServerPath));

const staticStylesPath = './public-css';
app.use(express.static(staticStylesPath));

const staticImagePath = './images';
app.use(express.static(staticImagePath));