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
  let id;

  if (!req.query.id){
    id = process.env.DEFAULT;
  }
  else{
    id = `https://velog.io/@${req.query.id}`;
  }

  console.log(id);

  const data = await Promise.resolve(crawler(id));
  res.json(data);
});

module.exports = router;
