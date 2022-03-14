const Identifiant = require('../models/Identifiant');

exports.createIdentifiant = (req, res, next) => {
    delete req.body._id;
    const identifiant = new Identifiant({
        ...req.body
    })
    identifiant.save()
        .then(() => res.status(201).json({
            message: 'Objet Crée !'
        }))
        .catch(error => res.status(400).json({
            error
        }));
};

exports.updateIdentifiant = (req, res, next) => {
    Identifiant.updateOne({
            _id: req.params.id
        }, {
            ...req.body,
            _id: req.params.id
        })
        .then(() => res.status(200).json({
            message: 'Objet modifié !'
        }))
        .catch(error => res.status(400).json({
            error
        }))
};

exports.deleteIdentifiant = (req, res, next) => {
    Identifiant.deleteOne({
            _id: req.params.id
        })
        .then(() => res.status(200).json({
            message: 'Obejt supprimé !'
        }))
        .catch(error => res.status(400).json({
            error
        }))
};

exports.getAllIdentifiants = (req, res, next) => {
    Identifiant.find()
        .then(identifiant => res.status(200).json(identifiant))
        .catch(error => res.status(400).json({
            error
        }));
};