//Set up mongoose connection
const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost:27017/noderestapi';
mongoose.connect(mongoDB,{useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
module.exports = mongoose;

// connection to mongodb
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));