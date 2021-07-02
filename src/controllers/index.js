const arrayOfUrls = require("../constant");
const fetch = require("node-fetch");

const base = async (req, res) => {
  var arrResponse = { success: [], failed: [] };
  await Promise.all(arrayOfUrls.map((url) => fetch(url).then((res) => res)))
    .then((responses) => {
      return responses.map((response) => {
        const { url, status } = response;
        if (response.ok) {
          const temp = { endpoint: url, status };
          arrResponse.success.push(temp);
        } else {
          const temp = { endpoint: url, status };
          arrResponse.failed.push(temp);
        }
      });
    })
    .catch((error) => {
      res.writeHead(500);
      res.write(error);
    });
  res.write(
    JSON.stringify({
      success: "true",
      message: "Nice Message",
      data: arrResponse,
    })
  );
  res.end();
};

module.exports = base;
