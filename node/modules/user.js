const mongoose = require('mongoose')
var phone = require('phone-regex');
const userSchema = mongoose.Schema({
    name: {
        type: String,
        // default: "user",
        require: true
    },
    password: {
        type: String,
        minlength: 3,
        require: true
    },

    historyQuestions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Questions' }]
})

module.exports = mongoose.model('user', userSchema)      