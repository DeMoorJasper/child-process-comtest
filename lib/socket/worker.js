const io = require('socket.io-client')('http://localhost:3000');
const testdata = require('../../testdata');

function processMessage(type, data) {
    return process.send('ready');
}

io.on('request', (data, callback) => {
    callback(testdata);
});