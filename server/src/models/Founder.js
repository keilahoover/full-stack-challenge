const DataTypes = require("sequelize");

module.exports = sequelize => {
  const Founder = sequelize.define(
    "founder",
    {
      id: {
        type: DataTypes.INTEGER(100),
        primaryKey: true
      },
      firstName: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      title: {
        type: DataTypes.STRING(100),
        allowNull: false
      }
    },
    {
      tableName: "founder"
    }
  );

  return Founder;
};
