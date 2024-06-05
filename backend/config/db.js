const mongoose = require('mongoose');

const connectDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("database successfully connected");
    } catch (error) {
        console.log(`error while connecting the database ${error}`);
    }
}

module.exports = connectDatabase;