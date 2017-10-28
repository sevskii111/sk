module.exports = app => {
  app.get(JSON.parse(require('fs').readFileSync((require('path').join(__dirname, "../config/settings.json")))).authPath, (req, res) => {
    console.log(req.cookies);
    res.cookie("auth", "qazwsxcv").send("Success!");
  });
  app.get("/api/auth", (req, res) => {
    if (req.cookies.auth && req.cookies.auth == "qazwsxcv") {
      res.json({ auth: true });
    } else {
      res.json({ auth: false });
    }
  });
};
