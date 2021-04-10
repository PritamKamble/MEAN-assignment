const { findAll, create, findOne, update } = require("./employee.service");

exports.getEmployees = async (req, res, next) => {
    let result = await findAll(req.query.search);
    res.status(200).json(result);
};

exports.getEmployeeById = async (req, res, next) => {
    let result = await findOne(req.params.id);
    res.status(200).json(result);
};

exports.createEmployee = async (req, res, next) => {
    const result = await create(req.body);
    res.status(200).json(result);
};

exports.updateEmployee = async (req, res, next) => {
    const result = await update(req.params.id, req.body);
    res.status(200).json(result);
};