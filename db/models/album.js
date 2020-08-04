'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    userId: DataTypes.INTEGER,
    photoId: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    name: DataTypes.STRING,
    views: {
      type:DataTypes.INTEGER,
      allowNull: false
    },
  
  }, {});
  Album.associate = function(models) {
    Album.belongsTo(models.User,{foreignKey:'userId'})
    Album.belongsTo(models.Photo,{foreignKey:'photoId'})
    Album.hasMany(models.Fave, { foreignKey: 'albumId', onDelete: 'CASCADE', hooks: true})
    Album.hasMany(models.Comment, { foreignKey: 'albumId', onDelete: 'CASCADE', hooks: true})
    Album.hasMany(models.Tag, { foreignKey: 'albumId', onDelete: 'CASCADE', hooks: true})
  };
  return Album;
}