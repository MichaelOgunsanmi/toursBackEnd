const winston = require('winston');
const mongoose = require('mongoose');

const dbConnection = async () => {
    const dbLocal = process.env.DB_LOCAL;
    const dbOnline = process.env.DB_ONLINE;

    mongoose.set('useNewUrlParser', true);
    mongoose.set('useCreateIndex', true);
    mongoose.set('useFindAndModify', false);
    mongoose.set('useUnifiedTopology', true);

    try {
        if (process.env.NODE_ENV === "development"){
            const localDbConnection = await mongoose.connect(dbLocal);
            if (localDbConnection) winston.info(`Connected to Local MongoDB...`);
        } else if (process.env.NODE_ENV === "production") {
            const cloudConnection = await mongoose.connect(dbOnline);
            if (cloudConnection) winston.info(`Connected to Cloud Database...`);
        }
    } catch (error) {
        winston.info(error.message);
        process.exit(1);
    }
};


module.exports = dbConnection;