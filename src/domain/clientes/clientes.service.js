module.exports = class ClientesService {

    constructor(clientEntity) {
        this.clientEntity = clientEntity;
    }

    findAll() {
        return this.clientEntity.findAll()
    }

    findByUserName(username) {
        return this.clientEntity.findByUserName(username);
    }

    create(data) {
        return this.clientEntity.create(data)
    }
    
    update(username,data) {
        return this.clientEntity.update(username,data)
    }

    delete(username) {
        return this.clientEntity.delete(username)
    }

}
