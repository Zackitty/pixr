'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    albumId: DataTypes.INTEGER,
    galleryId: DataTypes.INTEGER,
    photoId: DataTypes.INTEGER,
    commentContent: DataTypes.TEXT,
    userId: DataTypes.INTEGER
  }, {});
  Comment.associate = function(models) {
    Comment.belongsTo(models.Album,{foreignKey:'albumId'})
    Comment.belongsTo(models.Gallery,{foreignKey:'galleryId'})
    Comment.belongsTo(models.Photo,{foreignKey:'photoId'})
    Comment.belongsTo(models.User,{foreignKey:'userId'})
  };
  return Comment;
};