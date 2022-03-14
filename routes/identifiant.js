const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const identifiantCtrl = require('../controllers/IdentifiantController');

router.post('/post', auth, identifiantCtrl.createIdentifiant)
router.put('/put/:id', auth, identifiantCtrl.updateIdentifiant);
router.use('/delete/:id', identifiantCtrl.deleteIdentifiant)
router.get('/', auth, identifiantCtrl.getAllIdentifiants)

module.exports = router;