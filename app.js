// NOTE import module
const express = require("express");
const dotenv = require('dotenv');
const cors = require('cors');
const router = require('./routes/index');

dotenv.config();

// NOTE config
const app = express();
const port = process.env.PORT;

// NOTE 접속 설정
app.use(cors({
  origin: ["http://localhost:3000","https://yerim-e.com,", "http://127.0.0.1:3000"],
  // default: "www.one.com",
  credentials: true,
  optionsSuccessStatus: 200
}));

// NOTE router
app.use('/', router);

app.use(function (req, res, next) {
  res.setHeader("Content-Type", "application/json");
  next();
});

app.use(
  express.json({
    limit: '50mb', // 최대 50mb
  })
);
app.use(express.urlencoded({
  extended: true
}));


// FUNCTION start run server
app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});