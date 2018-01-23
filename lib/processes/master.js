const { fork } = require('child_process');
const cache = require('node-shared-cache');
let childCache = new cache.Cache('children', 524288);

let child;
function startWorker(ready) {
    child = fork(require.resolve('./worker'), {
        cwd: process.cwd(),
        silent: true
    });
    child.send('init');
    child.once('message', (data) => {
        ready();
    });
    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);
}

function pingWorker(data, callback) {
    childCache.request = data;
    child.send(1);
    child.once('message', (data) => {
        callback(childCache.response);
    });
}

function sendMessage(data, callback) {
    child.send(data);
    child.once('message', (data) => {
        callback(data);
    });
}

function kill() {
    if (child) {
        cache.release('children');
        child.kill('SIGTERM');
    }
    child = null;
}

exports.startWorker = startWorker;
exports.pingWorker = pingWorker;
exports.sendMessage = sendMessage;
exports.kill = kill;