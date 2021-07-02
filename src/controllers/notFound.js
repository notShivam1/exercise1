const notFound = async (req, res) => {
  res.writeHead(404);
  res.write("This route does not exist");
  res.end();
};

module.exports = notFound;
