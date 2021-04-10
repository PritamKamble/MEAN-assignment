const { findAll, create } = require("./employee.service");

exports.getEmployees = async (req, res, next) => {
    const result = await findAll();
    res.status(200).json(result);
};

exports.createEmployee = async (req, res, next) => {
    const result = await create(req.body);
    res.status(200).json(result);
};