const Sequelize = require("sequelize");

const sequelize = new Sequelize("techstars-db", "keilahoover", "techstars123", {
  host: "127.0.0.1",
  dialect: "mysql"
});

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.companies = require("../models/Company")(sequelize);
db.founders = require("../models/Founder")(sequelize);

db.companies.hasMany(db.founders, {
  as: "founders"
});

db.founders.belongsTo(db.companies, {
  targetKey: "id",
  foreignKey: "companyId",
  as: "company"
});

module.exports = db;
global.exports = db;
