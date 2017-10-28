const mongoose = require("mongoose");
const { Schema } = mongoose;

const jobSchema = require("./job");

const teamSchema = new Schema({
  name: String, //Название
  workers: jobSchema,
  soldiers: jobSchema,
  territory: Number, //Территория(кв.км.)
  money: Number, //Деньги(БАР)
  equipment: Number, //Здания и оборудования(производственный комплекс)
  energy: Number, //Сырьё и энергия(мегатонна)
  tech: Number, //Технолонии(технологическая документация)
  transport: Number, //Транспорт(подвижной состав)
  education: Number, //Образование(учебные заведения)
  weapon: Number, //Вооружение(боекомплект)
  housing: Number, //Жилой фонд(микрорайон)
  supply: Number, //Запасы продовольствия(килотонна)
  domestic: Number //Бытовые услуги(учреждения культуры, здравоохранения и бытовых услуг)
});

mongoose.model("teams", teamSchema);
