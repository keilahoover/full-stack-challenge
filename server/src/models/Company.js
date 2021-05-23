const DataTypes = require("sequelize");

module.exports = sequelize => {
  const Company = sequelize.define(
    "company",
    {
      id: {
        type: DataTypes.INTEGER(100),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      city: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      state: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      description: {
        type: DataTypes.STRING(500),
        allowNull: false
      },
      foundedDate: DataTypes.DATE(6)
    },
    {
      tableName: "company"
    }
  );

  return Company;
};
