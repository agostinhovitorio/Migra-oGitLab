module.exports = class ClientesEntity{
    banco = []

    findAll() {
        return this.banco;
    }

    findByUserName(username) {
        return this.banco.find(item => item.nome == username)
    }

    create(data) {
        this.banco.push(data)
        return data;
    }

    update(username,data){
        const itemIndex = this.banco.findIndex(item => item.nome == username)
        this.banco[itemIndex] = { ...this.banco[itemIndex],...data}
        return this.banco[itemIndex];
    }

    delete(username){
        let deleted = this.banco.filter(item => item.nome != username)
        this.banco = deleted;
        return this.banco;
    }

}