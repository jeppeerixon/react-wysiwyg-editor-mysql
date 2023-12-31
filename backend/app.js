const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')
require('dotenv').config()


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const documentsRouter = require('./routes/documents');

const app = express();

app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true
}))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/documents', documentsRouter);

module.exports = app;
