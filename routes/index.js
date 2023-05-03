const express = require('express');
const crawler = require('../crawler/index.js');

const router = express.Router();
/** FUNCTION get 메소드 요청하면 실행
 * method: get
 * host:port
 *  */
router.get('/', (req, res) => {
  res.send(crawler);
});

module.exports = router;
