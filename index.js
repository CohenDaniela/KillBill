///importar
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

///crear servidor
const app = express();

///configurar el servidor
app.use(cors());
app.use(express.json({ limit: "25mb" }));

///iniciar el servidor
const port = 3003;
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});

///conexion DB
async function getConnection() {
    //creary configurar la conexion
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "2016Pa13Qr10Lg",
      database: "kill_bill_death_list_five",
    });
  
    connection.connect();
    return connection;
    
  }
 ///endpoint death list five
  app.get("/api/listFive", async (req, res) => {
   
    const conn = await getConnection();
    const querylistFive = "SELECT * FROM  death_list_five";
  

    const [results, fields] = await conn.query(querylistFive);
  
    console.log(fields);
    console.log(results);
  
    
    conn.end();
    res.json(results);
  });

  ///endpoint other characters

  app.get("/api/others", async (req, res) => {
   
    const conn = await getConnection();
    const queryOthers = "SELECT * FROM  Other_Characters";
  
    const [results, fields] = await conn.query(queryOthers);
  
    console.log(fields);
    console.log(results);

    conn.end();
    res.json(results);
  });
  ///añadir personaje en other characters
  app.post("/api/others", async (req, res) => {
    const dataCharacter = req.body; 
    const { Name, Alias, Weapon } = dataCharacter;
  
    //Validaciones
    
  
    let sql =
      "INSERT INTO Other_Characters(Name, Alias, Weapon) VALUES (?, ?, ?);";
  
    try {
      //hacer la conexión con la BD
      const conn = await getConnection();
  
      //Ejecutar esa consulta
      const [results] = await conn.query(sql, [
        Name, Alias, Weapon
      ]);
  
      // Valida si ya existe
      if (results.affectedRows === 0) {
        res.json({
          success: false,
          message: "No se ha podido insertar",
        });
        return;
      }
  
      res.json({
        success: true,
        id: results.insertId, 
      });
    } catch (error) {
      res.json({
        success: false,
        message: `Ha ocurrido un error${error}`,
      });
    }
  });

  ///eliminar


///actualizar
