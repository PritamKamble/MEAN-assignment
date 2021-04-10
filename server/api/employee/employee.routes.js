const express = require('express');
const router = express.Router();
const { getEmployees, createEmployee } = require('./employee.controller')

router.get('/', getEmployees);

router.post('/', createEmployee);


module.exports = router;