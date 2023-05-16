const express = require('express');
const crawler = require('../crawler/index.js');

const dotenv = require('dotenv');
dotenv.config();

const router = express.Router();
/** FUNCTION get 메소드 요청하면 실행
 * method: get
 * host:port
 *  */
router.get('/', async (req, res) => {
  let url;

  if (!req.query.url){
    url = process.env.DEFAULT;
  }
  else{
    url = `https://velog.io/@${req.query.url}`;
  }

  console.log(url);

  const data = await Promise.resolve(crawler(url));
  res.json(data);
});

module.exports = router;
