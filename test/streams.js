const testdata = require('../testdata');
const master = require('../lib/streaming/master');

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

describe('Streams', () => {
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
});