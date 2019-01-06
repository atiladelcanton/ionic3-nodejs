const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const variables = require('../bin/configuration/variables');
//Router

const categoryRouter = require('../routes/category-route');
const productRouter = require('../routes/product-route');
const userRouter = require('../routes/user-route');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Config MongoDB
mongoose.connect(variables.database.connection, { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);
//Config Route

app.use('/api/category', categoryRouter)
app.use('/api/product', productRouter)
app.use('/api/user', userRouter)

module.exports = app;