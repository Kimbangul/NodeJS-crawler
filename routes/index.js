import { Router, Request, Response } from 'express';
const router = Router();
/** FUNCTION get 메소드 요청하면 실행
 * method: get
 * host:port
 *  */
router.get('/', (req, res) => {
  res.send('Hello world!');
});

module.exports = router;
