const mongoose = require("mongoose");

const Team = mongoose.model("teams");

const defaultsHelper = require("./defaultsHelper");

module.exports = {
  createTeam: async name => {
    const defaults = await defaultsHelper.getDefaults();
    const team = await new Team({
      name,
      population: defaults.population,
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
    return team;
  }
};
