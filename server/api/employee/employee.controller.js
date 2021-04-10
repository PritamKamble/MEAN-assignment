const { findAll, create } = require("./employee.service");

exports.getEmployees = async (req, res, next) => {
    let result = await findAll(req.query.search);
    res.status(200).json(result);
};

exports.createEmployee = async (req, res, next) => {
    const result = await create(req.body);
    res.status(200).json(result);
};