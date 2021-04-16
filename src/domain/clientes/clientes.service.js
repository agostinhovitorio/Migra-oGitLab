const ClientSSH = require('../../util/clientSSH.util');

module.exports = class ClientesService {

    constructor(clientEntity) {
        this.clientEntity = clientEntity;
        this.clientSSH = new ClientSSH();
    }

    async findAll() {
        let clientes = await this.clientEntity.findAll()
        return clientes;
    }

    async findByUserName(username) {
        return await this.clientEntity.findByUserName(username);
    }

    async create(data) {
        return await this.clientEntity.create(data)
    }

    async update(username, data) {
        return await this.clientEntity.update(username, data)
    }

    async delete(username) {
        return await this.clientEntity.delete(username)
    }

    async createClientPlan(data) {
        return await this.clientEntity.createClientPlan(data);
    }

    async updateClientPlan(username, data) {
        let clientPlanUpdate = await this.clientEntity.updateClientPlan(username, data);
        this.disconnectClient(username);
        return clientPlanUpdate;

    }

    async deleteClientPlan(username) {
        let deleteClientPlan = await this.clientEntity.deleteClientPlan(username);
        this.disconnectClient(username);
        return deleteClientPlan;
    }

    async clientNavigationExtract(username) {
        return await this.clientEntity.clientNavigationExtract(username);
    }
    async clientNavigationExtractActive(username) {
        return await this.clientEntity.clientNavigationExtractActive(username);
    }

    async changeBandWith(username,largeBand) {
        let userSession = await this.clientEntity.getClientSessionId(username);

        if(userSession.length === 0) throw "Cliente não logado!";

        let sessionId = userSession[0].acctsessionid;
        let ipNAS = userSession[0].nasipaddress;
        let secretNAS = userSession[0].secret;

        this.clientSSH.changeBandwithOnTheFly(sessionId, ipNAS, secretNAS, largeBand);
        return "ok"
    }

    async disconnectClient(username) {
        let userSession = await this.clientEntity.getClientSessionId(username);
        let sessionId = userSession[0].acctsessionid;
        let ipNAS = userSession[0].nasipaddress;
        let secretNAS = userSession[0].secret;
        this.clientSSH.disconnectClient(sessionId, ipNAS, secretNAS);
    }

}
