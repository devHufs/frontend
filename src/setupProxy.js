const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      // 백엔드 주소
      target: "http://13.209.7.109/",
      changeOrigin: true,
    })
  );
};