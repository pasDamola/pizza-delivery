const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the user model and schema
const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },

    email: {
        type: String,
        required: [true, 'Email field is required']
    },

    street: {
        type: String,
        required: [true, 'Street field is required']
    }
});

const User = mongoose.model('user', UserSchema);

module.exports = User;