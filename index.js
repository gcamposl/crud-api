const express = require("express");
const dataBase = [];
const app = express();

app.use(express.json());

app.get("/", (request, response) => {
    console.log("Hello World! First END POINT ;D");
    response.json({
        message: "Hello World! First END POINT ;D"
    });//enviar
});

function createUser (req, res) {
  dataBase.push(req.body); // 😜
  res.sendStatus(201);
}

function listUsers(req, res) {
  res.json(dataBase);
}

app.post('/create', createUser);
app.get('/list', listUsers);

app.listen(5000, () => {
    console.log("Aplicação rodando na porta 5000");
});
