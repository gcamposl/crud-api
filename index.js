const express = require("express");

const app = express();

app.get("/", (request, response) => {
    console.log("Hello World! First END POINT ;D");
    response.json({
        message: "Hello World! First END POINT ;D"
    });//enviar
});


app.listen(5000, () => {
    console.log("Aplicação rodando na porta 5000");
});
