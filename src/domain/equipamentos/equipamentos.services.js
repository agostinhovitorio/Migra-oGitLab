module.exports = class EquipamentosServices {
   
    constructor(equipamentosEntity) {
        this.equipamentosEntity = equipamentosEntity
    }

    findAll() {
        return this.equipamentosEntity.findAll()
    }

    findByShortName(shortname) {
        return this.equipamentosEntity.findByShortName(shortname) 
    }

    create(data) {
        return this.equipamentosEntity.create(data)
        
    }

    update(shortname,data) {
        return this.equipamentosEntity.update(shortname,data)
    }

    delete(shortname) {
        return this.equipamentosEntity.delete(shortname)
    }
}