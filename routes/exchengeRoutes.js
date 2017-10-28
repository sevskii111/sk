const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const requireAdmin = require("../middlewares/requireAdmin");
const Exchenge = mongoose.model("exchenge");
const Team = mongoose.model("teams");

module.exports = app => {
  app.get("/api/exchenge/prices", async (req, res) => {
    const exchenge = await Exchenge.findOne();
  });

  app.get("/api/exchenge/", async (req, res) => {
    const exchenge = await Exchenge.findOne();
    let prices = {};
    const keys = Object.keys(exchenge.startPrices);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (key == "__v" || key == "_id" || key == "$init") continue;
      prices[key] = Math.ceil(
        exchenge.startPrices[key] *
          exchenge.startAvalible[key] /
          exchenge.avalible[key] *
          100
      );
    }
    res.json({ ...exchenge._doc, prices });
  });

  app.post("/api/exchenge/generate", requireAdmin, async (req, res) => {
    await Exchenge.remove();
    const teamsCount = (await Team.find()).length;
    const settings = JSON.parse(
      fs.readFileSync(path.join(__dirname, "../config/settings.json"))
    ).team;

    const exchenge = await new Exchenge({
      avalible: {
        equipment: settings.equipment * teamsCount,
        energy: settings.energy * teamsCount,
        tech: settings.tech * teamsCount,
        transport: settings.transport * teamsCount,
        education: settings.education * teamsCount,
        weapon: settings.weapon * teamsCount,
        housing: settings.housing * teamsCount,
        supply: settings.supply * teamsCount,
        domestic: settings.domestic * teamsCount
      },
      startAvalible: {
        equipment: settings.equipment * teamsCount,
        energy: settings.energy * teamsCount,
        tech: settings.tech * teamsCount,
        transport: settings.transport * teamsCount,
        education: settings.education * teamsCount,
        weapon: settings.weapon * teamsCount,
        housing: settings.housing * teamsCount,
        supply: settings.supply * teamsCount,
        domestic: settings.domestic * teamsCount
      },
      startPrices: {
        equipment: 1,
        energy: 1,
        tech: 10,
        transport: 1,
        education: 1,
        weapon: 10,
        housing: 10,
        supply: 1,
        domestic: 1
      }
    }).save();

    res.json(exchenge);
  });
};
