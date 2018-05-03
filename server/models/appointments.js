module.exports = (sequelize, DataTypes) => {
  const Appointments = sequelize.define('Appointments', {
    dealer: DataTypes.STRING,
    address: DataTypes.TEXT,
    booked_date: DataTypes.DATE,
    customer_name: DataTypes.STRING,
    customer_phone: DataTypes.STRING,
    customer_email: DataTypes.STRING
  });


  Appointments.associate = (models) => {
    // associations can be defined here
    Appointments.belongsTo(models.Cars, {
        foreignKey: 'carId',
        onDelete: 'NO ACTION',
    });
  };

  return Appointments;
};