const route = require('./routes/route');
const app = require("./app");
const debug = require("debug")("node-angular");
const http = require("http");

const port = process.env.PORT || "3000";
app.set("port", port);
app.use("/", route);

const server = http.createServer(app);

const onError = error => {
  debug('Server not started. Error' + error);
  process.exit(1);
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
  debug("Listening on " + bind);
};

server.on("error", onError);
server.on("listening", onListening);
server.listen(port);
