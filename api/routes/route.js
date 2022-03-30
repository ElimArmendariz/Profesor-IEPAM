const express = require('express');
const tempController = require('../controllers/tempController')
const router = express.Router();

router.post('/api/logTemp/:deviceID', tempController.logTemp);
router.post('/api/logUser/:username', tempController.logUser);
router.post('/api/logSensor/:userID/:description/:location', tempController.logSensor);

router.get('/api/getLogs', tempController.getLogs);
router.get('/api/getUsers', tempController.getUsers);
router.get('/api/getSensors', tempController.getSensors);

router.get('/api/getSensorsByUser/:username', tempController.getLogsByUser);


module.exports = router;