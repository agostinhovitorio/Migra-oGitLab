module.exports = class PlanosRouters {
    static init(app, planosServices) {
        app.get('/planos', (req,res) =>{
            let planos = planosServices.findAll()
            res.status(200).json(planos)  
        });

        app.get('/planos/:groupname', (req,res) =>{
            let plano = planosServices.findByGroupName(req.params.name)
            res.status(200).json(plano)
        });

        app.post('/planos', (req,res) =>{
            let plano = planosServices.create(req.body)
            res.status(200).json(plano)
        });

        app.put('/planos/:groupname', (req,res) =>{
            let plano = planosServices.update(req.params.groupname,req.body)
            res.status(200).json(plano)
        });

        app.delete('/planos/:groupname', (req,res) =>{
            let plano = planosServices.delete(req.params.groupname)
            res.status(200).json(plano)
        });
    }
}