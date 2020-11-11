'use strict';
module.exports = (sequelize, DataTypes) => {
  const Follow = sequelize.define('Follow', {
    userId: DataTypes.INTEGER,
    followedUserId: DataTypes.INTEGER
  }, {});
  Follow.associate = function(models) {
    Follow.belongsTo(models.User,{foreignKey:'userId'})
    Follow.hasMany(models.User,{foreignKey:'userId'})
  };
  return Follow;
};