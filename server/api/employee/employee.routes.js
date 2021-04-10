const express = require('express');
const router = express.Router();
const { getEmployees, createEmployee, getEmployeeById, updateEmployee } = require('./employee.controller')

router.get('/', getEmployees);

router.get('/:id', getEmployeeById);

router.post('/', createEmployee);

router.put('/:id', updateEmployee);


module.exports = router;