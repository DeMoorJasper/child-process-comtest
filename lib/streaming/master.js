const fs = require('fs');
const { fork } = require('child_process');
const streamifier = require('streamifier');

let child;
function startWorker(ready) {
    child = fork(require.resolve('./worker'), {
        cwd: process.cwd(),
        silent: true,
        stdio: [process.stdin, process.stdout, process.stderr, 'pipe', 'pipe', 'ipc']
    });
    child.send('init');
    child.once('message', (data) => {
        ready();
    });
}

function sendMessage(data, callback) {
    data = JSON.stringify(data);
    child.stdio[3].write(data, 'utf8');

    child.stdio[4]
        .once('data', function (chunk) {
            callback(chunk.toString());
        });
}

function kill() {
    child.kill('SIGTERM');
    child = null;
}

exports.startWorker = startWorker;
exports.sendMessage = sendMessage;
exports.kill = kill;