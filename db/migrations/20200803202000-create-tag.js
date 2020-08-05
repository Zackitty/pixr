'use strict';
module.exports = {
  up:  (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tags', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      albumId:{ 
        type: Sequelize.INTEGER,
        references: {model: 'Albums'}
      },
      galleryId: {
        type: Sequelize.INTEGER,
        eferences: {model: 'Galleries'}
      },
      photoId: {
        type: Sequelize.INTEGER,
        eferences: {model: 'Photos'}
      },
      tagWord: {type: Sequelize.STRING(100)}
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Tags');
  }
};