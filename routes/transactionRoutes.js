const mongoose = require("mongoose");

const requireAdmin = require("../middlewares/requireAdmin");

const Team = mongoose.model("teams");
const Exchenge = mongoose.model("exchenge");

module.exports = app => {
  app.post("/api/transaction", requireAdmin, async (req, res) => {
    const { body } = req;
    const { income, outcome, type, teamId } = body;
    const team = await Team.findById(teamId);

    let keys = Object.keys(outcome);

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (key == "workers" || key == "soldiers") {
        if (body.type == "percent") {
          if (outcome[key] != 0) {
            return res
              .status(400)
              .send(
                "Как я должен в процентах забрать на время рабочих?(" +
                  key +
                  ")"
              );
          }
        } else {
          const result = team[key].used + outcome[key];
          if (result > team[key].amount) {
            return res
              .status(400)
              .send("Незватает незанятых рабочих рук(" + key + ")");
          }
          team[key].used = result;
        }
      } else if (key == "workersP" || key == "soldiersP") {
        const rawKey = key.substr(0, key.length - 1);
        if (body.type == "percent") {
          const multiplyer = 1 - outcome[key] / 100;
          if (multiplyer < 0) {
            return res
              .status(400)
              .send("Процент не может быть больше 100%(" + key + ")");
          }
          team[rawKey].amount = Math.floor(team[rawKey].amount * multiplyer);
        } else {
          team[rawKey].amount = Math.max(0, team[rawKey].amount - outcome[key]);
        }
      } else {
        if (body.type == "percent") {
          const multiplyer = 1 - outcome[key] / 100;
          if (multiplyer < 0) {
            return res
              .status(400)
              .send("Процент не может быть больше 100%(" + key + ")");
          }
          team[key] = Math.floor(team[key] * multiplyer);
        } else {
          const result = team[key] - outcome[key];
          if (result < 0) {
            return res.status(400).send("Не зватает ресурса(" + key + ")");
          }
          team[key] = result;
        }
      }
    }

    keys = Object.keys(income);

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (key == "workers" || key == "soldiers") {
        team[key].used -= income[key];
      } else if (key == "workersP" || key == "soldiersP") {
        const rawKey = key.substr(0, key.length - 1);
        team[rawKey].amount += income[key];
      } else {
        team[key] += income[key];
      }
    }

    await team.save();

    if (type == "exchenge") {
      const exchenge = await Exchenge.findOne();
      key = Object.keys(exchenge.avalible);
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (key == "__v" || key == "_id" || key == "$init") continue;
        exchenge.avalible[key] += outcome[key] - income[key];
      }

      await exchenge.save();
    }
    res.send(await Team.find());
  });
};
