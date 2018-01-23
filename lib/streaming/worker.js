const fs = require('fs');
const testdata = require('../../testdata');

function initWorker() {
    process.send('ready');

    // read from it
    let readable = fs.createReadStream(null, { fd: 3 });
    let writable = fs.createWriteStream(null, { fd: 4 });

    readable
        .on('data', function (chunk) {
            data = JSON.stringify(testdata);
            writable.write(data);
        })
        .on('end', function () {  // done
            console.log('pipe closed.');
        });
}

process.on('message', (message) => {
    if (message === 'init') {
        initWorker();
    }
});