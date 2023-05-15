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
  
  let url = req.query.url;
  if (!url){
    url = process.env.DEFAULT;
  }

  const data = await Promise.resolve(crawler(url));
  res.json(data);
});

module.exports = router;
