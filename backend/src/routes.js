const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const NGOController = require('./controllers/NGOController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.get('/ngos', NGOController.index);

// Create NGO
routes.post('/ngos', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.number().required().min(1000000000000).max(9999999999999),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), NGOController.create);

// Create Incident
routes.post('/incidents', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),

    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required().min(9),
        description: Joi.string().required().min(60),
        value: Joi.number().required(),
    }),
}), IncidentController.create);

// List Incidents
routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), IncidentController.index);

// Delete Incidents
routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), IncidentController.delete);

// List Incidents bt NGO
routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), ProfileController.index);

// Login
routes.post('/sessions', SessionController.create);

module.exports = routes;
