/*const testdata = require('../testdata');
const threads = require('../lib/threadsagogo');

function createThread() {
    threads.createThread();
}

function sendMessage(data) {
    return new Promise((resolve, reject) => {
        threads.sendMessage(data, (data) => {
            resolve(data);
        })
    });
}

describe('Workers', () => {
    it('Start thread', async () => {
        await createThread();
        await threads.kill();
    });

    it('Send message to thread', async () => {
        await createThread();
        for (let i = 0; i < 1000; i++) {
            await sendMessage(testdata);
        }
        await threads.kill();
    });
});*/