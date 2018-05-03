module.exports = (sequelize, DataTypes) => {
  const Cars = sequelize.define('Cars', {
    make: DataTypes.STRING,
    year: DataTypes.INTEGER,
    model: DataTypes.STRING,
    mileage: DataTypes.INTEGER,
    ext_color: DataTypes.STRING,
    int_color: DataTypes.STRING,
    trim: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  Cars.associate = function(models) {
    // associations can be defined here
      Cars.hasMany(models.Appointments, {
          foreignKey: 'carId',
          as: 'appointmentIds',
      });
  };

  return Cars;
};