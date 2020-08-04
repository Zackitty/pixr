'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    albumId: DataTypes.INTEGER,
    galleryId: DataTypes.INTEGER,
    photoId: DataTypes.INTEGER,
    tagWord: DataTypes.STRING(100)
  }, {});
  Tag.associate = function(models) {
    Tag.belongsTo(models.Album, {foreignKey:'albumId'})
    Tag.belongsTo(models.Gallery, {foreignKey:'galleryId'})
    Tag.belongsTo(models.Photo, {foreignKey:'photoId'})
  };
  return Tag;
};