const mongoose = require('mongoose')
const questionSchema = mongoose.Schema({


    answer: {
        type: String,
        require: true
    },
    question: {
        type: String,
        require: true
    },
    value: {
        type: String,
        // require: true
    },
    airdate: {
        type: Date,
        // require: true
    },
    created_at: {
        type: Date,
        // require: true
    },
    updated_at: {
        type: Date,
        // require: true
    },
    category_id: {
        type: Date,
        // require: true
    },
    game_id: {
        type: Number,
    },
    invalid_count: {
        type: Number,
    },
    category: {
        id: { type: Number },
        title: { type: String },
        created_at: { type: Date },
        updated_at: { type: Date },
        clues_count: { type: Number }
    },
    userId: {
        type: String,
    },

    user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    }

})
module.exports = mongoose.model('question', questionSchema)
