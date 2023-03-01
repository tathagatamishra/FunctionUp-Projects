const mongoose = require('mongoose')

const ObjectId = mongoose.Schema.Types.ObjectId

const internSchema = new mongoose.Schema({

    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    mobile: {
        type: String,
        require: true,
        unique: true
    },
    collegeId: {
        type: ObjectId,
        ref: "college"
    },
    isDeleted: {
        type: Boolean,
        default: false
    }

}, { timestamps: true })

module.exports = mongoose.model('intern', internSchema)