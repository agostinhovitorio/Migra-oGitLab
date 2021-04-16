module.exports = class PlanosServices {
    constructor(planosEntity) {
        this.planosEntity = planosEntity
    }

    async findAll() {
        return await this.planosEntity.findAll();
    }

    async findByGroupName(groupname) {
        return await this.planosEntity.findByGroupName(groupname)
    }

    async create(data) {
        return await this.planosEntity.create(data)
    }

    async update(groupname,data) {
        return await this.planosEntity.update(groupname,data)
    }

    async delete(groupname) {
        return await this.planosEntity.delete(groupname)
    }
}