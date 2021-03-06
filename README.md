# pec-server

[![JavaScript Style Guide][js-style-image ]][js-style-url]

Centralized back-end server for PowExChain built from scratch.

This project aims to constribute:

* centralized pec-server back-end demo
* [express](http://www.expressjs.com/) build demo
* basic CRUD operation logic
* production enviroment build demo

### Install and Startup
Make sure that you've had [Redis](https://redis.io/) server and Node.js installed before running.

Build the enviroment.

```shell
$ git clone https://github.com/hello-planet/pec-server.git
$ cd pec-server
$ npm install
```
Initialize server for the first time with clean database.
```shell
$ npm run init
```
Start server with data stored or restart server.
```shell
$ npm start
```
The terminal will track the server actions. Feel free to check the log files in `./log` directory. 

### Conventions

* [Data Structure](doc/data.md)
* [Request & Response](doc/req\&res.md)
* [Status Code](doc/status.md)
* [Functions](doc/func.md) (deprecated)

### Issues & Updates

* [Issues](doc/issue\&update.md#issues)
* [Updates](doc/issue\&update.md#updates)

[js-style-image ]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[js-style-url]: https://standardjs.com