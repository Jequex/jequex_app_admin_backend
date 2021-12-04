const {Router} = require('express');

const authController = require('../controllers/auth');

const router = Router();

router.get('/test', authController.test);

module.exports = router;