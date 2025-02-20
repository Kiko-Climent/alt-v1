const functions = require("firebase-functions");
const next = require("next");

const isDev = process.env.NODE_ENV !== "production";
const server = next({
  dev: isDev,
  conf: { distDir: ".next" },  // Esto indica donde se encuentran los archivos de build
});

const nextjsHandle = server.getRequestHandler();

exports.nextServer = functions.https.onRequest((req, res) => {
  return server.prepare().then(() => nextjsHandle(req, res));
});
