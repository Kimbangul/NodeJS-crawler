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
  let data = [];

  if (!req.query.id){
    id = process.env.DEFAULT;
  }
  else{
    id = `https://velog.io/@${req.query.id}`;
  }
    
  try{
    data = await Promise.resolve(crawler(id));
  }
  catch(e){
    console.log(e);
  }

  return res.json(data2);
});

module.exports = router;
