module.exports = class ClientesEntity {

    dbEntity; //que irá chamar essa entidade Banco de dados.

    constructor(dbEntity) {
        this.dbEntity = dbEntity;
    }

    async findAll() {
        return new Promise((resolve, reject) => {
            this.dbEntity.query('SELECT distinct username  FROM radcheck', (error, results, fields) => {
                resolve(results)
            });
        })
    }

    findByUserName(username) {
        return new Promise((resolve, reject) => {
            this.dbEntity.query('SELECT * FROM radcheck where username = ?', [username], (error, results, fields) => {
                resolve(results)
            });
        })

    }

    create(data) {

        data.forEach(element => {
            this.dbEntity.query('insert into radcheck set ?', element, (error, results, fields) => {

            });
        });

        return Promise.resolve("ok");
    }

    update(username, data) {
        return new Promise((resolve, reject) => {

            let sql;
            let paramsData;
            
            if(data.hasOwnProperty('username') && !data.hasOwnProperty('attribute')){
                sql = `update radcheck set username = ? where username = ?`
                paramsData = [data.username,username]
            }else if(data.hasOwnProperty('username') && data.hasOwnProperty('attribute')){
                sql = `update radcheck set value = ?, username = ? where username = ? and attribute = ?`
                paramsData = [data.value,data.username, username, data.attribute]
            }else{
                sql = `update radcheck set value = ? where username = ? and attribute = ?`
                paramsData = [data.value, username, data.attribute]
            }

            this.dbEntity.query(sql, paramsData, (error, results, fields) => {
                resolve(results)
            });
        })
    }

    updateClientPlan(username, data) {
        return new Promise((resolve, reject) => {
            this.dbEntity.query('update radusergroup set groupname = ? where username = ?', [data.groupname, username], (error, results, fields) => {
                resolve(results)
            });
        })
    }

    deleteClientPlan(username) {
        return new Promise((resolve, reject) => {
            this.dbEntity.query('delete from radusergroup where username = ?', [username], (error, results, fields) => {
                resolve(results)
            })
        })
    }

    createClientPlan(data) {
        return new Promise((resolve, reject) => {
            this.dbEntity.query('insert into radusergroup set ?', data, (error, results, fields) => {
                if (error) reject(error)
                resolve(results)
            })
        })
    }

    getClientSessionId(username) {
        return new Promise((resolve, reject) => {
            let sql = `SELECT 
                            radacct.acctsessionid,
                            radacct.nasipaddress,
                            nas.secret 
                       FROM radacct 
                       INNER JOIN nas ON radacct.nasipaddress = nas.nasname
                       WHERE radacct.acctstoptime IS NULL
                       AND radacct.username = ?
                       GROUP BY radacct.acctsessionid`;

            this.dbEntity.query(sql, [username], (error, results, fields) => {
                resolve(results)
            });
        })

    }

    clientNavigationExtract(username) {
        return new Promise((resolve, reject) => {
            let sql = `SELECT acctsessionid,username,nasipaddress, 
                        acctstarttime,acctstoptime,callingstationid,
                        framedipaddress,acctinputoctets,acctoutputoctets
                        FROM radacct WHERE username = ?`;
            this.dbEntity.query(sql, [username], (error, results, fields) => {
                resolve(results)
            });
        })
    }

    clientNavigationExtractActive(username) {
        return new Promise((resolve, reject) => {
            let sql = `SELECT acctsessionid,username,nasipaddress, 
                        acctstarttime,acctstoptime,callingstationid,
                        framedipaddress,acctinputoctets,acctoutputoctets
                        FROM radacct WHERE username = ? and acctstoptime is null `;
            this.dbEntity.query(sql, [username], (error, results, fields) => {
                resolve(results)
            });
        })
    }


}