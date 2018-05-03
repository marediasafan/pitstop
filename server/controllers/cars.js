const Cars = require('../models').Cars;

module.exports = {
    create(req, res) {
        return Cars
            .create({
                make: req.body.make,
                model: req.body.model,
                year: req.body.year,
                mileage: req.body.mileage,
                ext_color: req.body.ext_color,
                int_color: req.body.int_color,
                trim: req.body.trim,
                description: req.body.description,
            })
            .then(cars => res.status(201).send(cars))
            .catch(error => res.status(400).send(error));
    },

    list(req, res) {
        return Cars
            .all()
            .then(cars => res.status(200).send(cars))
            .catch(error => res.status(400).send(error));
    },

    delete(req, res) {
        return Cars
            .findById(req.params.carid)
            .then(cars => {
            if (!cars) {
            return res.status(400).send({
                message: 'Car Not Found',
            });
        }
        return cars
            .destroy()
            .then(() => res.status(200).send({message: 'Car Deleted..!!!'}))
            .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
    },
};