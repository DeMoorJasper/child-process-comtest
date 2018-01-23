const { fork } = require('child_process');
const io = require('socket.io')();

let child;
function initSocket(callback) {
    io.on('connection', function (socket) {
        callback(socket);
    });
    io.listen(3000);
}

function startWorker(ready) {
    initSocket(ready);
    child = fork(require.resolve('./worker'), {
        cwd: process.cwd(),
        silent: true
    });
    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);
}

function sendMessage(socket, data, callback) {
    socket.emit('request', {
        hey: 'hey'
    }, (response) => {
        callback();
    });
}

function kill() {
    child.kill('SIGTERM');
    io.close();
    child = null;
}

exports.startWorker = startWorker;
exports.sendMessage = sendMessage;
exports.kill = kill;