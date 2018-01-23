const testdata = require('../../testdata');
const cache = require('node-shared-cache');
let processCache = new cache.Cache('children', 524288);

function initWorker() {
    process.send('ready');
}

function processMessage(type, data) {
    switch (type) {
        case 'ping':
            data = processCache.request;
            processCache.response = testdata;
            process.send(1);
            break;
        case 'ipc':
            process.send(testdata);
            break;
    }
}

process.on('message', (message) => {
    if (message === 'init') {
        initWorker();
    } else {
        if (typeof message === 'number') {
            processMessage('ping', message);
        } else {
            processMessage('ipc', message);
        }
    }
});