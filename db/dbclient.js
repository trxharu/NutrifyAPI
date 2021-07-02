const mongoose = require('mongoose')

const uri = "mongodb+srv://nutrify:aEIjDCRFDdd3d5UR@nutrify-cl0.h2ybc.mongodb.net/nutrifydb?retryWrites=true&w=majority"

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})

const dbClient = mongoose.connection;

module.exports = dbClient