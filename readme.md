# Child_process communication experiment
This is a pure POC/Experimental implementation of workers to showcase communication performance

## Benchmarks (Based on 1000 messages [including 100ms spawning time])
* IPC: 399ms
* node-shared-cache: 350ms
* Socket.io: 1523ms
* fs streams: 325ms