module.exports = class EquipamentosEntity {
    banco = []

    findAll() {
        return this.banco;
    }

    findByShortName(shortname) {
         return this.banco.find(item => item.shortname == shortname)
    }

    create(data) {
        this.banco.push(data)
        return data;
    }

    update(shortname,data) {
        const itemIndex = this.banco.findIndex(item => item.shortname == shortname)
        this.banco[itemIndex] = { ...this.banco[itemIndex],...data}
        return this.banco[itemIndex];
    }
    
    delete(shortname) {
        let deleted = this.banco.filter(item => item.shortname != shortname)
        this.banco = deleted;
        return this.banco;
    } 
    
}