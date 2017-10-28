require("./models/job");
require("./models/team");
require("./models/exchenge");

const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs");
mongoose.Promise = global.Promise;
const bodyParser = require("body-parser");
const settings = JSON.parse(fs.readFileSync("./config/settings.json"));
const cookieParser = require("cookie-parser");

//const teamHelper = require("./helpers/teamHelper");
//const defaultsHelper = require("./helpers/defaultsHelper");

const mongoURI = settings.mongoURI; //"mongodb://localhost:27017/new-civil-test1";

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());

require("./routes/authRoutes")(app);
require("./routes/settingsRoutes")(app);
require("./routes/teamsRoutes")(app);
require("./routes/transactionRoutes")(app);
require("./routes/exchengeRoutes")(app);

console.log(1);
app.use(express.static("client/build"));
const path = require("path");

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.listen(process.env.PORT || settings.port);
mongoose.connect(mongoURI, async () => {});
