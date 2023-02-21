const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const todosRouter = require('./app/api/todos/router')

const URL = '/api/v1'

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    res.json({
        message: 'welcome api qmun-todos',
        version: '1.0.1'
    })
})

app.use(`${URL}`, todosRouter);

module.exports = app;
