module.exports = class EquipamentosRouter {
    static init (app,equipamentosServices) {
        
        app.get('/equipamentos', (req,res) =>{
            const equipamentos = equipamentosServices.findAll()
            res.status(200).json(equipamentos)
        });

        app.get('/equipamentos/:shortname', (req,res) =>{
            const equipamento = equipamentosServices.findByShortName(req.params.shortname)
            res.status(200).json(equipamento)
        });       
         
        app.post('/equipamentos', (req,res) =>{
            const equipamento = equipamentosServices.create(req.body)
            res.status(200).json(equipamento)
        });

        app.put('/equipamentos/:shortname', (req,res) =>{
            const shortname = req.params.shortname;
            const data =  req.body;
            const equipamento = equipamentosServices.update(shortname,data)
            res.status(200).json(equipamento)
        });

        app.delete('/equipamentos/:shortname', (req,res) => {
            const equipamento = equipamentosServices.delete(req.params.shortname)
            res.status(200).json(equipamento)
        })
    }
}