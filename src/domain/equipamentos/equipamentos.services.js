const ClientSSH = require('../../util/clientSSH.util');

module.exports = class EquipamentosServices { //Esse objeto deve servir para gerenciar os outros objetos, encarregando cada um no seu devido propósito.
   
    constructor(equipamentosEntity) {
        this.equipamentosEntity = equipamentosEntity
        this.ssh = new ClientSSH();
    }

    async findAll() {
        return await this.equipamentosEntity.findAll()
    }

    async findByShortName(shortname) {
        return await this.equipamentosEntity.findByShortName(shortname) 
    }

    async create(data) {
        let nasCreated = await this.equipamentosEntity.create(data);
        this.ssh.restartFreeradiusService();
        return nasCreated
        
    }

    async update(shortname,data) {
        let nasUpdated = await this.equipamentosEntity.update(shortname,data);
        this.ssh.restartFreeradiusService();
        return nasUpdated
    }

    async delete(shortname) {
        let nasDeleted = await this.equipamentosEntity.delete(shortname)
        this.ssh.restartFreeradiusService();
        return nasDeleted
    }
}