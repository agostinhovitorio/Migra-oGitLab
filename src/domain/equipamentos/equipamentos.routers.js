module.exports = class EquipamentosRouter {
    static init (app,equipamentosServices) {
        
        app.get('/equipamentos', async (req,res) =>{
            const equipamentos = await equipamentosServices.findAll()
            res.status(200).json(equipamentos)
        });

        app.get('/equipamentos/:shortname', async (req,res) =>{
            const equipamento = await equipamentosServices.findByShortName(req.params.shortname)
            res.status(200).json(equipamento)
        });       
         
        app.post('/equipamentos', async (req,res) =>{
            const equipamento = await equipamentosServices.create(req.body)
            res.status(200).json(equipamento)
        });

        app.put('/equipamentos/:shortname', async (req,res) =>{
            const shortname = req.params.shortname;
            const data =  req.body;
            const equipamento = await equipamentosServices.update(shortname,data)
            res.status(200).json(equipamento)
        });

        app.delete('/equipamentos/:shortname', async (req,res) => {
            const equipamento = await equipamentosServices.delete(req.params.shortname)
            res.status(200).json(equipamento)
        })
    }
}