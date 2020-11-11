'use strict';
module.exports = (sequelize, DataTypes) => {
  const Gallery = sequelize.define('Gallery', {
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING(100),
    description: DataTypes.TEXT,
    photoId: DataTypes.INTEGER,
    views: {
      type:DataTypes.INTEGER,
      allowNull: false 
    },
  }, {});
  Gallery.associate = function(models) {
    Gallery.belongsTo(models.User,{foreignKey:'userId'})
    Gallery.hasMany(models.Photo,{foreignKey:'photoId'})
    Gallery.hasMany(models.Fave, { foreignKey: 'galleryId', onDelete: 'CASCADE', hooks: true})
    Gallery.hasMany(models.Comment, { foreignKey: 'galleryId', onDelete: 'CASCADE', hooks: true})
    Gallery.hasMany(models.Tag, { foreignKey: 'galleryId', onDelete: 'CASCADE', hooks: true})
  };
  return Gallery;
};
  