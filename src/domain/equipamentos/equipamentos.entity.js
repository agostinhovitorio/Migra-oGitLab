module.exports = class EquipamentosEntity {
    dbEntity;

    constructor(dbEntity) {
        this.dbEntity = dbEntity;
    }

    findAll() {
        return new Promise((resolve, reject) => {
            this.dbEntity.query('select nasname from nas', function (error, results, fields) {
                if (error) reject(error)
                resolve(results);
            });
        });
    }

    findByShortName(shortname) {
        return new Promise((resolve, reject) => {
            this.dbEntity.query('select * from nas where shortname = ?', [shortname], function (error, results, fields) {
                if (error) reject(error)
                resolve(results);
            });
        });
    }

    create(data) {
        return new Promise((resolve, reject) => {
            this.dbEntity.query('insert into nas set ?', data, (error, results, fields) => {
                if (error) reject(error)
                resolve(results);
            });
        });

    }

    update(shortname, data) {
        return new Promise((resolve, reject) => {
            this.dbEntity.query('update nas set nasname = ? where shortname = ?', [data.nasname,shortname], (error, results, fields) => {
                if (error) reject(error)
                resolve(results)
            });
        })
    }

    delete(shortname) {
        return new Promise((resolve,reject) => {
            this.dbEntity.query('delete from nas where shortname = ?',[shortname],(error, results, fields) => {
                if (error) reject(error)
             resolve(results)
            })
        })
    }
}    