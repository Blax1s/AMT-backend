require('dotenv').config();
const mongoose = require('mongoose');
// const mongoURI = "mongodb+srv://tmohamedaashir:KCWpsXor1vZtmU1W@attendmanager.8sk6qsy.mongodb.net/attendDB";
const mongoURI = process.env.DATABASE_URI;

// Connecting Mongo Atlas to the server
const connectToMongo = () => {
    if(mongoose.connect(mongoURI)){
        console.log('Mongo Connected!!')
    }
}

module.exports = connectToMongo;