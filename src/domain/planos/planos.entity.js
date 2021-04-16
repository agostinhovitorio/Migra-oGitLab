module.exports = class PlanosEntity {
    dbEntity;

    constructor(dbEntity) {
        this.dbEntity = dbEntity;
    }

    findAll() {
        return new Promise((resolve,reject) => {
            this.dbEntity.query('select groupname from radgroupcheck', function(error, results,fields){
                resolve(results);
            });
        });        
    }
    
    findByGroupName(groupname) {
        return new Promise((resolve,reject) => {
            this.dbEntity.query('select * from radgroupreply where groupname = ?',[groupname], function(error, results,fields){
                resolve(results);
            });
        });    
    }

    create(data) {
        data.forEach(element => {
            this.dbEntity.query('insert into radgroupreply set ?', element, (error, results, fields) => {

            });
        });
        return Promise.resolve("ok");
    }

    update(groupname,data){
        return new Promise((resolve, reject) => {
            this.dbEntity.query('update radgroupreply set value = ? where groupname = ? and attribute = ?', [data.value,groupname,data.attribute], (error, results, fields) => {
                resolve(results)
            });
        })
    }

    delete(groupname){
        return new Promise((resolve,reject) => {
            this.dbEntity.query('delete from radgroupreply where groupname = ?',[groupname],(error, results, fields) => {
             resolve(results)
            })
        })
    }
}    
