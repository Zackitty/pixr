'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Faves', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {model: 'Users'}
      },
      galleryId: {
        type: Sequelize.INTEGER,
        references: {model: 'Galleries'}
      },
      photoId: {
        type: Sequelize.INTEGER,
        references: {model: 'Photos'}
      },
      albumId: {
        type: Sequelize.INTEGER,
        references: {model: 'Albums'}
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
  down:  (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Faves');
  }
};