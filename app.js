// const express = require('express');
import Express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import crawler from './crawler/index.js';
import router from './routes/index.js';
// const dotenv = require('dotenv');
// const cors = require('cors');
// const crawler = require('./crawler/index');
// const router = require('./routes/index');

dotenv.config();

// NOTE config
const app = Express();
const port = process.env.PORT;

// NOTE 접속 설정
app.use(cors({
  origin: '*', // TODO
}));

// NOTE router
app.use('/', router);

app.use(
  express.json({
    limit: '50mb', // 최대 50mb
  })
);

// FUNCTION start run server
app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});