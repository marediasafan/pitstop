const carsController = require('../controllers').cars;
const appointmentsController = require('../controllers').appointments;
const path    = require("path");

module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to Pitstop API library',
    }));

    app.get('/api/cars', carsController.list);
    app.post('/api/cars/create', carsController.create);
    app.post('/api/cars/:carid/delete', carsController.delete);

    app.get('/api/appointments', appointmentsController.list);
    app.post('/api/appointments/create', appointmentsController.create);
    app.post('/api/appointments/:app_id/delete', appointmentsController.delete);
    app.post('/api/appointments/:app_id/update', appointmentsController.update);
};