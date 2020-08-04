'use strict';
module.exports = (sequelize, DataTypes) => {
  const Fave = sequelize.define('Fave', {
    userId: DataTypes.INTEGER, 
    albumId: DataTypes.INTEGER,
    galleryId: DataTypes.INTEGER,
    photoId: DataTypes.INTEGER,
    tagWord: DataTypes.STRING(100)
  }, {});
  Fave.associate = function(models) {
    Fave.belongsTo(models.Album,{foreignKey:'albumId'})
    Fave.belongsTo(models.Gallery,{foreignKey:'galleryId'})
    Fave.belongsTo(models.Photo,{foreignKey:'photoId'})
    Fave.belongsTo(models.User,{foreignKey:'userId'})
  };
  return Fave;
};
