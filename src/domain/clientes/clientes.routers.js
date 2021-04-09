module.exports = class ClientesRouter {

    static init(app) {

        app.get('/clientes', (req, res) => {
            res.status(500).send('Falta implementação')
        });

        app.get('/clientes/:username', (req, res) => {
            res.status(500).send('Falta implementação')
            //res.send(req.params.username)
        });

        app.post('/clientes', (req, res) => {
            //console.log(req.body)
            res.status(500).send('Falta implementação')
        });

        app.put('/clientes/:username', (req,res) => {
            console.log(req.body)
            res.send(req.params.username)
        });

        app.delete('/clientes/:username', (req,res) => {
          res.send(req.params.username)
        });
        

    }
}
