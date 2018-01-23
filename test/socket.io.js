const testdata = require('../testdata');
const master = require('../lib/socket/master');

function startWorker() {
    return new Promise((resolve, reject) => {
        master.startWorker((socket) => {
            resolve(socket);
        });
    });
}

function sendMessage(socket, socketdata) {
    return new Promise((resolve, reject) => {
        master.sendMessage(socket, socketdata, (response) => {
            resolve(response);
        });
    });
}

function pingWorker(data) {
    return new Promise((resolve, reject) => {
        master.pingWorker(data, (response) => {
            resolve(response);
        });
    });
}

describe('socket.io workers', () => {
    it('Startup time', async () => {
        await startWorker();
        await master.kill();
    });

    it('Message time', async () => {
        let socket = await startWorker();
        let start = (new Date()).valueOf();
        for (let i = 0; i < 1000; i++) {
            await sendMessage(socket, testdata);
        }
        let took = (new Date()).valueOf() - start;
        console.log('AVG: ' + (took / 1000) + ' ms');
        await master.kill();
    });
});