const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const empRoutes = require('./api/employee/employee.routes');

mongoose.connect('mongodb+srv://pritam:pritpk123@cluster0.slxeu.mongodb.net/employee?retryWrites=true&w=majority',
    { useNewUrlParser: true });
mongoose.Promise = global.Promise;

app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});

// Routes which should handle requests
app.use("/employee", empRoutes);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
});