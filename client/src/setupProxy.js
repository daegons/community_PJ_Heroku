const { createProxyMiddleware } = require('http-proxy-middleware');


//* '/api의 요청은 로컬 5000번으로 보낸다..
module.exports =  (app)=> {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
    })
  );
};

