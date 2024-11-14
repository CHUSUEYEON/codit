const File = function (Sequelize, DataTypes) {
  return Sequelize.define(
    "File",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
    },
    {
      tableName: "file",
      freezeTableName: true,
      timestamps: false,
    }
  );
};

module.exports = File;
