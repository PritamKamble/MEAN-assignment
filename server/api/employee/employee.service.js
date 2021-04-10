const Employee = require('./employee.model');

exports.findAll = async (search) => {
    let result;
    if (search) {
        result = await Employee.find({
            $or: [
                { name: { $regex: search, $options: "i" } },
                { "address.city": { $regex: search, $options: "i" } },
            ]
        })
    } else {
        result = await Employee.find();
    }
    return result;
}

exports.findOne = async (id) => {
    return await Employee.findOne({ _id: id });
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


exports.update = async (id, doc) => {
    return await Employee.updateOne({ _id: id }, { $set: doc });
}