const express = require("express");
const bodyParser = require('body-parser');

const ClientesRouter = require("./domain/clientes/clientes.routers");
const EquipamentosRouter = require("./domain/equipamentos/equipamentos.routers");
const PlanosRouters = require("./domain/planos/planos.routers");
const ClientesService = require("./domain/clientes/clientes.service");
const ClientesEntity = require("./domain/clientes/clientes.entity");
const PlanosServices = require("./domain/planos/planos.services");
const PlanosEntity = require("./domain/planos/planos.entity");
const EquipamentosServices = require("./domain/equipamentos/equipamentos.services");
const EquipamentosEntity = require("./domain/equipamentos/equipamentos.entity");

async function bootstrap() {
    
    const app = express();
    app.use(bodyParser.json())
    
    ClientesRouter.init(app,new ClientesService(new ClientesEntity()))
    EquipamentosRouter.init(app,new EquipamentosServices(new EquipamentosEntity()))
    PlanosRouters.init(app,new PlanosServices(new PlanosEntity()))

    app.listen(3000, () => {
        console.log("Servidor rodando.");
    })
}
bootstrap()
