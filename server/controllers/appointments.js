const Appointments = require('../models').Appointments;

module.exports = {
    create(req, res) {
        return Appointments
            .create({
                dealer: req.body.dealer,
                address: req.body.address,
                booked_date: req.body.booked_date,
                customer_name: req.body.customer_name,
                customer_phone: req.body.customer_phone,
                customer_email: req.body.customer_email,
                carId: req.body.carId,
            })
            .then(appointments => res.status(201).send(appointments))
            .catch(error => res.status(400).send(error));
    },

    list(req, res) {
        return Appointments
            .all()
            .then(appointments => res.status(200).send(appointments))
            .catch(error => res.status(400).send(error));
    },

    delete(req, res) {
        return Appointments
            .findById(req.params.app_id)
            .then(appointments => {
            if (!appointments) {
            return res.status(400).send({
                message: 'Appointment Not Found',
            });
        }
        return appointments
            .destroy()
            .then(() => res.status(200).send({message: 'Appointment Deleted..!!!'}))
            .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
    },


    update(req, res) {
        return Appointments
            .find({
                where: {
                    id: req.params.app_id
                },
            })
            .then(appointments => {
            if (!appointments) {
            return res.status(404).send({
                message: 'Appointment Not Found',
            });
        }

        return appointments
            .update({
                booked_date: req.body.booked_date || appointments.booked_date,
                carId: req.body.carId || appointments.carId,
            })
            .then(updatedAppointment => res.status(200).send(updatedAppointment))
            .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
    },
};