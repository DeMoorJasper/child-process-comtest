const testdata = require('../testdata');
const master = require('../lib/processes/master');

function startWorker() {
    return new Promise((resolve, reject) => {
        master.startWorker(() => {
            resolve(master);
        });
    });
}

function sendMessage(data) {
    return new Promise((resolve, reject) => {
        master.sendMessage(data, (response) => {
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

describe('Workers', () => {
    it('Startup time', async () => {
        await startWorker();
        await master.kill();
    });

    it('Message time', async () => {
        await startWorker();
        let start = (new Date()).valueOf();
        for (let i = 0; i < 1000; i++) {
            await sendMessage(testdata);
        }
        let took = (new Date()).valueOf() - start;
        console.log('AVG: ' + (took / 1000) + ' ms');
        await master.kill();
    });

    it('Ping worker + shared memory time', async () => {
        await startWorker();
        let start = (new Date()).valueOf();
        for (let i = 0; i < 1000; i++) {
            await pingWorker(testdata);
        }
        let took = (new Date()).valueOf() - start;
        console.log('AVG: ' + (took / 1000) + ' ms');
        await master.kill();
    });
});