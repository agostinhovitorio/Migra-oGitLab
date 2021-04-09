module.exports = class PlanosEntity {
    banco = []
    findAll() {
        return this.banco;
    }
    
    findByGroupName(groupname) {
        return this.banco.find(item => item.groupname == groupname)
    }

    create(data) {
        this.banco.push(data)
        return data;
    }

    update(groupname,data){
        const itemIndex = this.banco.findIndex(item => item.groupname == groupname)
        this.banco[itemIndex] = { ...this.banco[itemIndex],...data}
        return this.banco[itemIndex];
    }

    delete(groupname){
        let deleted = this.banco.filter(item => item.groupname != groupname)
        this.banco = deleted;
        return this.banco;
    }
    
}
