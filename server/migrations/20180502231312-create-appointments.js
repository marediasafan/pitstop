'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Appointments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dealer: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.TEXT
      },
      booked_date: {
        type: Sequelize.DATE
      },
      customer_name: {
        type: Sequelize.STRING
      },
      customer_phone: {
        type: Sequelize.STRING
      },
      customer_email: {
        type: Sequelize.STRING
      },
      car_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      carId: {
          type: Sequelize.INTEGER,
          onDelete: 'NO ACTION',
          references: {
              model: 'Cars',
              key: 'id',
              as: 'carId',
          },
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Appointments');
  }
};