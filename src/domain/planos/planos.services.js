module.exports = class PlanosServices {
    constructor(planosEntity) {
        this.planosEntity = planosEntity
    }

    findAll() {
        return this.planosEntity.findAll()

    }

    findByGroupName(groupname) {
        return this.planosEntity.findByGroupName(groupname)
    }

    create(data) {
        return this.planosEntity.create(data)
    }

    update(groupname,data) {
        return this.planosEntity.update(groupname,data)
    }

    delete(groupname) {
        return this.planosEntity.delete(groupname)
    }
}