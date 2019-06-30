const path = require('path');

function createServer(app) {
  app.get(/^\/api/, (req, res) => {
    let data = '';
    const url = path.join(__dirname, req.path);
    try {
      data = require(url); // eslint-disable-line
    } catch (err) {
      data = err.message;
    }
    res.json(data);
  });
}

module.exports.createServer = createServer;
