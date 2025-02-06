const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/', createProxyMiddleware({
  target: 'http://localhost:3003',
  changeOrigin: true,
}));

app.use('/stress', createProxyMiddleware({
  target: 'http://localhost:3001/stress',
  changeOrigin: true,
}));

app.listen(3000, () => {
  console.log('Gateway service is running on http://localhost:3000');
});