const Employee = require('./employee.model');

exports.findAll = async () => {
    return await Employee.find();
}

exports.create = async (doc) => {
    emp = new Employee({
        id: await Employee.find().count() + 1,
        name: doc.name,
        phone: doc.phone,
        address: {
            city: doc.address.city,
            line1: doc.address.line1,
            line2: doc.address.line2,
            postalCode: doc.address.postalCode,
        }
    });
    return await emp.save();
}