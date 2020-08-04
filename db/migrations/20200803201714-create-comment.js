'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      albumId: {
        type: Sequelize.INTEGER,
        references: { model: 'Albums'}
        
      },
      galleryId: {
        type: Sequelize.INTEGER,
        references: {model: 'Galleries'}
      },
      photoId: {
        type: Sequelize.INTEGER,
        references: {model: 'Photos'}
      },
      commentContent: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {model: 'Users'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Comments');
  }
};