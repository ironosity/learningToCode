const express = require('express');
const livereload = require("livereload");
const connectLivereload = require("connect-livereload");
const path = require('path')

const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));
liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
      liveReloadServer.refresh("/");
    }, 100);
  });

const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 3000;
const app = express();


app.use(connectLivereload());
app.use(express.static('public'));
app.listen(port, host, () => {
    console.log('Server started', host, port);
    console.log('Press Ctrl+C to exit...\n');
});

