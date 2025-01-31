const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://api.jsonserve.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // Rewrite the /api part from the URL
      },
    })
  );
};
