const controller = require("../controllers");
const notFoundController = require("../controllers/notFound");
module.exports = {
  handleRequest: (req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    var url = req.url;
    switch (url) {
      case "/":
        controller(req, res);
        break;
      default:
        notFoundController(req, res);
        break;
    }
  },
};
