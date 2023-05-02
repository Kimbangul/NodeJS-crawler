import express from 'express';
import crawler from './crawler';

const app = express();

app.use(
  express.json({
    limit: '50mb', // 최대 50mb
  })
);

// FUNCTION start run server
app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});