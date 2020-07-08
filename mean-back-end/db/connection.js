const mongoose = require('mongoose');
const URI = 'mongodb+srv://nguyenkhiem:20071567New@mean.480sd.mongodb.net/meanDB?retryWrites=true&w=majority';

const connectDB = async () => {
    console.log('db connect ...')
    try {
        await mongoose.connect(URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
            })    
        console.log('db connected')
    } catch(err) {
        console.log('=== err ===')
        console.log(err)
    }    
};

module.exports = connectDB;