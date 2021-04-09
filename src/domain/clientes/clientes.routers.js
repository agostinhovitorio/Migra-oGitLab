module.exports = class ClientesRouter {

    static init(app,clientesService) {

        app.get('/clientes', (req, res) => {
            let clientes = clientesService.findAll()
            res.status(200).json(clientes)
        });

        app.get('/clientes/:username', (req, res) => {
            let cliente = clientesService.findByUserName(req.params.username)
            res.status(200).json(cliente)
        });

        app.post('/clientes', (req, res) => {
            let cliente = clientesService.create(req.body)
            res.status(200).json(cliente)
        });

        app.put('/clientes/:username', (req,res) => {
            let username = req.params.username;
            let data = req.body;
            let cliente = clientesService.update(username,data);
            res.status(200).json(cliente);
        });

        app.delete('/clientes/:username', (req,res) => {
          let cliente = clientesService.delete(req.params.username)
          res.status(200).json(cliente)
        });
        

    }
}
