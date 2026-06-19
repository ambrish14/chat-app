const { Socket } = require("dgram");
const net = require("net");

const server = net.createServer();
server.on("connection", (Socket) => {
  console.log("a new connection to the server");
});

server.listen(3008, "127.0.01", () => {
  console.log("Opened server on ", server.address());
});
