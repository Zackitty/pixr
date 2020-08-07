'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {
    userId: DataTypes.INTEGER,
    views: {
      type:DataTypes.INTEGER,
      allowNull: false},
    name: DataTypes.STRING(100),
    photo: {
      type: DataTypes.BLOB
    },
    imageUrl:{
      type:DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    imageLocalPath:{
      type:DataTypes.STRING(255),
      allowNull: false,
    },
    description: DataTypes.TEXT,
  }, {});
  Photo.associate = function(models) {
    Photo.belongsTo(models.User,{foreignKey:'userId'})
    Photo.hasMany(models.Gallery, { foreignKey: 'photoId', onDelete: 'CASCADE', hooks: true})
    Photo.hasMany(models.Comment, { foreignKey: 'photoId', onDelete: 'CASCADE', hooks: true})
    Photo.hasMany(models.Tag, { foreignKey: 'photoId', onDelete: 'CASCADE', hooks: true})
    Photo.hasMany(models.Album, { foreignKey: 'photoId', onDelete: 'CASCADE', hooks: true})
    Photo.hasMany(models.Fave, { foreignKey: 'photoId', onDelete: 'CASCADE', hooks: true})
  };
  return Photo;
};
