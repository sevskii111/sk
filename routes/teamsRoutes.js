const passport = require("passport");
const mongoose = require("mongoose");

const Team = mongoose.model("teams");

const requireAdmin = require("../middlewares/requireAdmin");

module.exports = app => {
  app.get("/api/teams", requireAdmin, async (req, res) => {
    const teams = await Team.find();
    res.send(teams);
  });
  app.post("/api/teams/create", requireAdmin, async (req, res) => {
    const name = req.body.name;
    if (!name) return res.status(400).send();
    const team = await Team.findOne({ name });
    if (team) return res.status(400).send();
    const defaults = JSON.parse(
      require("fs").readFileSync("config/settings.json")
    ).team;

    await new Team({
      name,
      workers: defaults.workers,
      soldiers: defaults.soldiers,
      territory: defaults.territory,
      money: defaults.money,
      equipment: defaults.equipment,
      energy: defaults.energy,
      tech: defaults.tech,
      transport: defaults.transport,
      education: defaults.education,
      weapon: defaults.weapon,
      housing: defaults.housing,
      supply: defaults.supply,
      domestic: defaults.domestic
    }).save();

    const teams = await Team.find();
    res.send(teams);
  });
  app.post("/api/teams/delete", requireAdmin, async (req, res) => {
    await Team.findOneAndRemove({ name: req.body.name });

    const teams = await Team.find();
    res.send(teams);
  });
  app.post("/api/teams/rename", requireAdmin, async (req, res) => {
    const team = await Team.findOne({ name: req.body.name });
    if (team) return res.status(400).send("");
    await Team.findOneAndUpdate(
      { name: req.body.oldName },
      { $set: { name: req.body.name } }
    );

    const teams = await Team.find();
    res.send(teams);
  });

  app.post("/api/team/endyear", requireAdmin, async (req, res) => {
    const teams = await Team.find();
    for (let i = 0; i < teams.length; i++) {
      const team = teams[i];
      team.workers.used = 0;
      team.soldiers.used = 0;
      await team.save();
    }
    res.json(await Team.find());
  });
};
