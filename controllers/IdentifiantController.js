const Identifiant = require('../models/Identifiant');
const AES = require("crypto-js/aes");
const SHA256 = require("crypto-js/sha256");
const CryptoJS = require("crypto-js");

exports.createIdentifiant = (req, res, next) => {
    delete req.body._id;

    const passwordCrypt = CryptoJS.AES.encrypt(req.body.password, 'secret key 123').toString();

    const identifiant = new Identifiant({
        name: req.body.name,
        username: req.body.username,
        password: passwordCrypt,
        image: req.body.image,
        categories_id: req.body.categories_id,
        date_creation: req.body.date_creation,
        date_modification: req.body.date_modification
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
            message: 'Objet supprimé !'
        }))
        .catch(error => res.status(400).json({
            error
        }))
};

exports.getAllIdentifiants = (req, res, next) => {
    
    Identifiant.find()
        .then(identifiants => {
            identifiants.forEach(item => {
                const bytes = CryptoJS.AES.decrypt(item.password, 'secret key 123');
                const passwordDecrypt = bytes.toString(CryptoJS.enc.Utf8);
                item.password = passwordDecrypt
            })
            res.status(200).json(identifiants)
        })
        .catch(error => res.status(400).json({
            error
        }));
};