const mysql = require('mysql')

module.exports = class DBEntity{
    static getConnection() {
        return mysql.createConnection({
            host : '10.1.2.109',
            user: 'radius',
            password: 'mv123',
            database: 'radius',
        });
    }
}