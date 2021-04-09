module.exports = class EquipamentosRouter {
    static init (app) {
        app.get('/equipamentos', (req,res) =>{
            res.status(500).send('Falta implementação')
        });

        app.get('/equipamentos/:shortname', (req,res) =>{
            res.status(500).send('Falta implementação')
        });       
         
        app.post('/equipamentos', (req,res) =>{
            res.status(500).send('Falta implementação')
        });

        app.put('/equipamentos/:shortname', (req,res) =>{
            res.status(500).send('Falta implementação')
        });

        app.delete('/equipamentos/:shortname', (req,res) => {
            res.status(500).send('Falta implementação')
        })
    }
}