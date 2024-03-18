
const express = require('express');
const router = express.Router();
const authController = require('../controllers/user-controller');
const validate = require('../middleware/validate-middleware');
const signupSchema = require('../validators/user-validator');

router.route('/register').post(validate(signupSchema), authController.register);

module.exports = router;