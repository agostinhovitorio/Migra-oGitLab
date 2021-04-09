const express = require("express");
const bodyParser = require('body-parser');

const ClientesRouter = require("./domain/clientes/clientes.routers");


async function bootstrap() {
    
    const app = express();
    app.use(bodyParser.json())
    
    ClientesRouter.init(app)

    app.listen(3000, () => {
        console.log("Servidor rodando.");
    })
}
bootstrap()
