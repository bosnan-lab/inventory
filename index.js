const express = require('express');
const debug = require('debug')('app:main');

const { Config } = require('./src/config/index');

const app = express();

app.use(express.json());

// modules

app.listen(Config.port, () => {
    debug(`Server running on port ${Config.port}`);
});
