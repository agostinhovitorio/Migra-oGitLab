module.exports = class ClientesRouter {

    static init(app, clientesService) {

        app.get('/clientes', async (req, res) => {
            console.log('Listando clientes')
            let clientes = await clientesService.findAll()
            res.status(200).json(clientes)
        });

        app.get('/clientes/:username', async (req, res) => {
            console.log('Buscando cliente pelo nome')
            let cliente = await clientesService.findByUserName(req.params.username)

            res.status(200).json(cliente)
        });

        app.post('/clientes', async (req, res) => {
            let cliente = await clientesService.create(req.body)
            res.status(200).json(cliente)
        });

        app.post('/clientes/planos', async (req, res) => {
            let clientePlan = await clientesService.createClientPlan(req.body)
            res.status(200).json(clientePlan)
        })

        app.put('/clientes/:username', async (req, res) => {
            let username = req.params.username;
            let data = req.body;
            let cliente = await clientesService.update(username, data);
            res.status(200).json(cliente);
        });

        app.put('/clientes/:username/planos', async (req, res) => {
            let username = req.params.username;
            let data = req.body;
            let cliente = await clientesService.updateClientPlan(username, data);
            res.status(200).json(cliente);
        });

        app.put('/clientes/banda/:username', async (req,res) => {
            let username = req.params.username;
            let banda = req.body.banda;
            
            try {
                let cliente = await clientesService.changeBandWith(username,banda);
                res.status(200).json(cliente);
            }catch(err){
                res.status(400).send(err);     
            }
            
        })

        app.delete('/clientes/:username', async (req, res) => {
            let cliente = await clientesService.delete(req.params.username)
            res.status(200).json(cliente)
        });

        app.delete('/clientes/:username/planos', async (req, res) => {
            let cliente = await clientesService.deleteClientPlan(req.params.username)
            res.status(200).json(cliente)
        });

        app.get('/clientes/:username/extrato', async (req,res) => {
            let extrato = await clientesService.clientNavigationExtract(req.params.username)
            res.status(200).json(extrato)
        });

        app.get('/clientes/:username/extrato/ativo', async (req,res) => {
            let estrato = await clientesService.clientNavigationExtractActive(req.params.username)
            res.status(200).json(estrato)
        });

    }
}
