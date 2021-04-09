const express = require("express");
const bodyParser = require('body-parser');

const ClientesRouter = require("./domain/clientes/clientes.routers");
const EquipamentosRouter = require("./domain/equipamentos/equipamentos.routers");
const PlanosRouters = require("./domain/planos/planos.routers");
const ClientesService = require("./domain/clientes/clientes.service");
const ClientesEntity = require("./domain/clientes/clientes.entity");
const PlanosServices = require("./domain/planos/planos.services");
const PlanosEntity = require("./domain/planos/planos.entity");


async function bootstrap() {
    
    const app = express();
    app.use(bodyParser.json())
    
    ClientesRouter.init(app,new ClientesService(new ClientesEntity()))
    EquipamentosRouter.init(app)
    PlanosRouters.init(app,new PlanosServices(new PlanosEntity()))

    app.listen(3000, () => {
        console.log("Servidor rodando.");
    })
}
bootstrap()
