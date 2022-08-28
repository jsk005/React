const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
      '/reactSample',
    createProxyMiddleware({
      target: "https://www.abc.com",
      changeOrigin: true,
    })
  );
};
