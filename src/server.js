const http = require("http");
const { handleRequest } = require("./routes");
const server = http.createServer(async (req, res) => {
  handleRequest(req, res);
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server has been started on ${PORT}...`);
});
