const { NodeSSH } = require('node-ssh')

module.exports = class ClientSSH {
    ssh;

    constructor() {
        this.ssh = new NodeSSH()
        this.ssh.connect({
            host: '10.1.2.109',
            username: 'root',
            password: 'mv123'
        });
    }

    restartFreeradiusService() {
        this.ssh.execCommand('/etc/init.d/freeradius restart').then((result) => {
            console.log('STDOUT: ' + result.stdout)
            console.log('STDERR: ' + result.stderr)
        })
    }

    disconnectClient(sessionId, ipNAS, secretNAS) {
        let commandToDisconnectClient = `echo "Acct-Session-Id=${sessionId}" | radclient -r 1 ${ipNAS}:3779 disconnect ${secretNAS}`;

        this.ssh.execCommand(commandToDisconnectClient).then((result) => {
            console.log('STDOUT: ' + result.stdout)
            console.log('STDERR: ' + result.stderr)
        })
    }

    changeBandwithOnTheFly(sessionId, ipNAS, secretNAS, largeBand) {
        let commandToChange = `echo "Acct-Session-Id=${sessionId},Mikrotik-Rate-Limit=${largeBand}" | radclient -x ${ipNAS}:3779 coa ${secretNAS}`;

        this.ssh.execCommand(commandToChange).then((result) =>{
            console.log('STDOUT: ' + result.stdout)
            console.log('STDERR: ' + result.stderr)
        })
    }
}