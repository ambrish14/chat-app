const { rejects } = require("assert");
const { resolve } = require("dns");
const net = require("net");
const readline = require("readline/promises");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const clearLine = (dir) => {
  return new Promise((resolve, reject) => {
    process.stdout.clearLine(dir, () => {
      resolve();
    });
  });
};
const client = net.createConnection(
  { host: "127.0.0.1", port: 3008 },
  async () => {
    console.log("Connected to the server ");
    const ask = async () => {
      const message = await rl.question("Enter a message >");
      // clear the  current line that the cursor in
      await clearLine(0);
      client.write(message);
    };
    ask();
  },
);

client.on("data", (data) => {
  console.log(data.toString("utf-8"));
});

client.on("end", () => {
  console.log("connectio was ended!");
});
