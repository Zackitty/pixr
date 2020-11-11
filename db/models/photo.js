'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING(100),
    photoPath: {
      type: DataTypes.STRING,
      allowNull: false
    },
    albumId: DataTypes.INTEGER,
    followsId: DataTypes.INTEGER,
    galleryId: DataTypes.INTEGER
  }, {});
  Photo.associate = function(models) {
    Photo.belongsTo(models.User,{foreignKey:'userId'})
    Photo.hasMany(models.Gallery, { foreignKey: 'photoId', onDelete: 'CASCADE', hooks: true})
    Photo.hasMany(models.Comment, { foreignKey: 'photoId', onDelete: 'CASCADE', hooks: true})
    Photo.hasMany(models.Tag, { foreignKey: 'photoId', onDelete: 'CASCADE', hooks: true})
    Photo.hasMany(models.Album, { foreignKey: 'photoId', onDelete: 'CASCADE', hooks: true})
    Photo.hasMany(models.Fave, { foreignKey: 'photoId', onDelete: 'CASCADE', hooks: true})
    Photo.hasMany(models.Follow, {foreignKey: 'photoId', onDelete: 'CASCADE', hooks: true})
  };
  return Photo;
};
