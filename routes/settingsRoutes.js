const path = require("path");

module.exports = app => {
  app.get("/api/settings", (req, res) => {
    res.sendFile(path.join(__dirname, "../config/settings.json"));
  });
};
