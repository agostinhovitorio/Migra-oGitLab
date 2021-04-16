module.exports = class PlanosRouters {
    static init(app, planosServices) {
        app.get('/planos', async (req,res) =>{
            let planos = await planosServices.findAll()
            res.status(200).json(planos)  
        });

        app.get('/planos/:groupname', async (req,res) =>{
            let plano = await planosServices.findByGroupName(req.params.groupname)
            res.status(200).json(plano)
        });

        app.post('/planos', async (req,res) =>{
            let plano = await planosServices.create(req.body)
            res.status(200).json(plano)
        });

        app.put('/planos/:groupname', async (req,res) =>{
            let plano = await planosServices.update(req.params.groupname,req.body)
            res.status(200).json(plano)
        });
        

        app.delete('/planos/:groupname', async (req,res) =>{
            let plano = await planosServices.delete(req.params.groupname)
            res.status(200).json(plano)
        });
    }
}