/*const threads = require('threads_a_gogo');

let thread;
function createThread() {
    thread = threads.create();
}

function pong() {
    return 'pong';
}

function sendMessage(data, callback) {
    thread.eval('pong()', (err, result) => {
        if (err) {
            throw err;
        }
        callback(result);
    });
}

function kill() {
    // Slay the child
    return new Promise((resolve, reject) => {
        thread.destroy(1, resolve);
    });
}*/