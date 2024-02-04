///importar
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
require("dotenv").config();
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");



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
      conn.end(); // Cierra la conexión a la base de datos en el bloque finally
    }
  }
});

// app.get("/api/KillBill", async (req, res) => {

//   const conn = await getConnection();
//   const queryAll = "SELECT * FROM KillBill.characters;";


//   const [results, fields] = await conn.query(queryAll);

//   console.log(fields);
//   console.log(results);


//   conn.end();
//   res.json(results);
// });

///end point five list

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
      conn.end(); // Cierra la conexión a la base de datos en el bloque finally
    }
  }
});


// app.get("/api/fivelist", async (req, res) => {

//   const conn = await getConnection();
//   const querylistFive = "SELECT * FROM KillBill.characters WHERE category = 'five list'";


//   const [results, fields] = await conn.query(querylistFive);

//   console.log(fields);
//   console.log(results);


//   conn.end();
//   res.json(results);
// });




app.get('/api/:id', async (req, res) => {
  ///get id by params
  const id = req.params.id;
  //Query
  const queryCharacter= "SELECT * FROM death_list_five WHERE id_character = ?";
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
// app.get("/api/id_character", async (req, res) => {

//   const conn = await getConnection();
//   const queryId = "SELECT * FROM death_list_five WHERE id_character = ? ";


//   const [results, fields] = await conn.query(queryId, [id_character]);

//   console.log(fields);
//   console.log(results);


//   conn.end();
//   res.json(results);
// });

// ///endpoint other characters

// app.get("/api/others", async (req, res) => {

//   const conn = await getConnection();
//   const queryOthers = "SELECT * FROM  Other_Characters";

//   const [results, fields] = await conn.query(queryOthers);

//   console.log(fields);
//   console.log(results);

//   conn.end();
//   res.json(results);
// });


// ///añadir personaje en other characters
// app.post("/api/others", async (req, res) => {
//   const dataCharacter = req.body;
//   console.log(req.body);
//   const { Name, Alias, Occupation, Weapons, Affiliation, Age, Place_of_birth
//   } = dataCharacter;

//   //Validaciones


//   let sql =
//     "INSERT INTO Other_Characters(Name, Alias,Occupation, Weapons, Affiliation, Age, Place_of_birth) VALUES (?, ?, ?, ?, ?, ?, ?);";

//   try {
//     //hacer la conexión con la BD
//     const conn = await getConnection();

//     //Ejecutar esa consulta
//     const [results] = await conn.query(sql, [
//       Name, Alias, Occupation, Weapons, Affiliation, Age, Place_of_birth
//     ]);

//     // Valida si ya existe
//     if (results.affectedRows === 0) {
//       return res.json({
//         success: false,
//         message: "No se ha podido insertar",
//       });
     
//     }

//     res.json({
//       success: true,
//       id: results.insertId,
//     });
//   } catch (error) {
//     res.json({
//       success: false,
//       message: `Ha ocurrido un error${error}`,
//     });
//   }
// });




// ///actualizar


// app.put("/api/others/:id", async (req, res) => {

//   const dataCharacter = req.body;
//   const { Name, Alias, Occupation, Weapons, Affiliation, Age, Place_of_birth } = dataCharacter;

//   const idOtherCharacters = req.params.id;


//   let sql = "UPDATE Other_Characters SET Name = ? , Alias = ?,   Occupation = ? , Weapons = ? , Affiliation= ?, Age = ? , Place_of_birth = ?  WHERE idOther_Characters = ?;"
//   const conn = await getConnection();

//   const [results] = await conn.query(sql, [
//     Name, Alias, Occupation, Weapons, Affiliation, Age, Place_of_birth, idOtherCharacters
//   ]);
//   res.json({
//     success: true,
//     message: "actualizado correctamente"
//   })
// }
// );

// ///eliminar 

// app.delete("/api/others/:id", async (req, res) => {

//   const idCharacters = req.params.id;


//   let sql = " DELETE FROM Other_Characters  WHERE idOther_Characters = ?;"

//   const conn = await getConnection();

//   const [results] = await conn.query(sql, [
//     idCharacters
//   ]);
//   res.json({
//     success: true,
//     message: "eliminado correctamente"
//   })
// }
// );

// ///token

// const generateToken = (payload) => {
//   const token = jwt.sign(payload, 'secreto', { expiresIn: '1h' });
//   return token;
// };

// const verifyToken = (token) => {
//   try {
//     const decoded = jwt.verify(token, 'secreto');
//     return decoded;
//   } catch (err) {
//     return null;
//   }
// };
// const authenticateToken = (req, res, next) => {
//   const token = req.headers['authorization'];

//   if (!token) {
//     return res.status(401).json({ error: 'Token no proporcionado' });
//   }

//   const decoded = verifyToken(token);

//   if (!decoded) {
//     return res.status(401).json({ error: 'Token inválido' });
//   }

//   req.user = decoded;
//   next();
// };

// ///endpoint registro

// app.post("/api/signup", async (req, res) => {
//   const username = req.body.name;
//   const email = req.body.email;
//   const password = req.body.password;

//   const passwordHash = await bcrypt.hash(password, 10);

//   let sql = "INSERT INTO users (name,email,password) VALUES (?,?,?)";


//   jwt.sign(password, "secret_key", async (err, token) => {
//     if (err) {
//       res.status(400).send({ msg: "Error" });
//     } else {
//       const connection = await getConnection();
//       const [results] = await connection.query(sql, [
//         username,
//         email,
//         passwordHash,
//       ]);
//       connection.end();

//       res.json({ msg: "success", token: token, id: results.insertId });
//     }
//   });
// });

// /// endpoint login
// app.post("/api/login", async (request, response) => {
//   //recibe el cuerpo de la solicitud, que debería contener el nombre de usuario y la contraseña.
//   const body = request.body;

//   //Buscar si el usuario existe en la bases de datos
//   const sql = "SELECT * FROM users WHERE email= ?";
//   const connection = await getConnection();
//   const [users] = await connection.query(sql, [body.email]);
//   connection.end();

//   const user = users[0];

//   //Comprueba si el usuario existe y si la contraseña proporcionada es correcta utilizando bcrypt.compare.
//   const passwordCorrect =
//     user === null
//       ? false
//       : await bcrypt.compare(body.password, user.password);

//   //Si el usuario no existe o la contraseña es incorrecta, responde con un estado 401 y un mensaje de error.
//   if (!(user && passwordCorrect)) {
//     return response.status(401).json({
//       error: "Credenciales inválidas",
//     });
//   }

//   //Si las credenciales son correctas, se prepara un objeto userForToken que incluye el username y el id del usuario.
//   const userForToken = {
//     username: user.name,
//     id: user.id,
//   };

//   //Crear el token para enviar al front
//   const token = generateToken(userForToken);

//   //Finalmente, si todo es correcto, la función responde con un estado 200 y envía un objeto JSON con el token, el nombre de usuario y el nombre real del usuario.
//   response
//     .status(200)
//     .json({ token, username: user.name, email: user.email });
// });


const staticServerPath = './public-html';
app.use(express.static(staticServerPath));

const staticStylesPath = './public-css';
app.use(express.static(staticStylesPath));

const staticImagePath = './images';
app.use(express.static(staticImagePath));